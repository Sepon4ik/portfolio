import Image from "next/image";
import { Inter, JetBrains_Mono } from "next/font/google";
import { PipelineBackdrop } from "@/components/PipelineBackdrop";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
  return (
    <main className={`${inter.className} min-h-screen bg-[#0a0a0a] text-zinc-100`}>
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="/pavel.png"
          alt="Pavel Dranchuk portrait"
          fill
          priority
          sizes="100vw"
          className="scale-[0.74] object-contain object-[78%_40%]"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_35%,rgba(255,229,180,0.26),rgba(13,13,13,0.32)_45%,rgba(8,8,8,0.92)_68%,rgba(5,5,5,0.98)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/58 to-black/18" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0)_18%)]" />

        <PipelineBackdrop />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-4 py-4 sm:px-8">
          <header className="flex items-center justify-between border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.14em]">Pavel Dranchuk</div>
            <nav className="hidden items-center gap-3 lg:flex">
              <span className="rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200">
                +7 (495) 260-30-35
              </span>
              <a
                href="#about"
                className="rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:bg-white/10"
              >
                About
              </a>
              <a
                href="#projects"
                className="rounded border border-white/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-200 transition hover:bg-white/10"
              >
                Projects
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://t.me/pav_sep"
                target="_blank"
                rel="noreferrer"
                className="rounded border border-red-400/80 bg-red-500 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-red-400"
              >
                Direct Message
              </a>
              <a
                href="https://www.linkedin.com/in/pavel-dranchuk-202b37125/"
                target="_blank"
                rel="noreferrer"
                className="rounded border border-white/35 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black transition hover:bg-white"
              >
                LinkedIn
              </a>
            </div>
          </header>

          <div
            id="about"
            className="grid min-h-0 flex-1 items-center gap-10 py-10 pb-12 lg:grid-cols-2 lg:py-12"
          >
            <div className="max-w-[560px]">
              <span className="inline-flex rounded bg-white/95 px-3 py-1 text-[11px] font-medium text-black">
                Featured
              </span>

              <p className="mt-7 text-xs uppercase tracking-[0.2em] text-zinc-300">
                Architecting the Magic of Game Dev
              </p>
              <h1 className="mt-3 text-5xl font-semibold uppercase leading-[0.96] tracking-[0.04em] text-white sm:text-7xl">
                PAVEL
                <br />
                DRANCHUK
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-200/95 sm:text-base">
                General Manager with 15+ years in game development. Scaling studios from 50 to
                200+ people, building production systems, and balancing creative excellence with
                monetization reality.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://t.me/homo_management"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-white/10"
                >
                  Blog
                </a>
                <a
                  href="mailto:paveldranchuk36@gmail.com"
                  className="rounded border border-white/35 px-4 py-2 text-xs uppercase tracking-[0.14em] text-zinc-100 transition hover:bg-white/10"
                >
                  Email
                </a>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Metrics + skills: own section so nothing stacks over the hero portrait */}
      <section
        id="metrics"
        className="relative z-20 border-t border-zinc-800/80 bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-[1500px] px-4 py-12 sm:px-8 sm:py-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
            At a glance
          </p>
          <div className="mt-4 grid gap-3 text-[11px] uppercase tracking-[0.14em] text-zinc-300 sm:grid-cols-3 sm:gap-4">
            <div className="rounded-lg border border-zinc-800/90 bg-zinc-900/40 px-4 py-3">
              15+ Years Leadership
            </div>
            <div className="rounded-lg border border-zinc-800/90 bg-zinc-900/40 px-4 py-3">
              90%+ Team Retention
            </div>
            <div className="rounded-lg border border-zinc-800/90 bg-zinc-900/40 px-4 py-3">
              50-200+ Management Scale
            </div>
          </div>

          <div className={`${jetbrainsMono.className} mt-10 border-t border-zinc-800/80 pt-10`}>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-zinc-500">
              Skills &amp; Expertise
            </p>

            <div className="mt-6 space-y-8">
              {skillsExpertise.map((group) => (
                <div key={group.label}>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1.5 text-[11px] font-normal leading-snug tracking-tight text-zinc-400 transition duration-200 hover:border-zinc-600 hover:text-zinc-300 hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.12)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#09090b]">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Experience</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Leadership Journey
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">Present</p>
              <h3 className="mt-2 text-lg font-semibold text-white">General Manager · RedBark</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Scaled studio operations with a focus on stable execution, production quality, and
                90%+ team retention.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">2021 — 2023</p>
              <h3 className="mt-2 text-lg font-semibold text-white">Lead PM · RedBark</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Optimized full-cycle game production and integrated Art, Tech, and Design into one
                efficient delivery pipeline.
              </p>
            </article>

            <article className="rounded-2xl border border-white/10 bg-black/35 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">2016 — 2021</p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Sales Director · Active Life Technologies
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Led a 50+ commercial department and improved sales and logistics systems at scale.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10 bg-[#0b0b0d]">
        <div className="mx-auto max-w-[1500px] px-4 py-14 sm:px-8">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">Projects</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Featured Projects
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {gameTrailers.map((g) => (
                <a
                  key={g.id}
                  href={`https://www.youtube.com/watch?v=${g.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded border border-white/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-zinc-400 transition hover:border-zinc-500 hover:text-zinc-200"
                >
                  {g.title.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Games: full width + equal video grid — avoids heavy left / empty right */}
            <article className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-8">
              <div className="max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  Games &amp; production
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  Mobile hits &amp; pipeline
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  RoomScapes under my lead; Homescapes and Gardenscapes as benchmarks for match-3
                  craft, cadence, and quality bar.
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {gameTrailers.map((g) => (
                  <div key={g.id} className="flex flex-col">
                    <p className="text-xs font-medium leading-snug text-zinc-300">{g.title}</p>
                    <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-black/50">
                      <iframe
                        src={`https://www.youtube.com/embed/${g.id}`}
                        title={g.title}
                        className="aspect-video w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-zinc-500">{g.caption}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* MedTech: full width, two-column row on large screens — balanced density */}
            <article className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_minmax(280px,380px)] lg:items-start lg:gap-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                    MedTech &amp; B2B
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    Active Life Technologies
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    Commercial direction, partnerships, and scaling operations for medical-device
                    brands.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>Led 50+ employees commercial department</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>Optimized sales and logistics pipelines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-zinc-600">—</span>
                      <span>Built long-term brand partnerships</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-5">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/active-life.png"
                        alt="Active Life Technologies logo"
                        width={56}
                        height={56}
                        className="h-14 w-14 shrink-0 rounded-full object-contain"
                      />
                      <div>
                        <p className="text-sm font-semibold text-white">Active Life Technologies</p>
                        <p className="text-xs text-zinc-400">MedTech commercial operations</p>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      <div className="rounded-lg border border-white/10 bg-black/30 px-2 py-3 text-center">
                        <p className="text-sm font-semibold text-white">50+</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Team
                        </p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-black/30 px-2 py-3 text-center">
                        <p className="text-sm font-semibold text-white">B2B</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Market
                        </p>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-black/30 px-2 py-3 text-center">
                        <p className="text-sm font-semibold text-white">Ops</p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-zinc-500">
                          Scale
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                      Partner brands
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <a
                        href="https://www.microlife.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex h-14 items-center justify-between rounded-lg border border-white/10 bg-zinc-900/60 px-3 transition hover:border-zinc-600 hover:bg-zinc-900"
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
                        className="group flex h-14 items-center justify-between rounded-lg border border-white/10 bg-zinc-900/60 px-3 transition hover:border-zinc-600 hover:bg-zinc-900"
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
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

