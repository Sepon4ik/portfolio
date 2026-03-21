import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Rocket,
  Send,
  UserRound,
} from "lucide-react";

const profile = {
  name: "Pavel Dranchuk",
  title: "Performance at Scale",
  subtitle:
    "General Manager in gamedev focused on studio scaling, resilient delivery, and leadership systems.",
  telegramChannel: "https://t.me/pav_sep",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1013] text-[#f3f3f3]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
        <section className="hero-enter">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-[0.16em] uppercase text-white/70">
              <UserRound size={14} />
              Portfolio
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-white/90">{profile.title}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              {profile.subtitle}
            </p>
          </div>
        </section>

        <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:col-span-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
              <FileText size={14} />
              CV
            </div>
            <h2 className="mt-4 text-xl font-semibold text-white/92">
              Leadership, operations, and scaling track record
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              15+ years across sports leadership, sales operations, and game studio management.
              Structured pipelines for teams, assets, and execution.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
              <BriefcaseBusiness size={14} />
              Core
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white/92">Studio Scaling</h3>
            <p className="mt-2 text-sm text-white/70">From startup mode to stable organization.</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
              <Rocket size={14} />
              Projects
            </div>
            <h3 className="mt-4 text-lg font-semibold text-white/92">RoomScapes</h3>
            <p className="mt-2 text-sm text-white/70">
              Key case in building full-cycle production workflows.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60">
                  <Send size={14} />
                  Telegram
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white/92">Follow my channel</h3>
                <p className="mt-1 text-sm text-white/70">
                  Updates on studio leadership, performance systems, and gamedev scaling.
                </p>
              </div>
              <a
                href={profile.telegramChannel}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                Open channel
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
