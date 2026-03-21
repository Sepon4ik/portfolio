"""
Telegram-бот: шлюз для выдачи PDF после проверки подписки на канал.
Запуск: python bot.py (из папки telegram-guide-bot, с заполненным .env)
"""

from __future__ import annotations

import asyncio
import logging
import os
import sys
from pathlib import Path

from aiogram import Bot, Dispatcher, F, Router
from aiogram.enums import ChatMemberStatus
from aiogram.filters import CommandStart
from aiogram.types import (
    CallbackQuery,
    FSInputFile,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    Message,
)
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
CHANNEL_USERNAME = (os.getenv("CHANNEL_USERNAME") or "homo_management").lstrip("@")
PDF_PATH = Path(__file__).resolve().parent / (os.getenv("PDF_PATH") or "files/guide.pdf")

LOG = logging.getLogger("guide_bot")

router = Router()


def channel_url() -> str:
    return f"https://t.me/{CHANNEL_USERNAME}"


def not_subscribed_keyboard() -> InlineKeyboardMarkup:
    return InlineKeyboardMarkup(
        inline_keyboard=[
            [InlineKeyboardButton(text="📢 Подписаться на канал", url=channel_url())],
            [InlineKeyboardButton(text="✅ Я подписался", callback_data="check_sub")],
        ]
    )


async def user_is_subscribed(bot: Bot, user_id: int) -> bool:
    """Проверка подписки. Бот должен быть администратором канала."""
    chat_id = f"@{CHANNEL_USERNAME}"
    try:
        member = await bot.get_chat_member(chat_id=chat_id, user_id=user_id)
    except Exception as e:
        LOG.warning("get_chat_member failed user_id=%s: %s", user_id, e)
        return False

    if member.status in (
        ChatMemberStatus.CREATOR,
        ChatMemberStatus.ADMINISTRATOR,
        ChatMemberStatus.MEMBER,
    ):
        return True

    # Ограниченный, но всё ещё участник
    if member.status == ChatMemberStatus.RESTRICTED:
        return bool(getattr(member, "is_member", False))

    return False


async def send_pdf_to_user(message: Message, source: str) -> None:
    if not PDF_PATH.is_file():
        await message.answer(
            "⚠️ PDF ещё не загружен на сервер бота. Положите файл в "
            f"`{PDF_PATH}` и перезапустите бота."
        )
        LOG.error("PDF missing at %s", PDF_PATH)
        return

    doc = FSInputFile(PDF_PATH)
    await message.answer_document(
        document=doc,
        caption="📄 Free Guide: Scaling Studios 50 to 200+\nСпасибо, что с нами!",
    )
    u = message.from_user
    LOG.info(
        "PDF_DOWNLOAD user_id=%s username=%s name=%s source=%s file=%s",
        u.id if u else None,
        u.username if u else None,
        (u.full_name if u else None),
        source,
        PDF_PATH.name,
    )


@router.message(CommandStart())
async def cmd_start(message: Message, bot: Bot) -> None:
    if not message.from_user:
        return

    if await user_is_subscribed(bot, message.from_user.id):
        await message.answer(
            "👋 Привет! Ты подписан на канал — держи гайд ниже (PDF).\n\n"
            "_Scaling Studios: 50 → 200+_",
            parse_mode="Markdown",
        )
        await send_pdf_to_user(message, source="/start_subscribed")
    else:
        await message.answer(
            "Чтобы получить **бесплатный PDF-гайд**, подпишись на наш Telegram-канал, "
            "затем нажми **«Я подписался»** — бот проверит подписку.\n\n"
            f"Канал: @{CHANNEL_USERNAME}",
            parse_mode="Markdown",
            reply_markup=not_subscribed_keyboard(),
        )


@router.callback_query(F.data == "check_sub")
async def on_check_subscribed(callback: CallbackQuery, bot: Bot) -> None:
    if not callback.from_user or not callback.message:
        await callback.answer()
        return

    uid = callback.from_user.id
    if await user_is_subscribed(bot, uid):
        try:
            await callback.message.edit_reply_markup(reply_markup=None)
        except Exception:
            pass
        await callback.answer("Подписка подтверждена!", show_alert=False)
        await callback.message.answer(
            "🎉 Отлично! Вот твой гайд:",
        )
        await send_pdf_to_user(callback.message, source="callback_check_sub")
    else:
        await callback.answer(
            "Канал не виден. Подпишись по кнопке и попробуй снова.",
            show_alert=True,
        )


async def main() -> None:
    if not BOT_TOKEN:
        print("Укажите BOT_TOKEN в .env", file=sys.stderr)
        sys.exit(1)

    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    )

    bot = Bot(BOT_TOKEN)
    dp = Dispatcher()
    dp.include_router(router)

    LOG.info(
        "Bot starting | channel=@%s | pdf=%s",
        CHANNEL_USERNAME,
        PDF_PATH,
    )
    await dp.start_polling(bot)


if __name__ == "__main__":
    asyncio.run(main())
