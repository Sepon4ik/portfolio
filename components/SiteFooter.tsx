import { FileDown, Linkedin, Megaphone, Send } from "lucide-react";
import { GuideTelegramBlock } from "@/components/GuideTelegramCta";
import { getTelegramGuideBotUrl, LINKEDIN_URL, SITE_BRAND_NAME, TELEGRAM_DM_URL } from "@/lib/site-config";

const social = [
  {
    name: "LinkedIn",
    href: LINKEDIN_URL,
    icon: Linkedin,
  },
  {
    name: "Telegram",
    href: "https://t.me/pav_sep",
    icon: Send,
  },
  {
    name: "Telegram channel",
    href: "https://t.me/homo_management",
    icon: Megaphone,
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const guideBotUrl = getTelegramGuideBotUrl();

  return (
    <footer className="border-t border-zinc-800 bg-[#070708]/92">
      <div className="mx-auto flex min-w-0 max-w-[1500px] flex-col items-center gap-8 px-3 py-12 sm:gap-10 sm:px-8 sm:py-14">
        <GuideTelegramBlock botUrl={guideBotUrl} />

        <div className="flex flex-wrap items-center justify-center gap-3">
          {social.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className="hover-bounce inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition hover:border-zinc-600 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href="/Pavel-Dranchuk-CV.pdf"
          download
          className="hover-bounce inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/60 px-6 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/40 hover:bg-zinc-800"
        >
          <FileDown className="h-4 w-4" />
          Download Pavel&apos;s PDF CV
        </a>
        <p className="max-w-md text-center text-[11px] leading-relaxed text-zinc-600">
          Add your file as{" "}
          <code className="rounded bg-zinc-900 px-1.5 py-0.5 text-zinc-500">
            public/Pavel-Dranchuk-CV.pdf
          </code>{" "}
          for the download to work on production.
        </p>

        <p className="text-xs text-zinc-600">
          © {year} {SITE_BRAND_NAME} · Warszawa
        </p>
      </div>
    </footer>
  );
}
