import type { ReactNode } from "react";

type Variant = "black" | "light" | "redbark";

/** Единый размер слота и внешний отступ — у всех вариантов одинаковая «живая» зона под логотип */
const slotOuter =
  "flex h-20 w-20 shrink-0 rounded-xl border border-white/12 sm:h-[88px] sm:w-[88px]";
const slotPad = "p-2.5 sm:p-3";

/**
 * Слот под логотип в карточках со счётчиками: один размер, один зазор от края, object-contain без обрезки.
 * `redbark` — чёрная обводка блока + белая пластина на всю внутреннюю область (как у light по размерам).
 */
export function ExperienceLogoFrame({
  children,
  variant = "light",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  const inner = (
    <div className="flex min-h-0 min-w-0 flex-1 items-center justify-center">{children}</div>
  );

  if (variant === "redbark") {
    return (
      <div className={`${slotOuter} items-stretch justify-stretch bg-black ${slotPad}`}>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col items-stretch justify-stretch rounded-lg bg-white">
          {inner}
        </div>
      </div>
    );
  }

  const bg = variant === "black" ? "bg-black" : "bg-white";
  return (
    <div className={`${slotOuter} items-stretch justify-stretch ${bg} ${slotPad}`}>{inner}</div>
  );
}
