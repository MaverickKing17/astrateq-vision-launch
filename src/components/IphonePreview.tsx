import { CarFront, Eye, MoonStar, Shield, SlidersHorizontal, Bell } from "lucide-react";
import type { FeatureMode, FeatureModeId } from "@/lib/i18n";

interface IphonePreviewProps {
  mode: FeatureMode;
  previewLabel: string;
  compact?: boolean;
  tilted?: boolean;
}

const MODE_RING_ICON: Record<FeatureModeId, React.ReactNode> = {
  gateway: <SlidersHorizontal className="size-7 text-white" aria-hidden="true" />,
  awareness: <CarFront className="size-8 text-white" aria-hidden="true" />,
  drowsiness: <MoonStar className="size-7 text-white" aria-hidden="true" />,
  feedback: <Bell className="size-7 text-white" aria-hidden="true" />,
};

export function IphonePreview({
  mode,
  previewLabel,
  compact = false,
  tilted = false,
}: IphonePreviewProps) {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Realistic Hardware Frame */}
      <div
        className={`relative w-full ${
          compact ? "max-w-[292px]" : "max-w-[320px] sm:max-w-[336px]"
        } rounded-[46px] border border-white/15 bg-[#141A24] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.75)] transition-transform duration-300 ${
          tilted ? "lg:rotate-[2.5deg] hover:lg:rotate-0" : ""
        }`}
      >
        {/* Side Hardware Buttons */}
        <div
          aria-hidden="true"
          className="absolute -left-[3px] top-24 h-8 w-[3px] rounded-l-sm bg-white/20"
        />
        <div
          aria-hidden="true"
          className="absolute -left-[3px] top-36 h-12 w-[3px] rounded-l-sm bg-white/20"
        />
        <div
          aria-hidden="true"
          className="absolute -right-[3px] top-32 h-16 w-[3px] rounded-r-sm bg-white/20"
        />

        {/* Inner iPhone Screen */}
        <div className="relative flex aspect-[9/19.2] w-full flex-col justify-between overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-b from-[#070B12] via-[#05080F] to-[#04060A]">
          {/* Subtle Top Ambient Radial Highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_50%_15%,rgba(0,229,255,0.12),transparent_70%)]"
          />

          {/* Top Status Bar & App Header */}
          <div className="relative z-10 px-5 pt-3.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-white">
              <span className="font-mono tabular-nums">9:41</span>
              <div
                aria-hidden="true"
                className="h-[22px] w-[86px] rounded-full bg-black ring-1 ring-white/12"
              />
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/90">
                <span>5G</span>
                <span className="inline-block h-2.5 w-4 rounded-[3px] border border-white/60 p-[1px]">
                  <span className="block h-full w-3/4 rounded-[1px] bg-white" />
                </span>
              </div>
            </div>

            {/* App Brand Lockup matching Mock-up */}
            <div className="mt-4 flex flex-col items-center text-center">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.ibb.co/b5xrr612/Chat-GPT-Image-Jun-9-2026-07-07-30-PM.png"
                  alt=""
                  width={22}
                  height={22}
                  decoding="async"
                  className="size-5 rounded object-contain"
                />
                <span className="font-display text-sm font-bold tracking-tight text-white">
                  Astrateq <span className="text-[#00E5FF]">Gadgets</span>
                </span>
              </div>
              <p className="mt-1.5 font-mono text-[10px] tracking-wider text-[#9299A5] uppercase">
                {mode.statusLabel}
              </p>
            </div>
          </div>

          {/* Center Circular Gauge inspired by Mock-up */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-3">
            {mode.id === "gateway" ? (
              <div className="w-full space-y-2.5 rounded-2xl border border-white/12 bg-[#0B0F19] p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-wider text-[#00E5FF] uppercase">
                    Driver Gateway
                  </span>
                  <span className="font-mono text-[10px] text-[#9299A5]">Pre-Drive</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between gap-2 py-1">
                  <span className="text-xs font-medium text-white">Mount Alignment</span>
                  <span className="font-mono text-[11px] text-[#00E5FF]">Check View</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-1">
                  <span className="text-xs font-medium text-white">On-Device Evaluation</span>
                  <span className="font-mono text-[11px] text-[#9299A5]">Active on Session</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-1">
                  <span className="text-xs font-medium text-white">Optional Sync</span>
                  <span className="font-mono text-[11px] text-[#9299A5]">User Opt-In</span>
                </div>
              </div>
            ) : (
              <div className="relative flex size-44 items-center justify-center rounded-full border-[5px] border-[#00E5FF]/85 bg-[#0B0F19]/80 shadow-[0_0_28px_rgba(0,229,255,0.16)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 rounded-full border border-[#00E5FF]/25"
                />
                <div className="flex flex-col items-center px-4 text-center">
                  <div className="mb-1.5">{MODE_RING_ICON[mode.id]}</div>
                  <p className="font-display text-sm font-bold text-white">{mode.ringTitle}</p>
                  <p className="mt-0.5 font-mono text-[11px] font-medium text-[#00E5FF]">
                    {mode.ringSubtitle}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Two Stacked Cards matching Mock-up */}
          <div className="relative z-10 px-4 pb-3">
            <div className="space-y-2">
              {mode.indicators.map((item, idx) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B0F19] px-3.5 py-2.5"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-[#00E5FF]/25 bg-[#141A24]">
                    {idx === 0 ? (
                      <Eye className="size-4 text-[#00E5FF]" aria-hidden="true" />
                    ) : (
                      <Shield className="size-4 text-[#00E5FF]" aria-hidden="true" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-xs font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="truncate font-mono text-[10px] text-[#9299A5]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* iOS Home Indicator */}
            <div className="mt-3 flex justify-center">
              <div aria-hidden="true" className="h-1 w-28 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Explicit Simulation Label */}
      <p className="mt-3 text-center font-mono text-[11px] tracking-wide text-[#9299A5]">
        {previewLabel}
      </p>
    </div>
  );
}
