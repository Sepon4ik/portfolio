# Деплой на Vercel

Я **не могу зайти в твой аккаунт Vercel** из Cursor — нужны твой логин и подтверждение в браузере. Ниже — всё, что мы «согласовали», в виде чеклиста: сделай по шагам один раз.

## Вариант A — через сайт (проще всего)

1. Зайди на [vercel.com](https://vercel.com) → **Log in** (GitHub / GitLab / Bitbucket).
2. **Add New… → Project** → импортируй репозиторий с этим проектом (или загрузи папку через CLI, см. вариант B).
3. **Framework Preset:** Next.js (подхватится сам).
4. **Root Directory:** корень репозитория (где лежит `package.json` этого лендинга).
5. **Build Command:** `npm run build` (по умолчанию).
6. **Output:** не трогай — App Router сам.
7. Нажми **Deploy**.

### Переменные окружения (Project → Settings → Environment Variables)

| Name | Value | Где нужен |
|------|--------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Твой продакшен URL **без** слэша в конце. Сейчас: `https://portfolio-pavel-dranchuk.vercel.app` — или свой кастомный домен после подключения | Production (+ Preview по желанию) |
| `NEXT_PUBLIC_TG_GUIDE_BOT` | имя бота **без** `@`, если гайд ведёт в бота | По желанию; иначе кнопка ведёт на канал |

После добавления `NEXT_PUBLIC_SITE_URL` сделай **Redeploy** (Deployments → … → Redeploy), чтобы Open Graph и canonical пересобрались с правильным доменом.

Если **не** задавать `NEXT_PUBLIC_SITE_URL`, на Vercel всё равно подставится `VERCEL_URL` из билда — превью ссылок обычно работают на `*.vercel.app`.

---

## Вариант B — через CLI на своём ПК

В папке проекта:

```bash
npm i -g vercel
vercel login
vercel link    # привязать к проекту
vercel env add NEXT_PUBLIC_SITE_URL production
vercel --prod
```

---

## Аналитика посещений

1. **Vercel Web Analytics** (уже в коде: `components/SiteAnalytics.tsx` + `@vercel/analytics`):
   - В Vercel открой проект → вкладка **Analytics** → включи **Web Analytics** (на бесплатном плане есть лимит просмотров).
   - После деплоя в том же разделе появятся **просмотры страниц**, топ страниц, страны и т.д. Без включения в дашборде данные не собираются.

2. **Google Analytics 4 (по желанию):** создай поток в [Google Analytics](https://analytics.google.com/), скопируй **Measurement ID** (`G-…`), добавь в Vercel **Environment Variables**:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` (Production), затем **Redeploy**.

## Что уже настроено в коде

- **OG / Twitter / canonical** — `app/layout.tsx` + `metadataBase` из `getSiteUrl()` (`lib/site-config.ts`).
- **`/robots.txt`**, **`/sitemap.xml`**, **`/manifest.webmanifest`** — генерируются Next’ом.
- **JSON-LD Person** — `components/SiteJsonLd.tsx`.
- **Аналитика** — `SiteAnalytics` (Vercel + опционально GA4).
- Пример переменных — `.env.example`.

---

## Свой домен (убрать `*.vercel.app` из адресной строки)

Пока сайт только на Vercel-поддомене, в браузере будет **`something.vercel.app`** — так устроен хостинг. **Название во вкладке** (`Pavel.Dranchuk`) и **адрес сайта** — разные вещи.

Чтобы в строке был свой адрес без `vercel.app`:

1. Купи домен (например `paveldranchuk.com` у регистратора).
2. Vercel → Project → **Settings → Domains** → добавь домен, настрой DNS по инструкции Vercel.
3. В **Environment Variables** выставь **`NEXT_PUBLIC_SITE_URL`** = `https://твойдомен.com` и в `lib/site-config.ts` обнови **`SITE_CANONICAL_ORIGIN`** на тот же URL → **Redeploy**.

Строка `Pavel.Dranchuk` как URL **недопустима** в браузере (нет такого формата домена); обычно используют `paveldranchuk.com` или `dranchuk.com`.

---

## Проверка превью ссылки

После деплоя открой:

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)  
- или вставь URL в Telegram — должны подтянуться **Pavel.Dranchuk**, описание и **картинка** `/pavel.png`.

Если картинка старая — в отладчике Facebook нажми **Scrape Again**.
