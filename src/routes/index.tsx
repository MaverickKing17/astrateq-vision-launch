import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Shield, BrainCircuit, Snowflake, ScanEye, Network, ArrowUpRight } from "lucide-react";
import { HudMockup } from "@/components/HudMockup";
import { WaitlistForm } from "@/components/WaitlistForm";
import { LegalModal, type LegalModalType } from "@/components/LegalModals";
import {
  PrivacyNeuralSchematic,
  WinterVisionSchematic,
  EcosystemMeshSchematic,
} from "@/components/FeatureSchematics";

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
    id: "privacy",
    tag: "01 / PRIVACY & DATA SOVEREIGNTY",
    icon: (
      <div className="flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/40 bg-[#080B11] p-2 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
        <Shield className="size-4 text-[#FFFFFF] drop-shadow-[0_0_6px_#00F0FF]" />
        <BrainCircuit className="size-4 text-[#00F0FF]" />
      </div>
    ),
    title: "Smart Dashcam App on Your Phone",
    schematic: <PrivacyNeuralSchematic />,
    body: "Astrateq turns your smartphone into a privacy-first AI dashcam. Camera video is processed locally on your phone's chip—no driving footage or face data ever leaves your device or uploads to the cloud.",
    points: ["On-device NPU inference", "Zero raw video upload", "Sub-50 ms alert path"],
  },
  {
    id: "winter",
    tag: "02 / CANADIAN CLIMATE INTELLIGENCE",
    icon: (
      <div className="flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/40 bg-[#080B11] p-2 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
        <Snowflake className="size-4 text-[#FFFFFF] drop-shadow-[0_0_6px_#00F0FF]" />
        <ScanEye className="size-4 text-[#00F0FF]" />
      </div>
    ),
    title: "Built for Winter & Harsh Glare",
    schematic: <WinterVisionSchematic />,
    body: "Calibrated specifically for Canadian winter driving: detects winter fatigue, alerts you to road hazards, and compensates for blinding snow-glare that blinds standard cameras.",
    points: [
      "Snow-glare exposure compensation",
      "Winter fatigue & gaze tracking",
      "Cold-start risk adaptation",
    ],
  },
  {
    id: "roadmap",
    tag: "03 / HARDWARE ROADMAP",
    icon: (
      <div className="flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/40 bg-[#080B11] p-2 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
        <Network className="size-4 text-[#FFFFFF] drop-shadow-[0_0_6px_#00F0FF]" />
        <ArrowUpRight className="size-4 text-[#00F0FF]" />
      </div>
    ),
    title: "From Smartphone App to Smart Hardware",
    schematic: <EcosystemMeshSchematic />,
    body: "Phase 1 launches as an iOS and Android driver safety app. Phase 2 connects seamlessly to our upcoming dedicated NPU dashcams, OBD-II vehicle scanners, and tire sensors.",
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
  const [modalType, setModalType] = useState<LegalModalType>(null);

  return (
    <div className="min-h-screen bg-[#080B11] text-foreground selection:bg-[#00F0FF]/30 selection:text-[#00F0FF]">
      {/* Header */}
      <header
        className="sticky top-0 z-40 border-b border-[#1E293B] bg-[#080B11]/85 backdrop-blur-md"
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
            <button
              onClick={() => setModalType("privacy")}
              className="hidden font-display text-sm font-semibold text-[#E2E8F0] transition-colors hover:text-[#00F0FF] sm:block cursor-pointer"
            >
              Privacy Whitepaper
            </button>
            <button
              onClick={() => setModalType("disclaimer")}
              className="hidden font-display text-sm font-semibold text-[#E2E8F0] transition-colors hover:text-[#00F0FF] md:block cursor-pointer"
            >
              Safety Disclaimer
            </button>
            <a
              href="#beta"
              className="rounded-lg border border-[#00F0FF]/50 bg-[#131B29] px-3.5 py-2 font-display text-xs font-bold tracking-wide text-[#00F0FF] shadow-[0_0_14px_rgba(0,240,255,0.15)] transition-all duration-300 hover:bg-[#00F0FF] hover:text-[#080B11] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] sm:text-sm"
            >
              Join Beta Cohort
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section with Ambient Cyan Lighting Overhaul */}
        <section className="relative overflow-hidden border-b border-[#1E293B] bg-[#080B11]">
          {/* Subtle large radial ambient glow in deep cyan (8% opacity) */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(0,240,255,0.08),transparent_70%)]" />
          <div className="pointer-events-none absolute -top-40 right-1/4 size-[500px] rounded-full bg-[#00F0FF]/[0.05] blur-[120px]" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-10 lg:py-24">
            <div>
              <p className="label-mono font-semibold text-[#00F0FF]">
                Phase 01 · Driver safety hub · Canada
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-[#FFFFFF] sm:text-5xl lg:text-6xl">
                Smart Driver Awareness.
                <span className="block text-[#00F0FF]">Zero Privacy Compromise.</span>
              </h1>
              <p className="mt-5 max-w-xl text-[16px] leading-[1.6] text-[#94A3B8] sm:text-[17px]">
                Experience privacy-first driver assistance powered by local Edge AI. Purpose-built
                for Canadian winter commuters—no cloud streaming, zero surveillance.
              </p>

              <div className="mt-8 max-w-xl">
                <WaitlistForm id="hero-email" />
                <div className="mt-4 flex">
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-[#223046] bg-[#131B29]/90 px-3.5 py-1.5 text-xs font-medium text-[#E2E8F0] backdrop-blur-sm shadow-[0_0_12px_rgba(0,240,255,0.05)]"
                    style={{
                      backgroundColor: "rgba(19, 27, 41, 0.9)",
                      border: "1px solid #223046",
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

        {/* Feature Grid Section (#02) with Lighter Contrast Background */}
        <section id="privacy" className="relative border-b border-[#1E293B] bg-[#0E1420]">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
            <div className="max-w-2xl">
              <p className="label-mono font-semibold text-[#00F0FF]">How it works</p>
              <h2 className="mt-4 text-3xl font-bold text-[#FFFFFF] sm:text-4xl">
                Built local-first, for the roads we actually drive.
              </h2>
              <p className="mt-3 text-[16px] leading-[1.6] text-[#94A3B8]">
                Real-time neural intelligence executed entirely on your hardware for uncompromised
                privacy and zero-latency alerts.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-16">
              {features.map((f, i) => (
                <article
                  key={f.title}
                  className="feature-card-premium group flex flex-col justify-between p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="inline-flex items-center gap-1.5 rounded-md border border-[#00f2fe]/35 bg-[#00f2fe]/10 px-2.5 py-1 shadow-[0_0_10px_rgba(0,242,254,0.25)]">
                        <span className="font-mono text-xs font-bold tracking-wider text-[#00f2fe] drop-shadow-[0_0_6px_rgba(0,242,254,0.7)]">
                          0{i + 1}
                        </span>
                        <span className="text-[10px] font-mono font-semibold tracking-wider text-[#94A3B8]">
                          {f.tag.replace(/^0\d\s*\/\s*/, "")}
                        </span>
                      </div>
                      {f.icon}
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-[#FFFFFF] tracking-tight transition-colors group-hover:text-[#00f2fe]">
                      {f.title}
                    </h3>
                    {f.schematic}
                    <p className="mt-4 text-[15px] leading-[1.6] text-[#94A3B8]">{f.body}</p>
                  </div>
                  <ul className="mt-6 space-y-2.5 border-t border-[#223046]/80 pt-4">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-[#E2E8F0]">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]" />
                        <span className="min-w-0">{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beta Cohort CTA Section (#03) Enclosed in Glowing Dark-Glass Card */}
        <section
          id="beta"
          className="relative border-b border-[#1E293B] bg-[#080B11] py-16 lg:py-24"
        >
          <div className="mx-auto max-w-5xl px-5">
            <div className="relative overflow-hidden rounded-3xl border border-[#1E293B] bg-[#0E1420]/90 p-8 shadow-[0_0_60px_rgba(0,240,255,0.08)] backdrop-blur-xl sm:p-12 lg:p-14">
              {/* Soft Ambient Backlight Glow */}
              <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 size-96 rounded-full bg-[#00F0FF]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 right-1/4 size-80 rounded-full bg-[#00F0FF]/[0.06] blur-3xl" />

              <div className="relative mx-auto max-w-3xl text-center">
                <p className="label-mono font-semibold text-[#00F0FF]">Limited cohort</p>
                <h2 className="mt-4 text-3xl font-bold text-[#FFFFFF] sm:text-4xl">
                  Join the Canadian Beta Cohort
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-[1.6] text-[#94A3B8]">
                  500 TestFlight spots reserved for daily commuters logging real winter kilometres —
                  highway, city, and cold-start conditions.
                </p>

                <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
                  {benefits.map((b, i) => (
                    <div
                      key={b.title}
                      className="feature-card-premium group flex flex-col justify-between p-5.5 sm:p-6"
                    >
                      <div>
                        <div className="flex items-center">
                          <span className="inline-flex items-center justify-center rounded-md border border-[#00f2fe]/40 bg-[#00f2fe]/10 px-2.5 py-0.5 font-mono text-xs font-bold tracking-wider text-[#00f2fe] shadow-[0_0_12px_rgba(0,242,254,0.3)] drop-shadow-[0_0_6px_rgba(0,242,254,0.8)]">
                            0{i + 1}
                          </span>
                        </div>
                        <h3 className="mt-3.5 font-display text-base font-bold text-[#FFFFFF] tracking-tight">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-[14px] font-normal leading-[1.6] text-[#94A3B8]">
                          {b.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mx-auto mt-10 max-w-xl text-left">
                  <WaitlistForm id="beta-email" cta="Claim My Beta Spot" />
                  <p className="mt-3 text-center text-xs text-[#94A3B8]">
                    No spam, no data resale. One email when your cohort opens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Overhaul with Deep Obsidian Tone */}
      <footer className="border-t border-[#1E293B] bg-[#06080D]">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <div className="grid gap-10 border-b border-[#1E293B] pb-12 md:grid-cols-3 lg:gap-12">
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
              <p className="mt-4 text-[14px] leading-[1.6] text-[#94A3B8]">
                Privacy-first edge AI driver awareness, purpose-built for Canadian winter commuters.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#00F0FF]/30 bg-[#131B29] px-3 py-1 text-xs font-semibold text-[#00F0FF]">
                <span>🇨🇦</span>
                <span>Engineered in Canada • Beta Cohort Phase</span>
              </div>
            </div>

            {/* Column 2: Data Sovereignty Pledge */}
            <div className="min-w-0">
              <h3 className="font-display text-sm font-bold tracking-wide text-[#FFFFFF]">
                Data Sovereignty Pledge
              </h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-[#94A3B8]">
                Driver-facing camera video is processed exclusively on-device via local NPU. No raw
                feeds ever leave your phone or stream to central cloud servers.
              </p>
              <button
                onClick={() => setModalType("privacy")}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00F0FF] hover:underline cursor-pointer"
              >
                <span>Read On-Device Guarantee</span>
                <span>→</span>
              </button>
            </div>

            {/* Column 3: Validation & Roadmap */}
            <div className="min-w-0">
              <h3 className="font-display text-sm font-bold tracking-wide text-[#FFFFFF]">
                Validation & Roadmap
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <button
                    onClick={() => setModalType("terms")}
                    className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF] cursor-pointer"
                  >
                    <span className="size-1.5 rounded-full bg-[#00F0FF]" />
                    <span>TestFlight Beta Status (500 Spots)</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType("privacy")}
                    className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF] cursor-pointer"
                  >
                    <span className="size-1.5 rounded-full bg-[#00F0FF]" />
                    <span>Edge-AI Architecture Whitepaper</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setModalType("support")}
                    className="flex items-center gap-2 font-medium text-[#E2E8F0] transition-colors hover:text-[#00F0FF] cursor-pointer"
                  >
                    <span className="size-1.5 rounded-full bg-[#00F0FF]" />
                    <span>Hardware & Support Roadmap</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar & Legal */}
          <div className="mt-8 flex flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[#94A3B8]">
              © 2026 Astrateq Gadgets. All rights reserved. Built for Canadian roads.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-[#E2E8F0]">
              <button
                onClick={() => setModalType("disclaimer")}
                className="transition-colors hover:text-[#00F0FF] cursor-pointer"
              >
                Safety Disclaimer
              </button>
              <button
                onClick={() => setModalType("privacy")}
                className="transition-colors hover:text-[#00F0FF] cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalType("terms")}
                className="transition-colors hover:text-[#00F0FF] cursor-pointer"
              >
                Beta Terms
              </button>
              <button
                onClick={() => setModalType("dmca")}
                className="transition-colors hover:text-[#00F0FF] cursor-pointer"
              >
                DMCA & IP
              </button>
              <button
                onClick={() => setModalType("support")}
                className="transition-colors hover:text-[#00F0FF] cursor-pointer"
              >
                Support
              </button>
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
        </div>
      </footer>

      {/* Global Legal Modal Dialog */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}
