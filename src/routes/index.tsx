import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, Menu, X, ArrowRight, Cpu, ScanFace, Layers, ShieldCheck } from "lucide-react";
import { getCopy, type FeatureModeId } from "@/lib/i18n";
import { IphonePreview } from "@/components/IphonePreview";
import { PrivacyArchitectureDiagram } from "@/components/PrivacyArchitectureDiagram";
import { MarketResearchSurvey } from "@/components/MarketResearchSurvey";
import { WaitlistForm } from "@/components/WaitlistForm";
import { LegalModal, type LegalModalType } from "@/components/LegalModals";
import winterHighwayImg from "@/assets/images/astrateq_winter_highway_1794939877107.jpg";

const pageTitle = "Astrateq Gadgets — Driver Awareness iOS Concept & Market Research";
const pageDescription =
  "Astrateq Gadgets is an early-stage iOS driver-awareness concept exploring on-device computer vision. Share your feedback in our 2-minute Canadian driver survey.";

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

export default function Index() {
  const copy = getCopy("en-CA");
  const [activeModeId, setActiveModeId] = useState<FeatureModeId>("awareness");
  const [openFaqId, setOpenFaqId] = useState<string | null>(copy.faq.items[0]?.id ?? null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<LegalModalType>(null);
  const [techImgError, setTechImgError] = useState(false);

  const activeMode =
    copy.demonstration.modes.find((m) => m.id === activeModeId) ?? copy.demonstration.modes[0]!;
  const heroMode = copy.demonstration.modes[0]!;

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
    { href: "#product", label: copy.nav.product },
    { href: "#survey", label: copy.nav.survey },
    { href: "#privacy", label: copy.nav.privacy },
    { href: "#faq", label: copy.nav.faq },
    { href: "#beta-access", label: copy.nav.betaAccess },
  ];

  const techIcons = [
    <Cpu key="ane" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <ScanFace key="vision" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
    <Layers key="sync" className="size-5 text-[#00E5FF]" aria-hidden="true" />,
  ];

  return (
    <div className="min-h-screen overflow-x-clip bg-[#050505] text-white selection:bg-[#00E5FF]/25 selection:text-white">
      {/* Structured Data for Search Engines */}
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

      {/* Top Navigation Bar (Strict 3-Zone Contract) */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:gap-8 sm:px-6">
          {/* Zone 1: Brand Logo */}
          <a
            href="#top"
            aria-label="Astrateq Gadgets home"
            className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/15 bg-[#0B0F19] transition-colors hover:border-[#00E5FF]/60 sm:size-12"
          >
            <img
              src="https://i.ibb.co/b5xrr612/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png"
              alt="Astrateq Gadgets"
              width={48}
              height={48}
              decoding="async"
              className="size-full object-contain"
            />
          </a>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex lg:gap-7">
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

          {/* Zone 3: Primary Market Research Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#survey"
              className="hidden min-h-[40px] items-center justify-center rounded-lg bg-[#00E5FF] px-4 py-2 font-display text-xs font-semibold text-[#050505] transition-opacity hover:opacity-90 sm:inline-flex whitespace-nowrap shrink-0"
            >
              {copy.nav.primaryAction}
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
              className="inline-flex size-11 items-center justify-center rounded-lg border border-white/15 bg-[#0B0F19] text-white md:hidden cursor-pointer"
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
            className="border-t border-white/10 bg-[#0B0F19] px-4 py-4 sm:px-6 md:hidden"
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
              <a
                href="#survey"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#00E5FF] px-4 py-2.5 font-display text-sm font-semibold text-[#050505]"
              >
                {copy.nav.primaryAction}
              </a>
            </div>
          </nav>
        ) : null}
      </header>

      <main id="main-content">
        {/* 1. Hero Section */}
        <section
          id="top"
          className="relative overflow-hidden border-b border-white/10 bg-[#050505]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_65%_20%,rgba(0,229,255,0.06),transparent_70%)]"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14 lg:py-24">
            <div className="animate-fade-rise min-w-0">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.hero.eyebrow}
              </p>

              <h1
                className="mt-5 font-display font-bold tracking-tight text-white text-balance"
                style={{ fontSize: "clamp(2.15rem, 4.4vw, 3.85rem)", lineHeight: 1.08 }}
              >
                {copy.hero.headline}
              </h1>

              <p className="mt-4 font-display text-lg font-semibold tracking-tight text-white/90 sm:text-2xl text-balance">
                {copy.hero.supportingHeadline}
              </p>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#9299A5] sm:text-[17px]">
                {copy.hero.description}
              </p>

              {/* Transparent Early-Stage Research Status Notice */}
              <div className="mt-6 max-w-xl rounded-xl border border-white/10 bg-[#0B0F19] p-4">
                <p className="text-xs leading-relaxed text-[#9299A5]">{copy.hero.researchBanner}</p>
              </div>

              {/* Consistent 3-Action Funnel */}
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href="#survey"
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 font-display text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90 whitespace-nowrap"
                >
                  <span>{copy.hero.primaryCta}</span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>

                <a
                  href="#product"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/15 bg-[#0B0F19] px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-[#141A24] whitespace-nowrap"
                >
                  {copy.hero.secondaryCta}
                </a>

                <a
                  href="#beta-access"
                  className="inline-flex min-h-[44px] items-center justify-center px-2 text-sm font-medium text-[#9299A5] underline-offset-4 transition-colors hover:text-[#00E5FF] hover:underline whitespace-nowrap"
                >
                  {copy.hero.tertiaryCta}
                </a>
              </div>

              <p className="mt-6 font-mono text-xs text-[#9299A5]">{copy.hero.contextNote}</p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <IphonePreview mode={heroMode} previewLabel={copy.hero.previewLabel} priority />
            </div>
          </div>
        </section>

        {/* 2. Product Demonstration Section */}
        <section id="product" className="border-b border-white/10 bg-[#0B0F19]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.demonstration.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.demonstration.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                {copy.demonstration.subtitle}
              </p>
            </div>

            {/* Interactive Interface Mode Tabs */}
            <div
              role="tablist"
              aria-label="Astrateq Gadgets iOS concept views"
              className="mt-10 flex flex-wrap gap-2 border-b border-white/10 pb-4"
            >
              {copy.demonstration.modes.map((mode) => {
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
                        : "border border-white/10 bg-[#141A24] text-[#9299A5] hover:text-white"
                    }`}
                  >
                    {mode.tabLabel}
                  </button>
                );
              })}
            </div>

            {/* Split Demonstration Layout */}
            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
              <div
                id={`panel-${activeMode.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeMode.id}`}
                className="flex justify-center"
              >
                <IphonePreview mode={activeMode} previewLabel={copy.hero.previewLabel} compact />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {copy.demonstration.modes.map((mode) => {
                  const isActive = mode.id === activeMode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveModeId(mode.id)}
                      className={`flex flex-col justify-between rounded-2xl border p-6 text-left transition-colors cursor-pointer ${
                        isActive
                          ? "border-[#00E5FF]/60 bg-[#141A24]"
                          : "border-white/10 bg-[#050505]/60 hover:border-white/25 hover:bg-[#141A24]/60"
                      }`}
                    >
                      <div>
                        <p className="font-mono text-[11px] font-medium tracking-wider text-[#00E5FF] uppercase">
                          {mode.eyebrow}
                        </p>
                        <h3 className="mt-2.5 font-display text-lg font-bold text-white">
                          {mode.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#9299A5]">
                          {mode.description}
                        </p>
                      </div>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                        <span>{isActive ? "Showing in preview" : "Preview screen"}</span>
                        <ArrowRight className="size-3.5 text-[#00E5FF]" aria-hidden="true" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Development Transparency Breakdown (Implemented vs. Prototype vs. Planned) */}
            <div className="mt-14 border-t border-white/10 pt-10">
              <h3 className="font-display text-lg font-bold text-white">
                {copy.demonstration.stagesHeading}
              </h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {copy.demonstration.stages.map((item) => (
                  <div
                    key={item.stage}
                    className="rounded-xl border border-white/10 bg-[#050505]/70 p-5"
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
            </div>

            <p className="mt-8 text-xs leading-relaxed text-[#9299A5]">
              {copy.demonstration.disclaimer}
            </p>
          </div>
        </section>

        {/* 3. How It Works Section */}
        <section id="how-it-works" className="border-b border-white/10 bg-[#050505]">
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

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.howItWorks.steps.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0F19] p-6 sm:p-7"
                >
                  <div>
                    <span className="font-mono text-sm font-semibold tabular-nums text-[#00E5FF]">
                      {step.number}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#9299A5]">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Privacy & Data Transparency Section */}
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

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {copy.privacy.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="rounded-xl border border-white/10 bg-[#050505]/70 p-5"
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

                <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-[#141A24] p-4">
                  <ShieldCheck
                    className="mt-0.5 size-5 shrink-0 text-[#00E5FF]"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-relaxed text-[#9299A5]">{copy.privacy.auditNote}</p>
                </div>
              </div>

              <div>
                <PrivacyArchitectureDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Technology Section */}
        <section id="technology" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.technology.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.technology.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                {copy.technology.subtitle}
              </p>
            </div>

            {/* Editorial Canadian Road Context Visual */}
            <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] sm:aspect-[21/9]">
              {!techImgError ? (
                <img
                  src={winterHighwayImg}
                  alt="Canadian winter highway dusk perspective from a passenger vehicle windshield"
                  onError={() => setTechImgError(true)}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex h-full w-full items-center justify-center bg-gradient-to-r from-[#0B0F19] via-[#141A24] to-[#0B0F19]"
                >
                  <span className="font-mono text-xs text-[#9299A5]">
                    Canadian Highway Environment
                  </span>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/30 to-transparent"
              />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 sm:inset-x-6 sm:bottom-5 sm:gap-3">
                <p className="font-display text-xs font-semibold text-white sm:text-sm">
                  Designed around everyday Canadian commutes across variable light and winter
                  conditions
                </p>
                <span className="font-mono text-[11px] text-[#00E5FF] sm:text-xs">
                  iOS · On-Device Concept
                </span>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {copy.technology.items.map((item, idx) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-[#0B0F19] p-6">
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
        </section>

        {/* 6. Consumer Interest Survey Section (Primary Market Research Conversion) */}
        <section id="survey" className="border-b border-white/10 bg-[#0B0F19]">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
                {copy.survey.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
                {copy.survey.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9299A5]">
                {copy.survey.subtitle}
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#141A24] p-4">
              <p className="text-xs leading-relaxed text-[#9299A5]">
                {copy.survey.transparencyNote}
              </p>
            </div>

            <div className="mt-8">
              <MarketResearchSurvey copy={copy.survey} locale={copy.locale} />
            </div>
          </div>
        </section>

        {/* 7. Optional Future Beta Updates Registration (Separate & Secondary) */}
        <section id="beta-access" className="border-b border-white/10 bg-[#050505]">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
            <div className="rounded-3xl border border-white/10 bg-[#0B0F19] p-6 sm:p-12">
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-medium tracking-wider text-[#9299A5] uppercase">
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

        {/* 8. Product FAQ Section */}
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
              <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
                Astrateq <span className="text-[#00E5FF]">Gadgets</span>
              </a>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#9299A5]">
                {copy.footer.tagline}
              </p>
              <p className="mt-4 font-mono text-xs text-[#9299A5]">{copy.footer.marketNote}</p>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                {copy.footer.productHeading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="inline-flex min-h-[36px] items-center text-[#9299A5] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white">
                {copy.footer.legalHeading}
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
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

      {/* Accessible Informational / Legal Notices Modal */}
      <LegalModal type={modalType} onClose={() => setModalType(null)} />
    </div>
  );
}
