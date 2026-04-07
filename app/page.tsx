import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import DeckShell from "./components/DeckShell";

const telegramUrl = "https://t.me/pav_sep";

const experience = [
  { year: "2025 — наст.", role: "Основатель", org: "ORFEO · AI агентство", href: "https://orfeo-site.vercel.app" },
  { year: "2023 — наст.", role: "Генеральный директор", org: "RedBark Game Studio", href: "https://redbarkgames.com/" },
  { year: "2021 — 2023", role: "Lead PM", org: "RedBark Game Studio", href: "https://redbarkgames.com/" },
  { year: "2016 — 2021", role: "Директор по продажам", org: "Active Life Technologies", href: null },
];

type Project = {
  name: string;
  url: string;
  href: string;
  tag: string;
  desc: string;
  tech: string[];
  accent: string;
  image: string;
  metric?: string;
  brand?: string; // brand wordmark to show
};

const projects: Project[] = [
  {
    name: "ProLife Agent",
    url: "prolife-agent-prolife.vercel.app",
    href: "https://prolife-agent-prolife.vercel.app",
    tag: "AI · ProLife AG · Швейцария",
    desc: "AI-платформа автоматизации B2B-аутрича: парсинг, обогащение, скоринг, персональные email-цепочки, классификация ответов и передача горячих лидов в Telegram.",
    tech: ["Next.js", "Claude AI", "Resend", "Inngest"],
    accent: "#4ade80",
    image: "/proj-prolife.jpg",
    brand: "ProLife AG",
  },
  {
    name: "Pharma Monitor",
    url: "pharma-monitor-uz.vercel.app",
    href: "https://pharma-monitor-uz.vercel.app",
    tag: "Аналитика дистрибуции · Узбекистан",
    desc: "Real-time мониторинг распространения и цен в аптеках Узбекистана через ArzonApteka API. 1735 аптек, 434 продукта, 33 958 точек данных за первый сбор.",
    tech: ["Python", "httpx", "SQLite", "Streamlit"],
    accent: "#fb923c",
    image: "/proj-pharma.jpg",
    metric: "1735 аптек",
  },
  {
    name: "AI Hub",
    url: "comfy.org",
    href: "https://www.comfy.org/",
    tag: "Маркетинг-креативы · Playrix",
    desc: "Нодовая система генерации маркетинговых креативов. Обучил кастомные LoRA-модели под точную стилистику игр Playrix для рекламных кампаний на масштабе.",
    tech: [
      "ComfyUI",
      "LoRA",
      "Flux 2",
      "Nano Banana Pro",
      "Seedream 4.0",
      "Soul 2.0",
      "Kling 2.5",
      "Sora 2",
      "Veo 3",
      "Hailuo 02",
    ],
    accent: "#a855f7",
    image: "/proj-aihub.jpg",
    metric: "× 3 быстрее",
    brand: "PLAYRIX",
  },
];

export default function Home() {
  return (
    <DeckShell>
      {/* ════════════════════════════════════════
          SLIDE 1 — Portfolio
      ════════════════════════════════════════ */}
      <section className="slide flex flex-col overflow-hidden bg-[#09090b]">
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5 shrink-0">
        <div className="font-serif text-xl font-semibold tracking-tight">
          <span className="text-gradient">ORFEO</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-white/30">
          <span className="font-mono uppercase tracking-wider">01 / 02</span>
          <span className="text-white/15">·</span>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 px-5 py-2 text-[12px] font-medium text-white/80 transition hover:bg-white/15"
          >
            Связаться
          </a>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-[1340px] px-10 pb-6 grid grid-rows-[auto_1fr_auto] gap-5 min-h-0">
        {/* ── ROW 1 — Identity ── */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-stretch">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#4ade80]/30 bg-[#4ade80]/10 px-3 py-1 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] pulse-ring" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                Открыт к проектам
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] leading-[0.98] font-semibold tracking-tight">
              Павел Дранчук
            </h1>

            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
              Product Manager &middot; Operations Leader &middot; Основатель ORFEO
            </p>

            <p className="mt-4 max-w-[600px] text-[13.5px] leading-[1.55] text-white/55">
              15+ лет опыта: от продаж медоборудования в Беларуси, до управления
              студией мобильных игр на 200 человек, до построения AI-агентов
              и систем автоматизации для медтеха и фармы.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-6 max-w-[380px]">
              {[
                { n: 15, s: "+", l: "Лет опыта" },
                { n: 200, s: "+", l: "Команда" },
                { n: 4, s: "", l: "Индустрии" },
              ].map((m) => (
                <div key={m.l} className="border-t border-white/12 pt-2">
                  <div className="font-serif text-[clamp(1.3rem,2vw,1.6rem)] font-semibold tracking-tight">
                    <AnimatedCounter target={m.n} suffix={m.s} />
                  </div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Credentials — two proofs side by side */}
            <div className="mt-auto pt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              {/* Founders proof */}
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="photo-frame w-[68px] aspect-[4/3]">
                    <Image
                      src="/playrix-poker-1.jpg"
                      alt="С братьями Бухман — финальный стол"
                      width={240}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="photo-frame w-[68px] aspect-[4/3]">
                    <Image
                      src="/playrix-poker-2.jpg"
                      alt="С Игорем и Дмитрием Бухман"
                      width={240}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="photo-frame w-[68px] aspect-[4/3]">
                    <Image
                      src="/playrix-poker-3.jpg"
                      alt="Награждение Playrix Top 100"
                      width={240}
                      height={180}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#4ade80]/85">
                    🏆 Playrix Top 100
                  </span>
                  <span className="text-[11px] leading-[1.35] text-white/55 mt-0.5">
                    С Игорем и Дмитрием Бухман
                    <br />
                    <span className="text-white/35">— основателями Playrix</span>
                  </span>
                </div>
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block h-12 w-px bg-white/8" />

              {/* LinkedIn public proof */}
              <a
                href="https://www.linkedin.com/in/pavel-dranchuk-202b37125/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-[#0A66C2]/25 bg-[#0A66C2]/[0.06] px-3 py-2 transition hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/[0.12]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#0A66C2] text-white font-bold text-[14px]">
                  in
                </div>
                <div className="flex flex-col">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-[16px] font-semibold tracking-tight text-white">
                      5 842
                    </span>
                    <span className="text-[10px] text-white/45">подписчиков</span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0A66C2]/90">
                    Публичный менеджер · LinkedIn ↗
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Single profile photo — fills full column height */}
          <div className="hidden md:block w-[230px] h-full">
            <div className="photo-frame relative w-full h-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Павел Дранчук"
                fill
                sizes="230px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── ROW 2 — Project windows (clickable cards) ── */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-0">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="window group flex flex-col overflow-hidden min-h-0 cursor-pointer no-underline"
            >
              {/* Window chrome */}
              <div className="window-chrome flex items-center gap-2.5 px-4 py-2.5 border-b border-white/8 shrink-0">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-2 rounded-md bg-white/[0.04] px-3 py-1 text-[10px] font-mono text-white/45 truncate">
                  {p.url}
                </div>
                <span
                  className="font-mono text-[9px] tracking-wider uppercase opacity-70 group-hover:opacity-100 transition"
                  style={{ color: p.accent }}
                >
                  Открыть ↗
                </span>
              </div>

              {/* Image area with overlay */}
              <div className="relative flex-1 min-h-0 overflow-hidden bg-black">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04]"
                />
                {/* Color tint */}
                <div
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent} 0%, transparent 65%)`,
                    opacity: 0.5,
                  }}
                />
                {/* Dark gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/45" />
                {/* Grain */}
                <div
                  className="absolute inset-0 opacity-25 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
                  }}
                />

                {/* Brand wordmark — top left */}
                {p.brand && (
                  <div className="absolute top-3 left-3">
                    <div
                      className="inline-flex items-center rounded-md border border-white/15 bg-black/40 backdrop-blur-md px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/85"
                    >
                      {p.brand}
                    </div>
                  </div>
                )}

                {/* Big serif name overlay */}
                <div className="absolute inset-0 flex items-end p-5">
                  <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-semibold leading-[0.95] tracking-tight text-white drop-shadow-2xl">
                    {p.name}
                  </h3>
                </div>

                {/* Metric badge — top right */}
                {p.metric && (
                  <div
                    className="absolute top-3 right-3 rounded-full border px-3 py-1 backdrop-blur-md"
                    style={{
                      borderColor: `${p.accent}88`,
                      background: `rgba(0,0,0,0.55)`,
                    }}
                  >
                    <span
                      className="font-mono text-[10px] font-semibold uppercase tracking-wider"
                      style={{ color: p.accent }}
                    >
                      {p.metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="px-5 py-4 border-t border-white/8 bg-black/55 shrink-0">
                <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40 mb-2">
                  {p.tag}
                </div>
                <p className="text-[12px] leading-[1.55] text-white/60 line-clamp-3">
                  {p.desc}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-white/8 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* ── ROW 3 — Experience ── */}
        <section>
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 mb-3">
            Опыт
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {experience.map((e) => {
              const inner = (
                <>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                    {e.year}
                  </div>
                  <div className="mt-1 font-serif text-[15px] font-semibold leading-tight tracking-tight">
                    {e.role}
                  </div>
                  <div className="text-[11px] text-white/45 truncate mt-0.5">{e.org}</div>
                </>
              );
              const baseCls = "block border-t border-white/12 pt-2.5";
              return e.href ? (
                <a
                  key={e.org + e.year}
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${baseCls} group transition hover:border-white/30`}
                >
                  {inner}
                  <span className="mt-1 inline-block font-mono text-[9px] uppercase tracking-wider text-white/25 transition group-hover:text-[#4ade80]">
                    Открыть ↗
                  </span>
                </a>
              ) : (
                <div key={e.org + e.year} className={baseCls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>
      </main>
      </section>

      {/* ════════════════════════════════════════
          SLIDE 2 — ORFEO Pitch
      ════════════════════════════════════════ */}
      <Slide2 />
    </DeckShell>
  );
}

// ────────────────────────────────────────────────
// SLIDE 2 — ORFEO pitch deck v2 (directions, roadmap, team, budget)
// ────────────────────────────────────────────────
const directions = [
  {
    name: "Веб / SaaS",
    desc: "AI-агенты и платформы для B2B-продаж. Полный цикл: архитектура → деплой.",
    check: "$8K",
    start: "М3",
    m12: "$38K/мес",
    year: "$174K · 50%",
    accent: "#4ade80",
    highlight: true,
  },
  {
    name: "AI-контент",
    desc: "Генерация контента для маркетинга. Тексты, визуал, автопостинг.",
    check: "$800/мес",
    start: "М4",
    m12: "$15K/мес",
    year: "$74K · 21%",
    accent: "#22d3ee",
  },
  {
    name: "Голосовой AI",
    desc: "Голосовые боты и автоматизация звонков. Перспективная ниша, высокий чек.",
    check: "$5K",
    start: "М5",
    m12: "$17K/мес",
    year: "$72K · 21%",
    accent: "#a855f7",
  },
  {
    name: "Обучение",
    desc: "Курсы и консалтинг по внедрению AI в бизнес. Видеопродакшн.",
    check: "$1.5K",
    start: "М7",
    m12: "$8.5K/мес",
    year: "$31K · 9%",
    accent: "#fb923c",
  },
];

const phases = [
  {
    period: "М1 — 3",
    title: "Запуск",
    items: ["Регистрация, бренд, юр. база", "Маркетинг, 3 канала продаж", "Первые клиенты Веб/SaaS"],
    rev: "$0 → $4K/мес",
    invest: "$17.5K",
    investNote: "Старт",
  },
  {
    period: "М4 — 6",
    title: "Рост",
    items: ["AI-контент даёт первую выручку", "Запуск голосового AI", "Безубыточность к М6"],
    rev: "$8K → $17K/мес",
    invest: "$10.5K",
    investNote: "При $15K/мес",
  },
  {
    period: "М7 — 9",
    title: "Масштаб",
    items: ["Запуск обучения + видео", "4 направления параллельно", "Менеджер проектов нанят"],
    rev: "$24K → $48K/мес",
    invest: "$7K",
    investNote: "При $50K/мес",
  },
  {
    period: "М10 — 12",
    title: "Стабильность",
    items: ["Полная команда + AI", "Маржа 41%", "Прибыль $32K/мес"],
    rev: "$57K → $78K/мес",
    invest: "—",
    investNote: "Дивиденды 50/50",
  },
];

const investorBenefits = [
  { icon: "📊", title: "AI-аналитика ниш", note: "Amazon, WB, Ozon — поиск ниш, цен, конкурентов" },
  { icon: "🤖", title: "Автоматизация карточек", note: "Описания, SEO, A/B тесты заголовков и фото" },
  { icon: "🌐", title: "Бренд-сайты и воронки", note: "Сайты выставочного уровня + интеграция с МП" },
  { icon: "⚙️", title: "AI-инструменты под бизнес", note: "Кастомные боты, дашборды, автоматизация рутины" },
];

// $35K investment allocation by phase — 100% в бизнес, ЗП основателя только из прибыли
const budget = [
  {
    period: "М1 — 3",
    sum: "$17.5K",
    pct: 50,
    items: [
      { l: "Маркетинг + LinkedIn / TG", v: "$2.5K" },
      { l: "Тест гипотез", v: "$2.5K" },
      { l: "Юр / бренд / setup компании", v: "$3.5K" },
      { l: "Компьютер для работы", v: "$3.5K" },
      { l: "Инструменты + AI / SaaS подписки", v: "$3K" },
      { l: "Резерв и непредвиденные", v: "$2.5K" },
    ],
  },
  {
    period: "М4 — 6",
    sum: "$10.5K",
    pct: 30,
    items: [
      { l: "LinkedIn / Telegram реклама", v: "$3.5K" },
      { l: "UA test buys (мини-апп)", v: "$3K" },
      { l: "Найм продюсера Веб/SaaS", v: "$4K" },
    ],
  },
  {
    period: "М7 — 9",
    sum: "$7K",
    pct: 20,
    items: [
      { l: "Видеопродакшн (обучение)", v: "$3K" },
      { l: "Доп. маркетинг", v: "$2K" },
      { l: "Буфер найма (контент / голос)", v: "$2K" },
    ],
  },
  {
    period: "М10 — 12",
    sum: "$0",
    pct: 0,
    items: [
      { l: "Самофинансирование", v: "—" },
      { l: "Дивиденды 50 / 50", v: "—" },
    ],
  },
];

const team = [
  { phase: "М1 — 4", count: 1, label: "Основатель", note: "Разработка, продажи, всё", color: "#4ade80" },
  { phase: "М5 — 6", count: 2, label: "+ Продюсер Веб/SaaS", note: "Ведёт клиентов и проекты", color: "#22d3ee" },
  { phase: "М7 — 9", count: 5, label: "+ Контент, Голос, Менеджер", note: "Полные направления + координация", color: "#a855f7" },
  { phase: "М10 — 12", count: 6, label: "+ Бухгалтер", note: "С 4 человек подключаем учёт и финансы", color: "#fb923c", showBookkeeper: true },
];

function Slide2() {
  const telegramUrl = "https://t.me/pav_sep";
  return (
    <section className="slide flex flex-col overflow-hidden bg-[#09090b]">
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5 shrink-0">
        <div className="font-serif text-xl font-semibold tracking-tight">
          <span className="text-gradient">ORFEO</span>
          <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-white/35">
            Pitch · v2
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-white/30">
          <span className="font-mono uppercase tracking-wider">02 / 02</span>
          <span className="text-white/15">·</span>
          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white/10 px-5 py-2 text-[12px] font-medium text-white/80 transition hover:bg-white/15"
          >
            Связаться
          </a>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-[1340px] px-10 pb-5 grid grid-rows-[auto_auto_1fr_auto] gap-4 min-h-0">
        {/* ── Title ── */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#4ade80]/80 mb-2">
              AI-агентство · Бизнес-план
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-[1] font-semibold tracking-tight">
              4 направления, 1 платформа
            </h2>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Год 1 · $350K выручка · M8 безубыточность · $32K прибыль/мес к М12
            </p>
          </div>
          <div className="flex gap-5">
            {[
              { v: "$350K", l: "Выручка год 1" },
              { v: "$78K", l: "К М12 / мес" },
              { v: "41%", l: "Маржа" },
            ].map((s) => (
              <div key={s.l} className="border-t border-white/12 pt-2">
                <div className="font-serif text-[1.4rem] font-semibold tracking-tight">{s.v}</div>
                <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4 Directions ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {directions.map((d) => (
            <div
              key={d.name}
              className="relative rounded-xl border border-white/8 bg-white/[0.02] p-4 transition hover:border-white/15 hover:bg-white/[0.04]"
            >
              <div
                className="absolute top-0 left-4 right-4 h-px"
                style={{ background: `linear-gradient(90deg, ${d.accent}, transparent)` }}
              />
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-serif text-[15px] font-semibold tracking-tight">{d.name}</h3>
                <span
                  className="font-mono text-[9px] uppercase tracking-wider"
                  style={{ color: d.accent }}
                >
                  {d.start}
                </span>
              </div>
              <p className="text-[11px] leading-snug text-white/50 mb-3 line-clamp-2">{d.desc}</p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px]">
                <div className="text-white/35">Чек</div>
                <div className="text-right font-medium text-white/85">{d.check}</div>
                <div className="text-white/35">К М12</div>
                <div className="text-right font-medium text-white/85">{d.m12}</div>
                <div className="text-white/35">Год</div>
                <div className="text-right font-mono text-[10px]" style={{ color: d.accent }}>
                  {d.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Roadmap + Team ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4 min-h-0">
          {/* Roadmap */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 flex flex-col min-h-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 mb-3">
              Дорожная карта · 12 месяцев
            </div>
            <div className="grid grid-cols-4 gap-3 flex-1">
              {phases.map((p, i) => (
                <div key={p.period} className="relative flex flex-col">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      {p.period}
                    </div>
                    <span
                      className="font-mono text-[9px] font-semibold uppercase tracking-wider"
                      style={{ color: p.invest === "—" ? "rgba(255,255,255,0.3)" : "#4ade80" }}
                    >
                      {p.invest}
                    </span>
                  </div>
                  <div className="mt-1 font-serif text-[14px] font-semibold tracking-tight">
                    {p.title}
                  </div>
                  <ul className="mt-2 space-y-1 flex-1">
                    {p.items.map((it) => (
                      <li key={it} className="text-[10px] leading-snug text-white/50 flex gap-1.5">
                        <span className="text-[#4ade80]/60 mt-0.5">·</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 pt-2 border-t border-white/8 space-y-0.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-[9px] text-white/40">Выручка</span>
                      <span className="text-[10px] font-medium text-white/85 text-right">{p.rev}</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono text-[9px] text-white/40">Транш</span>
                      <span
                        className="text-[10px] font-medium text-right"
                        style={{ color: p.invest === "—" ? "rgba(255,255,255,0.3)" : "#4ade80" }}
                      >
                        {p.investNote}
                      </span>
                    </div>
                  </div>
                  {i < phases.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-3 text-white/15 text-xs">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="rounded-xl border border-white/8 bg-white/[0.02] p-4 flex flex-col min-h-0">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35 mb-3">
              Команда · рост по фазам
            </div>
            <div className="space-y-2.5 flex-1">
              {team.map((t) => (
                <div
                  key={t.phase}
                  className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/[0.02] px-3 py-2"
                >
                  <div
                    className="flex items-center justify-center h-9 w-9 rounded-full border font-serif text-[15px] font-semibold shrink-0"
                    style={{ borderColor: `${t.color}66`, color: t.color, background: `${t.color}10` }}
                  >
                    {t.count}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                        {t.phase}
                      </span>
                      {t.showBookkeeper && (
                        <span className="rounded-full border border-[#fb923c]/40 bg-[#fb923c]/10 px-1.5 py-0 text-[8px] font-mono uppercase tracking-wider text-[#fb923c]">
                          + бухгалтер
                        </span>
                      )}
                    </div>
                    <div className="text-[12px] font-medium text-white/85 leading-tight">
                      {t.label}
                    </div>
                    <div className="text-[10px] text-white/40 leading-tight">{t.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-[10px] text-white/40 leading-snug">
              К М12: <strong className="text-white/70">основатель + менеджер + 3 продюсера + бухгалтер + AI</strong>
            </div>
          </div>
        </div>

        {/* ── $35K Budget allocation by phase ── */}
        <div>
          <div className="flex items-baseline justify-between mb-2 flex-wrap gap-x-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#4ade80]/80">
              Распределение $35K · 100% в бизнес
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-white/35">
              ЗП основателя — только из прибыли · К М24 партнёру $40K/мес
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {budget.map((b, i) => {
              const isZero = b.sum === "$0";
              return (
                <div
                  key={b.period}
                  className={`relative rounded-lg border p-3 ${
                    i === 0
                      ? "border-[#4ade80]/35 bg-[#4ade80]/[0.04]"
                      : isZero
                      ? "border-white/6 bg-white/[0.015]"
                      : "border-white/8 bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                      {b.period}
                    </span>
                    <span
                      className="font-serif text-[1.1rem] font-semibold tracking-tight"
                      style={{ color: isZero ? "rgba(255,255,255,0.35)" : "#4ade80" }}
                    >
                      {b.sum}
                    </span>
                  </div>
                  {!isZero && (
                    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${b.pct}%`,
                          background: "linear-gradient(90deg, #4ade80, #22d3ee)",
                        }}
                      />
                    </div>
                  )}
                  <ul className="space-y-1">
                    {b.items.map((it) => (
                      <li
                        key={it.l}
                        className="flex items-baseline justify-between gap-2 text-[10px] leading-snug"
                      >
                        <span className="text-white/55 truncate">{it.l}</span>
                        <span
                          className="font-mono text-[10px] font-medium shrink-0"
                          style={{
                            color: it.v === "—" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.85)",
                          }}
                        >
                          {it.v}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </section>
  );
}
