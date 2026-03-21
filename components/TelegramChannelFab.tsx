import { Send } from "lucide-react";

import { TELEGRAM_CHANNEL_URL } from "@/lib/site-config";

/**
 * Fixed FAB — rendered at body level so nothing covers it; high contrast for dark pages.
 */
export function TelegramChannelFab() {
  return (
    <a
      href={TELEGRAM_CHANNEL_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Открыть Telegram-канал"
      className="hover-bounce fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] right-[max(0.75rem,env(safe-area-inset-right,0px))] z-[9999] flex max-w-[calc(100vw-1.5rem)] items-center gap-2 rounded-full border-2 border-white/90 bg-cyan-500 px-3 py-2.5 text-xs font-bold tracking-tight text-zinc-950 shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_12px_40px_-8px_rgba(34,211,238,0.65)] transition hover:bg-cyan-400 hover:shadow-[0_0_0_1px_rgba(0,0,0,0.15),0_16px_48px_-6px_rgba(34,211,238,0.85)] sm:bottom-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:right-[max(1rem,env(safe-area-inset-right,0px))] sm:px-4 sm:py-3 sm:text-sm"
    >
      <Send className="h-4 w-4 shrink-0" strokeWidth={2.5} aria-hidden />
      <span className="hidden sm:inline">Telegram-канал</span>
      <span className="sm:hidden">Канал</span>
    </a>
  );
}
