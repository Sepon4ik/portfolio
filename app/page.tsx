import Image from "next/image";
import { Inter } from "next/font/google";
import { Send } from "lucide-react";
import { ActiveLifeStatsPanel } from "@/components/ActiveLifeStatsPanel";
import { AnimatedMetrics } from "@/components/AnimatedMetrics";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { GuideTelegramCta } from "@/components/GuideTelegramCta";
import { HeroPortraitHeightSync } from "@/components/HeroPortraitHeightSync";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import {
  getTelegramGuideBotUrl,
  LINKEDIN_URL,
  SITE_BRAND_NAME,
  TELEGRAM_CHANNEL_URL,
} from "@/lib/site-config";
import { SkillsWithMiniCase } from "@/components/SkillsWithMiniCase";
import { VideoLightboxGrid } from "@/components/VideoLightboxGrid";

const inter = Inter({ subsets: ["latin"] });

const skillsExpertise = [
  {
    label: "Strategy",
    items: [
      "Studio Scaling & Operations",
      "Strategic Planning",
      "Budgeting & Resource Allocation",
    ],
  },
  {
    label: "Leadership",
    items: [
      "Remote Team Leadership",
      "Stakeholder Management",
      "Mentoring & Coaching",
    ],
  },
  {
    label: "Production",
    items: [
      "Full-cycle Game Development",
      "Production Pipeline Optimization",
      "Monetization Strategy",
    ],
  },
] as const;

const gameTrailers = [
  {
    id: "yTV31EcOvSY",
    title: "RoomScapes (Match-3)",
    caption: "Full-cycle production: vision to market-ready delivery.",
  },
  {
    id: "HQb2aAI5FvU",
    title: "Homescapes",
    caption: "Reference: match-3 / meta production at scale.",
  },
  {
    id: "LpxnfEC1xuA",
    title: "Gardenscapes",
    caption: "Reference: live ops, content cadence, and polish bar.",
  },
] as const;

export default function Home() {
  const guideBotUrl = getTelegramGuideBotUrl();

  return (
    <main
      className={`${inter.className} relative min-h-screen bg-transparent text-zinc-100`}
    >
      <section className="relative isolate min-h-screen overflow-hidden bg-transparent">
        {/* Подложка под blend: лёгкий cyan / violet */}
        <div className="hero-portrait-backplate" aria-hidden />

        {/* Цифровая сетка поверх hero (частицы + узлы), screen + низкая opacity */}
        <div className="hero-digital-grid" aria-hidden />

        {/* Виньетка только на мобилке; на lg фото на всю высоту без тёмной маски */}
        <div className="hero-photo-vignette lg:hidden" aria-hidden />

        {/* Тёплый акцент только над текстовой зоной (центр слева), не над лицом */}
        <div className="hero-readability-mask hero-readability-warm absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_18%_32%,rgba(255,229,180,0.18),rgba(20,20,20,0.25)_42%,transparent_68%)]" />
        {/* Слева затемнение для текста; на lg справа прозрачно — фото без «чёрных полей» */}
        <div className="hero-readability-mask absolute inset-0 bg-gradient-to-r from-black/93 via-black/78 to-black/55 lg:from-black/92 lg:via-black/55 lg:to-transparent" />
        {/* Лёгкий блик сверху — тоже только слева */}
        <div className="hero-readability-mask absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0)_14%)]" />

        <div className="relative z-10 flex min-h-dvh w-full flex-col">
          <div className="mx-auto w-full max-w-[1580px] shrink-0 px-4 pb-2 pt-4 sm:px-8 sm:pb-3">
          <header className="card-glow-hover flex flex-wrap items-center justify-between gap-2 border border-white/15 bg-black/40 px-3 py-3 backdrop-blur-sm sm:gap-3 sm:px-4">
            <div className="text-sm font-semibold uppercase tracking-[0.14em]">Pavel Dranchuk</div>
            <nav className="hidden items-center gap-3 lg:flex">
              <a
                href="tel:+48571502355"
                className="rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:bg-white/10"
              >
                +48 571 502 355
              </a>
              <a
                href="#about"
                className="hover-bounce inline-flex items-center justify-center rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:bg-white/10"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover-bounce inline-flex items-center justify-center rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:bg-white/10"
              >
                Projects
              </a>
            </nav>

            <div className="flex flex-wrap items-center justify-end gap-2">
              <GuideTelegramCta href={guideBotUrl} variant="header" />
              <a
                href="https://t.me/pav_sep"
                target="_blank"
                rel="noreferrer"
                title="Telegram: @pav_sep"
                className="hover-bounce inline-flex items-center justify-center rounded border border-red-400/80 bg-red-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-red-400"
              >
                @pav_sep
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="hover-bounce inline-flex items-center justify-center rounded border border-white/35 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black transition hover:bg-white"
              >
                LinkedIn
              </a>
            </div>
          </header>
          </div>

          <div
            id="about"
            className="mx-auto flex min-h-0 w-full max-w-[1580px] flex-1 flex-col gap-8 px-4 pb-8 pt-2 sm:px-8 lg:min-h-[calc(100dvh-7rem)] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto] lg:items-stretch lg:gap-x-16 lg:gap-y-0 lg:px-[max(1.25rem,calc((100vw-1580px)/2+1.25rem))] lg:py-10 lg:pb-12"
          >
            <HeroPortraitHeightSync />
            {/* lg:contents — на десктопе дети попадают в сетку; на мобилке одна карточка */}
            <div className="flex max-w-[640px] flex-col gap-6 max-lg:mx-auto max-lg:w-full max-lg:max-w-[min(600px,94vw)] max-lg:rounded-2xl max-lg:border max-lg:border-white/10 max-lg:bg-black/65 max-lg:p-5 max-lg:shadow-[0_20px_50px_rgba(0,0,0,0.55)] max-lg:backdrop-blur-md lg:contents">
              {/* Одна строка сетки с фото: верх = Featured, низ кнопок = низ фото */}
              <div
                id="hero-about-left"
                className="flex w-full max-w-[640px] flex-col gap-6 sm:gap-6 lg:col-start-1 lg:row-start-1 lg:min-h-0 lg:h-full lg:w-full lg:self-stretch lg:gap-7"
              >
                <div id="hero-featured-block" className="w-full shrink-0">
                  <span className="inline-flex rounded bg-white/95 px-3 py-1 text-[11px] font-medium text-black sm:text-xs">
                    Featured
                  </span>

                  <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-zinc-300 sm:mt-6 sm:text-xs lg:mt-4 lg:text-sm">
                    Architecting the Magic of Game Dev
                  </p>
                </div>

                <div id="hero-about-copy" className="w-full shrink-0 lg:min-h-0">
                  <h1 className="mt-2 text-5xl font-semibold uppercase leading-[0.96] tracking-[0.04em] text-white sm:mt-3 sm:text-7xl lg:mt-0 lg:text-[clamp(3rem,3.4vw+1.5rem,4.75rem)] lg:leading-[0.97] xl:text-[clamp(3.35rem,3.6vw+1.4rem,5.25rem)]">
                    PAVEL
                    <br />
                    DRANCHUK
                  </h1>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-200/95 sm:mt-6 sm:text-[1.05rem] lg:mt-6 lg:max-w-[52ch] lg:text-[1.0625rem] lg:leading-[1.7] xl:text-[1.125rem]">
                    I&apos;m an{" "}
                    <span className="text-zinc-100">AI enthusiast</span> and a{" "}
                    <span className="text-zinc-100">General Manager</span> with 15+ years connecting
                    creative production and commercial discipline. I scaled match-3 studios from startup
                    rhythm to mature delivery—and earlier, as{" "}
                    <span className="text-zinc-100">Sales Director</span> at Active Life Technologies,
                    led a 50+ commercial organization and tightened sales–logistics systems across
                    Belarus. I care about pipelines that ship on time, teams that stay, and how AI is
                    changing the way we build games and businesses.
                  </p>

                  <div className="mt-6 max-w-xl sm:mt-7 lg:mt-7 lg:max-w-[min(100%,560px)]">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-[11px]">
                      At a glance
                    </p>
                    <AnimatedMetrics variant="hero" />
                  </div>
                </div>

                <div
                  id="hero-about-actions"
                  className="mt-6 w-full shrink-0 sm:mt-7 lg:mt-auto lg:pt-1"
                >
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <a
                      href="https://t.me/homo_management"
                      target="_blank"
                      rel="noreferrer"
                      className="hover-bounce inline-flex items-center justify-center rounded border border-white/35 px-4 py-2 text-sm uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-white/10"
                    >
                      Blog
                    </a>
                    <CopyEmailButton />
                    <a
                      href={TELEGRAM_CHANNEL_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="hover-bounce inline-flex items-center justify-center gap-1.5 rounded border border-cyan-500/35 bg-cyan-950/30 px-4 py-2 text-sm uppercase tracking-[0.14em] text-cyan-100 transition hover:border-cyan-400/50 hover:bg-cyan-900/40"
                    >
                      <Send className="h-3.5 w-3.5" aria-hidden />
                      Канал
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Половина ширины hero: та же высота строки, что h1…метрики — один «массив» слева/справа */}
            <div
              id="hero-portrait-cell"
              className="relative z-[1] mt-2 w-full max-lg:flex max-lg:justify-center max-lg:pb-2 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:flex lg:min-h-0 lg:w-full lg:flex-col lg:self-stretch lg:overflow-hidden"
            >
              <div className="hero-portrait-immersive relative flex h-full min-h-[280px] w-full max-w-[min(100%,360px)] flex-col sm:max-w-[400px] lg:mx-0 lg:h-full lg:min-h-0 lg:w-full lg:max-w-full lg:flex-1 lg:flex-col">
                <div className="hero-portrait-glow" aria-hidden />
                <div className="hero-portrait-image-wrap aspect-[3/4] h-[min(52vh,440px)] w-full max-lg:mx-auto lg:aspect-auto lg:min-h-0 lg:h-full lg:w-full lg:max-w-full lg:flex-1">
                  <Image
                    src="/pavel.png"
                    alt="Pavel Dranchuk portrait"
                    fill
                    priority
                    quality={95}
                    sizes="(max-width: 1023px) 90vw, (max-width: 1400px) 50vw, 720px"
                    className="hero-portrait-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills — glass + теги; мини-кейсы по клику */}
      <section
        id="skills"
        className="relative isolate z-20 overflow-hidden border-t border-white/10 bg-[#060607]"
      >
        <div className="section-digital-grid" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-[1580px] px-4 py-14 sm:px-8 sm:py-16 lg:px-[max(1.25rem,calc((100vw-1580px)/2+1.25rem))]">
          <ScrollReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.25rem]">
              Skills &amp; Expertise
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500">
              Strategy, Leadership, and Production — tap a capsule for a short mini-case.
            </p>
          </ScrollReveal>
          <ScrollReveal className="mt-2" delay={90}>
            <SkillsWithMiniCase groups={skillsExpertise} variant="glass" />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-white/10 bg-[#080809]">
        <div className="section-digital-grid opacity-[0.07]" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-[1580px] px-4 py-14 sm:px-8 sm:py-16 lg:px-[max(1.25rem,calc((100vw-1580px)/2+1.25rem))]">
          <ScrollReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Experience
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.25rem]">
              Leadership Journey
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-500">
              Three chapters: studio GM, production lead, and scaled commercial operations.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:gap-5 lg:grid-cols-3">
            <ScrollReveal delay={0}>
              <article className="glass-panel card-glow-hover h-full p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Present
                </p>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  General Manager · RedBark Game Studio
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  Scaled studio operations with a focus on stable execution, production quality, and
                  90%+ team retention.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={110}>
              <article className="glass-panel card-glow-hover h-full p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  2021 — 2023
                </p>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  Lead PM · RedBark Game Studio
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  Optimized full-cycle game production and integrated Art, Tech, and Design into one
                  efficient delivery pipeline.
                </p>
              </article>
            </ScrollReveal>
            <ScrollReveal delay={220}>
              <article className="glass-panel card-glow-hover h-full p-5 sm:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  2016 — 2021
                </p>
                <h3 className="mt-2 text-lg font-bold text-white sm:text-xl">
                  Sales Director · Active Life Technologies
                </h3>
                <p className="mt-3 text-sm font-normal leading-relaxed text-zinc-400">
                  Led a 50+ commercial department and improved sales and logistics systems at scale.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative isolate overflow-hidden border-t border-white/10 bg-[#0a0a0c]"
      >
        <div className="section-digital-grid opacity-[0.06]" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-[1580px] px-4 py-14 sm:px-8 sm:py-16 lg:px-[max(1.25rem,calc((100vw-1580px)/2+1.25rem))]">
          <ScrollReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              Featured projects
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.25rem]">
              Mobile hits &amp; pipeline
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500">
              RoomScapes under my lead; Homescapes and Gardenscapes as references for match-3 craft,
              cadence, and quality bar. Play opens a lightbox player.
            </p>
          </ScrollReveal>

          <div className="mt-10 flex flex-col gap-8 lg:gap-10">
            <ScrollReveal className="mt-0" delay={100}>
              <article className="glass-panel card-glow-hover p-5 sm:p-8">
                <VideoLightboxGrid items={gameTrailers} gridClassName="mt-0 sm:mt-2" />
              </article>
            </ScrollReveal>

            <ScrollReveal delay={140}>
              <article className="glass-panel card-glow-hover p-5 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,380px)] lg:items-start lg:gap-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    Game studio
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Red Bark Game Studio
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Match-3 and mobile production: from integrated pipelines to studio-wide operations.
                    Scaled the team from a startup rhythm to mature cadence—predictable delivery without
                    sacrificing creative speed, with retention consistently above 90%.
                  </p>

                  <div className="mt-6 space-y-4 border-l border-white/10 pl-4">
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                        Present
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-200">General Manager</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        Studio operations end-to-end: stable execution, production quality, stakeholder
                        alignment, and a culture that keeps people on board.
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                        2021 — 2023
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-200">Lead Project Manager</p>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                        Full-cycle game production: unified Art, Tech, and Design in one efficient
                        delivery pipeline—clearer handoffs, less rework, throughput you can plan around.
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>
                        <span className="text-zinc-300">RoomScapes &amp; portfolio:</span> concept through
                        pre-production, production, soft launch, and live iteration—economy, pacing, and
                        analytics without breaking the fantasy.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>
                        <span className="text-zinc-300">Pipeline:</span> specs, reviews, and build flow
                        tuned for mobile cadence; remote-first leadership with clear ownership and async
                        rituals.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>
                        <span className="text-zinc-300">Broader context:</span> experience scaling
                        organizations in the 50–200+ range—budgets, roadmaps, and one narrative for execs,
                        partners, and teams.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="rounded-[12px] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-[88px] w-[100px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-[#2a1848] ring-1 ring-violet-400/20">
                        <Image
                          src="/redbark-logo.png"
                          alt="Red Bark Game Studio logo"
                          width={92}
                          height={92}
                          className="object-contain object-center"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">Red Bark</p>
                        <p className="text-xs text-zinc-400">Game studio · match-3 &amp; mobile</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm">
                        <p className="text-sm font-bold text-white">15+</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Years
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm">
                        <p className="text-sm font-bold text-white">90%+</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Retention
                        </p>
                      </div>
                      <div className="rounded-[12px] border border-white/10 bg-white/[0.04] px-2 py-3 text-center backdrop-blur-sm">
                        <p className="text-sm font-bold text-white">M3</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Focus
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                      Key titles
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <a
                        href="https://www.youtube.com/watch?v=yTV31EcOvSY"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-bounce group flex h-14 items-center justify-between rounded-[12px] border border-white/10 bg-black/35 px-3 backdrop-blur-sm transition hover:border-violet-500/40 hover:bg-black/50"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-200/90">
                          R
                        </span>
                        <span className="text-sm font-medium text-zinc-200 transition group-hover:text-white">
                          RoomScapes
                        </span>
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=HQb2aAI5FvU"
                        target="_blank"
                        rel="noreferrer"
                        className="hover-bounce group flex h-14 items-center justify-between rounded-[12px] border border-white/10 bg-black/35 px-3 backdrop-blur-sm transition hover:border-violet-500/40 hover:bg-black/50"
                      >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-sm font-bold text-violet-200/90">
                          H
                        </span>
                        <span className="text-sm font-medium text-zinc-200 transition group-hover:text-white">
                          Homescapes
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section
        id="active-life"
        className="relative isolate overflow-hidden border-t border-white/10 bg-[#070708]"
      >
        <div className="section-digital-grid opacity-[0.07]" aria-hidden />
        <div className="relative z-[1] mx-auto max-w-[1580px] px-4 py-14 sm:px-8 sm:py-16 lg:px-[max(1.25rem,calc((100vw-1580px)/2+1.25rem))]">
          <ScrollReveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
              MedTech &amp; B2B
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.25rem]">
              Active Life Technologies
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-500">
              Commercial direction and scaled operations for medical equipment across Belarus.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(280px,400px)] lg:items-start lg:gap-12">
            <ScrollReveal className="lg:min-w-0" delay={80}>
              <div className="glass-panel p-6 sm:p-8">
                <ul className="space-y-6 text-sm leading-relaxed text-zinc-400">
                  <li>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                      Sales Management
                    </p>
                    <p className="mt-2 text-zinc-300">
                      Managed medical equipment sales operations across Belarus.
                    </p>
                  </li>
                  <li>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                      Team Leadership
                    </p>
                    <p className="mt-2 text-zinc-300">
                      Led a commercial department of up to 50 employees.
                    </p>
                  </li>
                  <li>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                      Operational Management
                    </p>
                    <p className="mt-2 text-zinc-300">
                      Improved internal workflows between sales and logistics departments.
                    </p>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal className="flex flex-col gap-5" delay={160}>
              <ActiveLifeStatsPanel />
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                  Partner brands
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <a
                    href="https://www.microlife.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-bounce group flex h-14 items-center justify-between rounded-[12px] border border-white/10 bg-black/35 px-3 backdrop-blur-sm transition hover:border-cyan-500/35 hover:bg-black/50"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-200/90">
                      M
                    </span>
                    <span className="text-sm font-medium text-zinc-200 transition group-hover:text-white">
                      Microlife
                    </span>
                  </a>
                  <a
                    href="https://www.bionime.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover-bounce group flex h-14 items-center justify-between rounded-[12px] border border-white/10 bg-black/35 px-3 backdrop-blur-sm transition hover:border-cyan-500/35 hover:bg-black/50"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-200/90">
                      B
                    </span>
                    <span className="text-sm font-medium text-zinc-200 transition group-hover:text-white">
                      Bionime
                    </span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

