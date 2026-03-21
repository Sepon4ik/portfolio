# Telegram-бот: PDF после подписки на канал

Бот на **Python 3.10+** и **aiogram 3**: команда `/start`, проверка подписки на канал, выдача PDF.

## Требования

1. Создайте бота в [@BotFather](https://t.me/BotFather), получите токен.
2. Добавьте бота **администратором** в ваш Telegram-канал (для метода `getChatMember` это обязательно). Достаточно минимальных прав.
3. Канал должен быть **публичным** (есть `@username`), либо используйте числовой `-100…` ID в коде вместо `@username`.

## Установка

```bash
cd telegram-guide-bot
python -m venv .venv
.venv\Scripts\activate   # Windows
# source .venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
copy .env.example .env     # заполните BOT_TOKEN и при необходимости CHANNEL_USERNAME
```

Положите PDF в `files/guide.pdf` (или путь в `PDF_PATH` в `.env`).

## Запуск

```bash
python bot.py
```

В консоли при каждой выдаче файла будет строка вида:

`PDF_DOWNLOAD user_id=… username=… source=/start_subscribed …`

## Сайт (Next.js)

В корне проекта портфолио задайте в `.env.local`:

```env
NEXT_PUBLIC_TG_GUIDE_BOT=YourBotName
```

Ссылка на бота: `https://t.me/YourBotName?start=scaling_guide`

Кнопки на сайте ведут на этого бота.
