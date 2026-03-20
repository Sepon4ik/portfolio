import Image from "next/image";
import ClipboardButton from "./components/ClipboardButton";
import EvolutionScaleChart from "./components/EvolutionScaleChart";

export default function Home() {
  const name = "Pavel Dranchuk";
  const email = "paveldranchuk36@gmail.com";
  const telegram = "@pav_sep";
  const telegramUrl = "https://t.me/pav_sep";
  const location = "Warszawa";

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#1a1a1a]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbfbfa]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <div className="text-sm font-semibold tracking-tight">{name}</div>
          <nav className="flex items-center gap-6 text-sm">
            <a className="hover:text-black/70" href="#philosophy">
              Philosophy
            </a>
            <a className="hover:text-black/70" href="#contact">
              Contact
            </a>
          </nav>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-black/5" />
      </header>

      <main className="relative z-10">
        <section className="scroll-mt-24 pt-24">
          <div className="mx-auto grid min-h-[72svh] w-full max-w-5xl grid-cols-1 items-start gap-10 px-6 pb-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 hero-enter">
            <div className="text-center md:text-left">
              <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl sm:leading-[1.0] font-semibold tracking-tight">
                Performance at Scale
              </h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-relaxed sm:text-base text-[rgba(26,26,26,0.72)]">
                From Elite Sport Captaincy to Scale-up Leader in Gamedev (25 to 200+)
              </p>
            </div>

            <div className="flex w-full items-start justify-center md:justify-end">
              <div className="relative flex w-full max-w-[360px] overflow-hidden rounded-[26px] border border-black/10 bg-[#fbfbfa] aspect-[3/4]">
                <Image
                  src="/profile.png"
                  alt="Portrait"
                  fill
                  sizes="(max-width: 768px) 80vw, 360px"
                  className="object-cover opacity-[0.98] grayscale contrast-[1.04]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-16 sm:py-24">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
              About
            </div>
            <div className="mt-10 grid gap-12 sm:grid-cols-[1.1fr_0.9fr] items-start">
              <p className="font-serif text-[17px] leading-relaxed text-[#1a1a1a]/90">
                15+ years of experience across art, animation, and sound-driven production pipelines - with a focus on shipping reliably at scale.
              </p>
              <blockquote className="font-serif italic text-[22px] leading-[1.25] tracking-tight text-[#1a1a1a]/90">
                &ldquo;Architecting seamless pipelines where Art, Animation, and Sound converge&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        <section id="evolution" className="scroll-mt-24 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
              The Evolution
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              <div className="group relative flex min-h-[280px] flex-col overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-[-16px] font-serif text-[8rem] font-semibold tracking-tight text-black opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.22]">
                  01
                </div>
                <div className="relative z-10 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/60">
                    The Captaincy (Education)
                  </div>
                  <p className="mt-4 font-serif text-base leading-relaxed">
                    Belarussian State University of Physical Culture
                  </p>
                  <ul className="mt-5 space-y-3 text-[14px]">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span className="font-serif leading-relaxed">High-Performance Team Leadership</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/35" />
                      <span className="font-serif leading-relaxed">Emotional Intelligence</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="group relative flex min-h-[280px] flex-col overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-[-16px] font-serif text-[8rem] font-semibold tracking-tight text-black opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.22]">
                  02
                </div>
                <div className="relative z-10 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/60">
                    The Precision (Sales Director)
                  </div>
                  <p className="mt-4 font-serif text-base leading-relaxed">Active Life Technologies</p>
                  <p className="mt-3 font-serif text-base leading-relaxed">
                    Managed a 50-person team and optimized sales + logistics chains to keep B2B pipelines predictable.
                  </p>
                </div>
              </div>

              <div className="group relative flex min-h-[280px] flex-col overflow-hidden">
                <div className="pointer-events-none absolute left-0 top-[-16px] font-serif text-[8rem] font-semibold tracking-tight text-black opacity-[0.1] transition-opacity duration-300 group-hover:opacity-[0.22]">
                  03
                </div>
                <div className="relative z-10 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/60">
                    The Scale (General Manager)
                  </div>
                  <p className="mt-4 font-serif text-base leading-relaxed">RedBark Game Studio</p>
                  <p className="mt-3 font-serif text-base leading-relaxed">
                    Scaled the studio from startup into a mature organization, keeping 90%+ of the team through growth phases.
                  </p>
                  <EvolutionScaleChart />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 pb-10 sm:pb-16">
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
              Skills
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="border-t border-black/10 pt-4 font-serif text-[18px]">Studio Scaling</div>
              <div className="border-t border-black/10 pt-4 font-serif text-[18px]">Full-cycle Game Dev</div>
              <div className="border-t border-black/10 pt-4 font-serif text-[18px]">Stakeholder Management</div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="scroll-mt-24 py-10 sm:py-16">
          <div className="mx-auto w-full max-w-5xl px-6 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
              Portfolio
            </div>
            <div className="mt-10 font-serif text-[22px] leading-[1.25] tracking-tight">
              RoomScapes - key case
            </div>
          </div>
        </section>

        <section id="philosophy" className="scroll-mt-24 pb-20 sm:pb-28">
          <div className="mx-auto w-full max-w-5xl px-6 text-center">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
              Philosophy
            </div>
            <div className="mt-10">
              <div className="mx-auto h-px w-[min(520px,100%)] bg-black/10" />
              <blockquote className="mx-auto mt-8 font-serif italic text-[clamp(2.6rem,5.6vw,4.1rem)] leading-[1.04] font-semibold tracking-tight">
                Victory is not an accident; it is the architecture of discipline.
              </blockquote>
              <div className="mx-auto mt-8 h-px w-[min(520px,100%)] bg-black/10" />
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 pb-24 pt-6 sm:pt-0">
          <div className="mx-auto w-full max-w-5xl px-6">
            <footer className="border-t border-black/10 pt-10">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60">
                Contact
              </div>

              <div className="mt-8 group relative inline-block">
                <a
                  href={`mailto:${email}`}
                  className="font-serif text-[clamp(2.1rem,4.8vw,3.4rem)] leading-[1.05] font-semibold tracking-tight text-[#1a1a1a]"
                >
                  {email}
                </a>
                <span className="pointer-events-none absolute left-0 right-0 top-[calc(100%-0.1em)] h-[1px] bg-black/35 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </div>

              <div className="mt-6 text-[13px] text-black/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-black/45">Location</span>
                  <div className="mt-2 font-serif">{location}</div>
                </div>
                <div>
                  <span className="font-mono uppercase tracking-[0.18em] text-[11px] text-black/45">Telegram</span>
                  <div className="mt-2">
                    <a href={telegramUrl} target="_blank" rel="noreferrer" className="font-serif transition-colors hover:text-black/70">
                      {telegram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <ClipboardButton value={email} label="Copy email" />
                <span className="text-sm text-black/60">Tap to copy, click to mail.</span>
              </div>

              <div className="mt-8 text-[12px] text-black/50">
                Currently: Building at Scale · {new Date().getFullYear()}
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
