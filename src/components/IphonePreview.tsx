import { useState } from "react";
import { Eye, Shield, Compass, SlidersHorizontal, Volume2 } from "lucide-react";
import cockpitTwilightImg from "@/assets/images/astrateq_cockpit_twilight_1794939876479.jpg";
import winterHighwayImg from "@/assets/images/astrateq_winter_highway_1794939877107.jpg";
import type { FeatureMode, FeatureModeId } from "@/lib/i18n";

interface IphonePreviewProps {
  mode: FeatureMode;
  previewLabel: string;
  compact?: boolean;
  priority?: boolean;
}

const MODE_ICON: Record<FeatureModeId, React.ReactNode> = {
  awareness: <Eye className="size-4 text-[#00E5FF]" aria-hidden="true" />,
  drowsiness: <Volume2 className="size-4 text-[#00E5FF]" aria-hidden="true" />,
  distraction: <Compass className="size-4 text-[#00E5FF]" aria-hidden="true" />,
  gateway: <SlidersHorizontal className="size-4 text-[#00E5FF]" aria-hidden="true" />,
};

export function IphonePreview({
  mode,
  previewLabel,
  compact = false,
  priority = false,
}: IphonePreviewProps) {
  const [imgError, setImgError] = useState(false);

  const backdropSrc =
    mode.id === "drowsiness" || mode.id === "distraction" ? winterHighwayImg : cockpitTwilightImg;

  return (
    <div className="flex w-full flex-col items-center">
      {/* Hardware Bezel */}
      <div
        className={`relative w-full ${
          compact ? "max-w-[296px]" : "max-w-[324px]"
        } rounded-[44px] border border-white/15 bg-[#141A24] p-3 shadow-[0_24px_64px_rgba(0,0,0,0.75)]`}
      >
        {/* Subtle Hardware Side Buttons */}
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
        <div className="relative flex aspect-[9/19.2] w-full flex-col justify-between overflow-hidden rounded-[34px] border border-white/10 bg-[#050505]">
          {/* Background Imagery with Zero-Broken-Image Fallback */}
          {!imgError ? (
            <img
              src={backdropSrc}
              alt={`${mode.tabLabel} concept preview backdrop inside a Canadian vehicle cabin`}
              onError={() => setImgError(true)}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={priority ? "high" : "auto"}
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#050505] to-[#0B0F19]"
            />
          )}

          {/* Measured Contrast Scrim */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/55 to-[#050505]/95"
          />

          {/* Top iOS Status Bar + Dynamic Island */}
          <div className="relative z-10 px-5 pt-3.5">
            <div className="flex items-center justify-between text-[11px] font-semibold text-white">
              <span className="font-mono tabular-nums">9:41</span>
              <div
                aria-hidden="true"
                className="h-[22px] w-[84px] rounded-full bg-black ring-1 ring-white/10"
              />
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-white/90">
                <span>5G</span>
                <span className="inline-block h-2.5 w-4 rounded-[3px] border border-white/60 p-[1px]">
                  <span className="block h-full w-3/4 rounded-[1px] bg-white" />
                </span>
              </div>
            </div>

            {/* App Header */}
            <div className="mt-5 flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <p className="font-mono text-[10px] tracking-wider text-[#00E5FF] uppercase">
                  Astrateq Gadgets
                </p>
                <p className="mt-0.5 font-display text-sm font-semibold text-white">
                  {mode.screenSubheading}
                </p>
              </div>
              <div className="flex size-8 items-center justify-center rounded-lg border border-white/10 bg-[#0B0F19]/90">
                {MODE_ICON[mode.id]}
              </div>
            </div>
          </div>

          {/* Center Visual Framing */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-4">
            {mode.id === "gateway" ? (
              <div className="space-y-2.5 rounded-2xl border border-white/12 bg-[#0B0F19]/90 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white">Mount Alignment</span>
                  <span className="font-mono text-[11px] text-[#00E5FF]">Pre-Drive Check</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white">Audio Prompt</span>
                  <span className="font-mono text-[11px] text-[#9299A5]">Configurable</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-white">Optional Sync</span>
                  <span className="font-mono text-[11px] text-[#9299A5]">Opt-In Only</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                {/* Clean Geometric Reticle Frame */}
                <div className="relative flex h-32 w-44 items-center justify-center rounded-2xl border border-white/15 bg-[#0B0F19]/60 backdrop-blur-sm">
                  <div
                    aria-hidden="true"
                    className="absolute top-2.5 left-2.5 size-3 border-t-2 border-l-2 border-[#00E5FF]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute top-2.5 right-2.5 size-3 border-t-2 border-r-2 border-[#00E5FF]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-2.5 left-2.5 size-3 border-b-2 border-l-2 border-[#00E5FF]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute bottom-2.5 right-2.5 size-3 border-b-2 border-r-2 border-[#00E5FF]"
                  />

                  <div className="px-4 text-center">
                    <p className="font-mono text-[10px] tracking-wider text-[#00E5FF] uppercase">
                      {mode.screenHeading}
                    </p>
                    <p className="mt-1.5 text-xs font-medium text-white">{mode.statusLabel}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Telemetry / Status Sheet */}
          <div className="relative z-10 px-4 pb-3">
            <div className="rounded-2xl border border-white/10 bg-[#0B0F19]/92 p-3.5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#9299A5]">
                  <Shield className="size-3.5 text-[#00E5FF]" aria-hidden="true" />
                  <span>Concept: On-device flow</span>
                </div>
                <span className="font-mono text-[10px] text-white/70">iOS</span>
              </div>

              <div className="mt-2.5 grid grid-cols-3 gap-2">
                {mode.indicators.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="truncate text-[10px] text-[#9299A5]">{item.label}</p>
                    <p className="mt-0.5 truncate font-mono text-[11px] font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* iOS Home Indicator */}
            <div className="mt-3 flex justify-center">
              <div aria-hidden="true" className="h-1 w-28 rounded-full bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Explicit Interface Concept Caption */}
      <p className="mt-3 text-center font-mono text-[11px] tracking-wide text-[#9299A5]">
        {previewLabel}
      </p>
    </div>
  );
}
