import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Cpu,
  ScanFace,
  Layers,
  ShieldCheck,
  CarFront,
  MoonStar,
  Smartphone,
  Clock,
  Lock,
  Eye,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import { getCopy, type FeatureModeId } from "@/lib/i18n";
import { IphonePreview } from "@/components/IphonePreview";
import { PrivacyArchitectureDiagram } from "@/components/PrivacyArchitectureDiagram";
import { MarketResearchSurvey } from "@/components/MarketResearchSurvey";
import { WaitlistForm } from "@/components/WaitlistForm";
import { LegalModal, type LegalModalType } from "@/components/LegalModals";
import cockpitTwilightImg from "@/assets/images/astrateq_cockpit_twilight_1794939876479.jpg";
import winterHighwayImg from "@/assets/images/astrateq_winter_highway_1794939877107.jpg";

const LOGO_URL = "https://i.ibb.co/b5xrr612/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png";

const pageTitle = "Astrateq Gadgets — Driver Awareness iOS Concept & Market Research";
const pageDescription =
  "Astrateq Gadgets is an emerging driver-awareness intelligence experience for iPhone. Share your feedback in our anonymous Canadian consumer research survey.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Astrateq Gadgets" },
      { property: "og:locale", content: "en_CA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
  }),
  component: Index,
});

function MapleLeafIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={`text-rose-500 ${className}`}
    >
      <path d="M12 1.5l2.1 4.8 3.6-1.2-1.2 4.1 3.7-0.8-1.5 2.6 2.8 1.4-4.7 2.2 0.8 2.4-4.6-0.7V22h-2v-5.7l-4.6 0.7 0.8-2.4-4.7-2.2 2.8-1.4-1.5-2.6 3.7 0.8-1.2-4.1 3.6 1.2L12 1.5z" />
    </svg>
  );
}

export default function Index() {
  const copy = getCopy("en-CA");
  const [activeModeId, setActiveModeId] = useState<FeatureModeId>("awareness");
  const [openFaqId, setOpenFaqId] = useState<string | null>(copy.faq.items[0]?.id ?? null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<LegalModalType>(null);
  const [techImgError, setTechImgError] = useState(false);
  const [heroImgError, setHeroImgError] = useState(false);
  const [surveyImgError, setSurveyImgError] = useState(false);

  const modes = copy.productExplanation.modes;
  const activeMode = modes.find((m) => m.id === activeModeId) ?? modes[0]!;
  const heroMode = modes.find((m) => m.id === "awareness") ?? modes[0]!;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Astrateq Gadgets",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "iOS",
        description: pageDescription,
        publisher: {
          "@type": "Organization",
          name: "Astrateq Gadgets",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: copy.faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  const navLinks = [
    { href: "#overview", label: copy.nav.overview },
    { href: "#how-it-works", label: copy.nav.howItWorks },
    { href: "#technology", label: copy.nav.technology },
    { href: "#privacy", label: copy.nav.privacy },
    { href: "#survey", label: copy.nav.research },
    { href: "#faq", label: copy.nav.faq },
  ];

  const highlightIcons = [
    <CarFront key="h-car" className="size-6 text-[#00E5FF]" aria-hidden="true" />,
    <MoonStar key="h-moon" className="size-6 text-[#00E5FF]" aria-hidden="true" />,
    <ShieldCheck key="h-shield" className="size-6 text-[#00E5FF]" aria-hidden="true" />,
    <Smartphone key="h-phone" className="size-6 text-[#00E5FF]" aria-hidden="true" />,
  ];

  const cardIcons = [
    <Eye key="c-eye" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <MoonStar key="c-moon" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <Lock key="c-lock" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
  ];

  const techIcons = [
    <Cpu key="t-cpu" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <ScanFace key="t-scan" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <Layers key="t-layers" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#050505] text-white selection:bg-[#00E5FF]/25 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Keyboard Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#00E5FF] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#050505]"
      >
        {copy.skipToContent}
      </a>

      {/* Header & Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-6 sm:px-6">
          {/* Brand Logo + Wordmark matching Mock-up */}
          <a href="#top" className="flex items-center gap-2.5 whitespace-nowrap shrink-0">
            <img
              src={LOGO_URL}
              alt="Astrateq Gadgets"
              width={36}
              height={36}
              decoding="async"
              className="size-8 rounded-lg object-contain sm:size-9"
            />
            <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
              Astrateq <span className="text-[#00E5FF]">Gadgets</span>
            </span>
          </a>

          {/* Single-line Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#9299A5] underline-offset-4 transition-colors hover:text-white hover:underline whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions & Mobile Menu Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="#overview"
              className="hidden min-h-[40px] items-center justify-center rounded-lg border border-white/15 bg-[#0B0F19] px-3.5 py-2 font-display text-xs font-semibold text-white transition-colors hover:border-white/30 xl:inline-flex whitespace-nowrap shrink-0"
            >
              {copy.nav.secondaryAction}
            </a>

            <a
              href="#survey"
              className="hidden min-h-[40px] items-center justify-center gap-1.5 rounded-lg bg-[#00E5FF] px-4 py-2 font-display text-xs font-semibold text-[#050505] transition-opacity hover:opacity-90 sm:inline-flex whitespace-nowrap shrink-0"
            >
              <span>{copy.nav.primaryAction}</span>
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/15 bg-[#0B0F19] text-white lg:hidden cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile"
            className="border-t border-white/10 bg-[#0B0F19] px-4 py-4 sm:px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium text-[#9299A5] transition-colors hover:bg-[#141A24] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <a
                  href="#overview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 bg-[#050505] px-4 py-2.5 font-display text-sm font-semibold text-white"
                >
                  {copy.nav.secondaryAction}
                </a>
                <a
                  href="#survey"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#00E5FF] px-4 py-2.5 font-display text-sm font-semibold text-[#050505]"
                >
                  <span>{copy.nav.primaryAction}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main-content">
        {/* 1. Hero Section — Product-First Presentation */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-white/10 bg-[#050505]"
        >
          {/* Subtle Driving Cockpit Twilight Backdrop matching Mock-up */}
          {!heroImgError ? (
            <img
              src={cockpitTwilightImg}
              alt=""
              aria-hidden="true"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              onError={() => setHeroImgError(true)}
              className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-25"
            />
          ) : null}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/65"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 lg:py-24">
            <div className="animate-fade-rise min-w-0">
              <div className="inline-flex items-center gap-2 border-b border-[#00E5FF]/35 pb-1.5 text-xs font-medium tracking-wide text-[#00E5FF]">
                <MapleLeafIcon />
                <span>{copy.hero.badge}</span>
              </div>

              <h1
                className="mt-5 font-display font-bold tracking-tight text-white text-balance"
                style={{ fontSize: "clamp(2.35rem, 4.6vw, 4.1rem)", lineHeight: 1.04 }}
              >
                <span className="block">{copy.hero.headlineLine1}</span>
                <span className="block text-[#00E5FF]">{copy.hero.headlineLine2}</span>
              </h1>

              <p className="mt-5 font-display text-lg font-semibold tracking-tight text-white/95 sm:text-2xl text-balance">
                {copy.hero.supportingHeadline}
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#9299A5] sm:text-[17px]">
                {copy.hero.description}
              </p>

              {/* Two Primary Actions matching Section 4 */}
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#survey"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 font-display text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90 whitespace-nowrap"
                >
                  <span>{copy.hero.primaryCta}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>

                <a
                  href="#technology"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/20 bg-[#0B0F19]/90 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-[#00E5FF]/50 hover:bg-[#141A24] whitespace-nowrap"
                >
                  {copy.hero.secondaryCta}
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#9299A5]">
                <MapleLeafIcon className="size-3.5 shrink-0" />
                <span className="font-mono">{copy.hero.stageIndicator}</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <IphonePreview mode={heroMode} previewLabel={copy.hero.previewLabel} tilted />
            </div>
          </div>
        </section>

        {/* 2. 4-Column Capability Strip matching Mock-up */}
        <section
          aria-label="Core concept pillars"
          className="border-b border-white/10 bg-[#070B12]"
        >
          <div className="mx-auto grid max-w-6xl divide-y divide-white/10 px-4 sm:grid-cols-2 sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:divide-x">
            {copy.highlights.map((item, idx) => (
              <div
                key={item.title}
                className="flex flex-col items-center px-4 py-6 text-center sm:py-7"
              >
                <div className="mb-3">{highlightIcons[idx]}</div>
                <p className="font-display text-sm font-bold text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Product Explanation — Driver Awareness, Reimagined. */}
        <section id="overview" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.productExplanation.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.productExplanation.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                {copy.productExplanation.subtitle}
              </p>
            </div>

            {/* 3 Feature Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {copy.productExplanation.cards.map((card, idx) => (
                <article
                  key={card.id}
                  className="rounded-2xl border border-white/10 bg-[#0B0F19] p-6 transition-colors hover:border-white/20 sm:p-7"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-[#141A24]">
                    {cardIcons[idx]}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white">{card.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#9299A5]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>

            {/* Interactive Intended iOS Experience Switcher */}
            <div className="mt-14 border-t border-white/10 pt-12">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {copy.productExplanation.modesHeading}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#9299A5]">
                    Switch between illustrative iOS concept screens in early exploration.
                  </p>
                </div>
              </div>

              <div
                role="tablist"
                aria-label="Astrateq Gadgets iOS concept views"
                className="mt-6 flex flex-wrap gap-2 border-b border-white/10 pb-4"
              >
                {modes.map((mode) => {
                  const isSelected = mode.id === activeMode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      role="tab"
                      id={`tab-${mode.id}`}
                      aria-selected={isSelected}
                      aria-controls={`panel-${mode.id}`}
                      onClick={() => setActiveModeId(mode.id)}
                      className={`min-h-[44px] rounded-lg px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${
                        isSelected
                          ? "bg-[#00E5FF] font-semibold text-[#050505]"
                          : "border border-white/10 bg-[#0B0F19] text-[#9299A5] hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {mode.tabLabel}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
                <div
                  id={`panel-${activeMode.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeMode.id}`}
                  className="flex justify-center"
                >
                  <IphonePreview mode={activeMode} previewLabel={copy.hero.previewLabel} compact />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {modes.map((mode) => {
                    const isActive = mode.id === activeMode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setActiveModeId(mode.id)}
                        className={`flex flex-col justify-between rounded-2xl border p-5 text-left transition-colors cursor-pointer sm:p-6 ${
                          isActive
                            ? "border-[#00E5FF]/60 bg-[#0B0F19]"
                            : "border-white/10 bg-[#070B12] hover:border-white/25 hover:bg-[#0B0F19]"
                        }`}
                      >
                        <div>
                          <p className="font-mono text-[11px] font-medium tracking-wider text-[#00E5FF] uppercase">
                            {mode.eyebrow}
                          </p>
                          <h4 className="mt-2 font-display text-base font-bold text-white sm:text-lg">
                            {mode.title}
                          </h4>
                          <p className="mt-2 text-sm leading-relaxed text-[#9299A5]">
                            {mode.description}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                          <span>{isActive ? "Showing in preview" : "Preview screen"}</span>
                          <ArrowRight className="size-3.5 text-[#00E5FF]" aria-hidden="true" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Development Stage Transparency Breakdown */}
            <div className="mt-14 border-t border-white/10 pt-10">
              <h3 className="font-display text-lg font-bold text-white">
                {copy.productExplanation.stagesHeading}
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {copy.productExplanation.stages.map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-xl border border-white/10 bg-[#0B0F19] p-5"
                  >
                    <p className="font-mono text-[11px] font-medium tracking-wider text-[#00E5FF] uppercase">
                      {item.stage}
                    </p>
                    <p className="mt-1.5 font-display text-base font-semibold text-white">
                      {item.scope}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#9299A5]">{item.details}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-[#9299A5]">
                {copy.productExplanation.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* 4. How It Works — Horizontal Timeline (Desktop) & Vertical Timeline (Mobile) */}
        <section id="how-it-works" className="border-b border-white/10 bg-[#0B0F19]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.howItWorks.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.howItWorks.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                {copy.howItWorks.subtitle}
              </p>
            </div>

            {/* Responsive Horizontal / Vertical 4-Step Timeline */}
            <div className="relative mt-12">
              {/* Desktop horizontal connector track */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-5 right-12 left-12 hidden h-px bg-white/15 md:block"
              />
              {/* Mobile vertical connector track */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-5 bottom-5 left-5 w-px bg-white/15 md:hidden"
              />

              <ol className="grid gap-6 md:grid-cols-4 md:gap-5">
                {copy.howItWorks.steps.map((step) => (
                  <li
                    key={step.number}
                    className="relative flex flex-row gap-4 md:flex-col md:gap-5"
                  >
                    <div className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-[#00E5FF]/50 bg-[#050505] font-mono text-xs font-bold tabular-nums text-[#00E5FF]">
                      {step.number}
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-[#050505]/80 p-5">
                      <h3 className="font-display text-base font-bold text-white sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9299A5]">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-8 rounded-xl border border-white/10 bg-[#050505]/70 px-4 py-3 text-xs leading-relaxed text-[#9299A5]">
              {copy.howItWorks.responsibilityNote}
            </p>
          </div>
        </section>

        {/* 5. Integrated Consumer Research Experience (Split Dark Card matching Mock-up) */}
        <section id="survey" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="overflow-hidden rounded-3xl border border-white/12 bg-[#0B0F19] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
              <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
                {/* Left Visual Story Panel matching Mock-up */}
                <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/10 p-6 sm:p-10 lg:border-r lg:border-b-0">
                  {!surveyImgError ? (
                    <img
                      src={cockpitTwilightImg}
                      alt="Canadian evening driving perspective from inside a vehicle cabin"
                      decoding="async"
                      onError={() => setSurveyImgError(true)}
                      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-45"
                    />
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/55"
                  />

                  <div className="relative z-10">
                    <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                      {copy.survey.eyebrow}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                      {copy.survey.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                      {copy.survey.subtitle}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 space-y-3 border-t border-white/15 pt-5">
                    <div className="flex items-center gap-2 text-xs font-medium text-white">
                      <Clock className="size-4 shrink-0 text-[#00E5FF]" aria-hidden="true" />
                      <span>{copy.survey.introMeta}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-[#9299A5]">
                      {copy.survey.transparencyNote}
                    </p>
                  </div>
                </div>

                {/* Right Interactive Survey Panel */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <MarketResearchSurvey copy={copy.survey} locale={copy.locale} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Privacy & Technology Section */}
        <section id="privacy" className="border-b border-white/10 bg-[#0B0F19]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr]">
              <div>
                <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                  {copy.privacy.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                  {copy.privacy.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                  {copy.privacy.subtitle}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {copy.privacy.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-xl border border-white/10 bg-[#050505]/80 p-5"
                    >
                      <h3 className="font-display text-base font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9299A5]">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-[#141A24] p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-[#00E5FF]"
                      aria-hidden="true"
                    />
                    <p className="text-xs leading-relaxed text-[#9299A5]">
                      {copy.privacy.auditNote}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setModalType("privacy")}
                    className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 self-start text-xs font-semibold text-[#00E5FF] underline-offset-4 hover:underline sm:self-center cursor-pointer"
                  >
                    <span>{copy.privacy.policyLinkLabel}</span>
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div>
                <PrivacyArchitectureDiagram />
              </div>
            </div>

            {/* Technical Architecture Anchor (#technology) */}
            <div id="technology" className="mt-16 border-t border-white/10 pt-14">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                  {copy.technology.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                  {copy.technology.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#9299A5]">
                  {copy.technology.subtitle}
                </p>
              </div>

              <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050505] sm:aspect-[21/9]">
                {!techImgError ? (
                  <img
                    src={winterHighwayImg}
                    alt="Canadian winter highway dusk perspective from a passenger vehicle windshield"
                    onError={() => setTechImgError(true)}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-full w-full items-center justify-center bg-[#050505]"
                  >
                    <span className="font-mono text-xs text-[#9299A5]">
                      Canadian Driving Conditions
                    </span>
                  </div>
                )}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/30 to-transparent"
                />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 sm:inset-x-6 sm:bottom-5 sm:gap-3">
                  <p className="font-display text-xs font-semibold text-white sm:text-sm">
                    Explored for everyday Canadian driving across dusk, glare, and winter roads
                  </p>
                  <span className="font-mono text-[11px] text-[#00E5FF] sm:text-xs">
                    iOS On-Device Concept
                  </span>
                </div>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {copy.technology.items.map((item, idx) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-[#050505]/80 p-6"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-[#141A24]">
                      {techIcons[idx]}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 font-mono text-xs text-[#00E5FF]">{item.summary}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#9299A5]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Visually Separate Beta Interest Registration Section */}
        <section id="beta-access" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="rounded-3xl border border-white/12 bg-[#0B0F19] p-6 sm:p-10 lg:p-12">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                  {copy.beta.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl text-balance">
                  {copy.beta.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#9299A5] sm:text-base">
                  {copy.beta.subtitle}
                </p>
              </div>

              <div className="mt-8 max-w-2xl">
                <WaitlistForm copy={copy.beta} locale={copy.locale} source="beta_updates_section" />
              </div>
            </div>
          </div>
        </section>

        {/* 8. Expandable FAQ Section (All 9 Required Questions) */}
        <section id="faq" className="border-b border-white/10 bg-[#0B0F19]">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.faq.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.faq.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">{copy.faq.subtitle}</p>
            </div>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {copy.faq.items.map((item) => {
                const isOpen = openFaqId === item.id;
                const panelId = `faq-answer-${item.id}`;
                return (
                  <div key={item.id}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaqId(isOpen ? null : item.id)}
                        className="flex min-h-[56px] w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold text-white transition-colors hover:text-[#00E5FF] sm:text-lg cursor-pointer"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`size-5 shrink-0 text-[#9299A5] transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#00E5FF]" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    {isOpen ? (
                      <div
                        id={panelId}
                        className="pb-6 pr-8 text-sm leading-relaxed text-[#9299A5]"
                      >
                        {item.answer}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="bg-[#050505]">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-16">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <a href="#top" className="inline-flex items-center gap-2.5">
                <img
                  src={LOGO_URL}
                  alt="Astrateq Gadgets"
                  width={32}
                  height={32}
                  decoding="async"
                  className="size-8 rounded-lg object-contain"
                />
                <span className="font-display text-lg font-bold tracking-tight text-white">
                  Astrateq <span className="text-[#00E5FF]">Gadgets</span>
                </span>
              </a>
              <p className="mt-3 max-w-md text-sm font-medium text-white/90">
                {copy.footer.tagline}
              </p>
              <p className="mt-2 max-w-md text-xs leading-relaxed text-[#9299A5]">
                {copy.footer.stageNote}
              </p>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#9299A5]">
                <MapleLeafIcon />
                <span>{copy.footer.marketNote}</span>
              </div>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                {copy.footer.navigationHeading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#overview"
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                  >
                    {copy.nav.overview}
                  </a>
                </li>
                <li>
                  <a
                    href="#survey"
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                  >
                    {copy.nav.research}
                  </a>
                </li>
                <li>
                  <a
                    href="#beta-access"
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                  >
                    Beta Interest
                  </a>
                </li>
                <li>
                  <a
                    href="#technology"
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                  >
                    {copy.nav.technology}
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                  >
                    {copy.nav.faq}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                {copy.footer.legalHeading}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType("privacy")}
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white cursor-pointer"
                  >
                    {copy.footer.privacyLink}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType("terms")}
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white cursor-pointer"
                  >
                    {copy.footer.termsLink}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType("safety")}
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white cursor-pointer"
                  >
                    {copy.footer.safetyLink}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setModalType("support")}
                    className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white cursor-pointer"
                  >
                    {copy.footer.supportLink}
                  </button>
                </li>
              </ul>

              <div className="mt-6">
                <p className="font-display text-xs font-semibold text-white">
                  {copy.footer.contactHeading}
                </p>
                <a
                  href="mailto:kingnarmer702@gmail.com"
                  className="mt-1 inline-block font-mono text-xs text-[#9299A5] transition-colors hover:text-[#00E5FF]"
                >
                  kingnarmer702@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-xs text-[#9299A5] sm:flex-row sm:items-center sm:justify-between">
            <p>{copy.footer.copyright}</p>
            <p>{copy.footer.legalDraftNote}</p>
          </div>
        </div>
      </footer>

      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}
