/** Публичные константы для ссылок (без секретов) */
export const TELEGRAM_CHANNEL_URL = "https://t.me/homo_management";

/** Бренд и превью ссылок (Telegram, WhatsApp, LinkedIn, Slack, iMessage…) */
export const SITE_BRAND_NAME = "Pavel.Dranchuk";

export const SITE_TAGLINE =
  "General Manager & AI enthusiast — game production, studio scaling, and commercial leadership.";

export const SITE_DESCRIPTION =
  "Portfolio of Pavel Dranchuk: GM in game dev, match-3 production, studio operations, former Sales Director in MedTech. Warsaw. AI Tooth guide, Telegram @pav_sep.";

export const LINKEDIN_URL = "https://www.linkedin.com/in/pavel-dranchuk-202b37125/";
export const TELEGRAM_DM_URL = "https://t.me/pav_sep";
export const CONTACT_EMAIL = "paveldranchuk36@gmail.com";

/** Стабильный продакшен URL (Vercel). OG / canonical / sitemap приоритетнее чем *.vercel.app от превью. */
export const SITE_CANONICAL_ORIGIN = "https://portfolio-pavel-dranchuk.vercel.app";

/**
 * Базовый URL сайта для canonical и Open Graph (абсолютные ссылки на картинки).
 * 1) NEXT_PUBLIC_SITE_URL (.env.production или Vercel Dashboard)
 * 2) в production-сборке — SITE_CANONICAL_ORIGIN
 * 3) иначе VERCEL_URL / localhost
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") return SITE_CANONICAL_ORIGIN;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function getAbsoluteUrl(path = "/"): string {
  const base = getSiteUrl();
  if (path.startsWith("http")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Имя бота без @; задайте NEXT_PUBLIC_TG_GUIDE_BOT в .env.local */
export function getTelegramGuideBotUrl(): string {
  const name = process.env.NEXT_PUBLIC_TG_GUIDE_BOT?.replace(/^@/, "").trim();
  if (!name) {
    return TELEGRAM_CHANNEL_URL;
  }
  return `https://t.me/${name}?start=scaling_guide`;
}
