import { createFileRoute } from "@tanstack/react-router";
import { HudMockup } from "@/components/HudMockup";
import { WaitlistForm } from "@/components/WaitlistForm";

const title = "Astrateq Gadgets — Privacy-First Driver Awareness AI";
const description =
  "Edge-AI driver awareness built for Canadian winters. On-device NPU computer vision, no cloud video streaming. Join the 500-spot Canadian beta cohort.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    tag: "Privacy & data sovereignty",
    title: "Edge-AI Execution",
    body: "Camera frames are processed locally on your phone's neural engine. No raw video leaves the device, latency stays in the tens of milliseconds, and your driving footage stays yours by architecture — not by policy.",
    points: ["On-device NPU inference", "Zero raw video upload", "Sub-50 ms alert path"],
  },
  {
    tag: "Canadian climate intelligence",
    title: "Snow-Glare & Cold-Weather Vision",
    body: "Our vision pipeline is being calibrated for the conditions standard dashcams struggle with: low winter sun off fresh snow, early-dark commutes, and the fatigue patterns that build across long cold-weather drives.",
    points: [
      "Snow-glare exposure compensation",
      "Winter fatigue & gaze tracking",
      "Cold-start risk adaptation",
    ],
  },
  {
    tag: "Future-proof ecosystem",
    title: "Software to Silicon",
    body: "Phase one is the iOS and Android driver safety hub. From there the same local-first stack extends into dedicated hardware, so early app users step straight into the connected ecosystem.",
    points: ["NPU dashcam hub", "Predictive OBD-II scanner", "Cold-weather TPMS sensors"],
  },
];

const benefits = [
  {
    title: "Priority app access",
    body: "First TestFlight and Play beta builds, ahead of public release.",
  },
  {
    title: "Direct roadmap input",
    body: "Your commute data pain points shape which detections ship next.",
  },
  {
    title: "Founding hardware rates",
    body: "Locked-in early pricing when the dashcam and OBD-II units launch.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header
        className="sticky top-0 z-40 border-b border-border"
        style={{ background: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(12px)" }}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span className="flex h-[42px] items-center justify-center rounded-xl border border-[rgba(0,240,255,0.2)] bg-[rgba(255,255,255,0.08)] px-2">
              <img
                src="https://i.ibb.co/KzK2ph7f/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png"
                alt="Astrateq Gadgets logo"
                className="h-9 w-auto mix-blend-multiply"
                style={{ height: "36px" }}
              />
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-[0.18em] text-foreground">
              ASTRATEQ GADGETS
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <a
              href="#privacy"
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:block"
            >
              Privacy Whitepaper
            </a>
            <a
              href="#beta"
              className="rounded-lg border border-primary/40 bg-surface px-3.5 py-2 font-display text-xs font-semibold tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:glow-cyan sm:text-sm"
            >
              Join Beta Cohort
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-glow relative overflow-hidden border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:py-24">
            <div>
              <p className="label-mono">Phase 01 · Driver safety hub · Canada</p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                Smart Driver Awareness.
                <span className="block text-primary">Zero Privacy Compromise.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Experience privacy-first driver assistance powered by local Edge AI. Purpose-built
                for Canadian winter commuters—no cloud streaming, zero surveillance.
              </p>

              <div className="mt-8 max-w-xl">
                <WaitlistForm id="hero-email" />
                <p className="mt-3 text-xs text-muted-foreground">
                  🔒 100% On-Device NPU Computer Vision • Purpose-Built for Canadian Winters
                </p>
              </div>
            </div>

            <div className="lg:pl-4">
              <HudMockup />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="privacy" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="label-mono">How it works</p>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
                Built local-first, for the roads we actually drive.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {features.map((f) => (
                <article key={f.title} className="glass-card group rounded-2xl p-6">
                  <p className="label-mono">{f.tag}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beta waitlist */}
        <section id="beta" className="hero-glow relative border-b border-border">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center lg:py-24">
            <p className="label-mono">Limited cohort</p>
            <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
              Join the Canadian Beta Cohort
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              500 TestFlight spots reserved for daily commuters logging real winter kilometres —
              highway, city, and cold-start conditions.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {benefits.map((b, i) => (
                <div key={b.title} className="glass-card rounded-2xl p-5">
                  <p className="label-mono text-primary">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-base font-semibold text-foreground">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-xl text-left">
              <WaitlistForm id="beta-email" cta="Claim My Beta Spot" />
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No spam, no data resale. One email when your cohort opens.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-primary" />
              <span className="truncate font-display text-sm font-semibold tracking-[0.18em]">
                ASTRATEQ GADGETS
              </span>
            </div>
            <p className="mt-3 max-w-md text-xs leading-relaxed text-muted-foreground">
              Data sovereignty guarantee: driver-facing video is processed on-device. Astrateq never
              streams raw camera feeds to central servers.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              © {new Date().getFullYear()} Astrateq Gadgets. Made in Canada.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <a href="#privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#privacy" className="transition-colors hover:text-primary">
              Whitepaper
            </a>
            <a href="#beta" className="transition-colors hover:text-primary">
              LinkedIn
            </a>
            <a href="#beta" className="transition-colors hover:text-primary">
              X / Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
