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
        className="sticky top-0 z-40 border-b border-border bg-[#0F172A]/85 backdrop-blur-md"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3.5">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span
              className="flex shrink-0 items-center justify-center rounded-[8px] border border-[#00F0FF] px-2 py-1 shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-transform duration-200 hover:scale-105"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #00F0FF",
                padding: "4px 8px",
                borderRadius: "8px",
                boxShadow: "0 0 12px rgba(0, 240, 255, 0.3)",
              }}
            >
              <img
                src="https://i.ibb.co/KzK2ph7f/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png"
                alt="Astrateq Gadgets emblem"
                className="h-[36px] w-auto object-contain"
                style={{
                  height: "36px",
                  filter: "drop-shadow(0px 0px 6px #00F0FF) brightness(1.2)",
                }}
                referrerPolicy="no-referrer"
              />
            </span>
            <span className="truncate font-display text-sm font-bold tracking-[0.18em] text-[#FFFFFF]">
              ASTRATEQ GADGETS
            </span>
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-5">
            <a
              href="#privacy"
              className="hidden font-display text-sm font-semibold text-[#E2E8F0] transition-colors hover:text-[#00F0FF] sm:block"
            >
              Privacy Whitepaper
            </a>
            <a
              href="#beta"
              className="rounded-lg border border-primary/50 bg-[#1E293B] px-3.5 py-2 font-display text-xs font-bold tracking-wide text-primary transition-all duration-300 hover:bg-primary hover:text-[#0F172A] hover:glow-cyan sm:text-sm"
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
              <p className="label-mono font-semibold text-[#00F0FF]">
                Phase 01 · Driver safety hub · Canada
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                Smart Driver Awareness.
                <span className="block text-primary">Zero Privacy Compromise.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#F8FAFC] sm:text-lg">
                Experience privacy-first driver assistance powered by local Edge AI. Purpose-built
                for Canadian winter commuters—no cloud streaming, zero surveillance.
              </p>

              <div className="mt-8 max-w-xl">
                <WaitlistForm id="hero-email" />
                <div className="mt-4 flex">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] px-3.5 py-1.5 text-xs font-medium text-[#E2E8F0] backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      padding: "6px 14px",
                      borderRadius: "9999px",
                      color: "#E2E8F0",
                    }}
                  >
                    <span>🔒</span>
                    <span>
                      100% On-Device NPU Computer Vision • Purpose-Built for Canadian Winters
                    </span>
                  </div>
                </div>
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
              <p className="label-mono font-semibold text-[#00F0FF]">How it works</p>
              <h2 className="mt-4 text-3xl font-bold text-[#FFFFFF] sm:text-4xl">
                Built local-first, for the roads we actually drive.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="glass-card group rounded-2xl border border-[#334155] bg-[#1E293B] p-6"
                >
                  <p className="label-mono font-semibold text-[#00F0FF]">{f.tag}</p>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#FFFFFF] transition-colors group-hover:text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#F8FAFC]">{f.body}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-4">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[#E2E8F0]">
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
            <p className="label-mono font-semibold text-[#00F0FF]">Limited cohort</p>
            <h2 className="mt-4 text-3xl font-bold text-[#FFFFFF] sm:text-4xl">
              Join the Canadian Beta Cohort
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#F8FAFC]">
              500 TestFlight spots reserved for daily commuters logging real winter kilometres —
              highway, city, and cold-start conditions.
            </p>

            <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  className="glass-card rounded-2xl border border-[#334155] bg-[#1E293B] p-5"
                >
                  <p className="label-mono font-bold text-primary">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-base font-bold text-[#FFFFFF]">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F8FAFC]">{b.body}</p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-xl text-left">
              <WaitlistForm id="beta-email" cta="Claim My Beta Spot" />
              <p className="mt-3 text-center text-xs text-[#E2E8F0]">
                No spam, no data resale. One email when your cohort opens.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
        <div className="grid gap-10 border-b border-border pb-12 md:grid-cols-3 lg:gap-12">
          {/* Column 1: Brand & Mission */}
          <div className="min-w-0">
            <div className="flex min-w-0 items-center gap-3">
              <span
                className="flex shrink-0 items-center justify-center rounded-[8px] border border-[#00F0FF] px-2 py-1 shadow-[0_0_12px_rgba(0,240,255,0.3)] transition-transform duration-200 hover:scale-105"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #00F0FF",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  boxShadow: "0 0 12px rgba(0, 240, 255, 0.3)",
                }}
              >
                <img
                  src="https://i.ibb.co/KzK2ph7f/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png"
                  alt="Astrateq Gadgets emblem"
                  className="h-6 w-auto object-contain"
                  style={{
                    height: "24px",
                    filter: "drop-shadow(0px 0px 6px #00F0FF) brightness(1.2)",
                  }}
                  referrerPolicy="no-referrer"
                />
              </span>
              <span className="truncate font-display text-sm font-bold tracking-[0.18em] text-[#FFFFFF]">
                ASTRATEQ GADGETS
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#F8FAFC]">
              Privacy-first edge AI driver awareness, purpose-built for Canadian winter commuters.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-[#1E293B] px-3 py-1 text-xs font-semibold text-[#00F0FF]">
              <span>🇨🇦</span>
              <span>Engineered in Canada • Beta Cohort Phase</span>
            </div>
          </div>

          {/* Column 2: Data Sovereignty Pledge */}
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold tracking-wide text-[#FFFFFF]">
              Data Sovereignty Pledge
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#E2E8F0]">
              Driver-facing camera video is processed exclusively on-device via local NPU. No raw
              feeds ever leave your phone or stream to central cloud servers.
            </p>
          </div>

          {/* Column 3: Validation & Roadmap */}
          <div className="min-w-0">
            <h3 className="font-display text-sm font-bold tracking-wide text-[#FFFFFF]">
              Validation & Roadmap
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#beta"
                  className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF]"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span>TestFlight Beta Status (500 Spots)</span>
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF]"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span>Edge-AI Architecture Whitepaper</span>
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF]"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span>Hardware Roadmap</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="mt-8 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[#F8FAFC]">
            © 2026 Astrateq Gadgets. All rights reserved. Built for Canadian roads.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-[#E2E8F0]">
            <a href="#privacy" className="transition-colors hover:text-[#00F0FF]">
              Privacy Policy
            </a>
            <a href="#beta" className="transition-colors hover:text-[#00F0FF]">
              Beta Terms
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#00F0FF]"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#00F0FF]"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
