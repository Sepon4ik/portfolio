# Кнопка на сайте → Telegram-бот с гайдом

## React / Next.js (как в проекте)

Используется компонент `components/GuideTelegramCta.tsx` и `getTelegramGuideBotUrl()` из `lib/site-config.ts`.

В `.env.local`:

```env
NEXT_PUBLIC_TG_GUIDE_BOT=YourBotUsername
```

Ссылка: `https://t.me/YourBotUsername?start=scaling_guide`

## Минимальный React

```tsx
const BOT = "YourBotUsername";
const href = `https://t.me/${BOT}?start=scaling_guide`;

export function OpenGuideBotButton() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded bg-red-500 px-4 py-2 text-white"
    >
      Free Guide: Scaling Studios 50 to 200+
    </a>
  );
}
```

## Vanilla JS

```html
<a
  id="tg-guide"
  href="https://t.me/YourBotUsername?start=scaling_guide"
  target="_blank"
  rel="noopener noreferrer"
>
  Free Guide: Scaling Studios 50 to 200+
</a>
```

```js
document.getElementById("tg-guide")?.addEventListener("click", () => {
  console.log("opened Telegram bot");
});
```
