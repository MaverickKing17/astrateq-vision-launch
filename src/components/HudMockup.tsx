import { useEffect, useState } from "react";
import heroImg from "@/assets/images/hero_dashcam_cockpit_1787859268203.jpg";
import { Eye, ShieldCheck, Zap, Thermometer, SunDim } from "lucide-react";

const GAZE_STATES = [
  { label: "Eyes on road", value: 0.94, note: "Attention nominal" },
  { label: "Gaze drift left", value: 0.71, note: "Mirror check detected" },
  { label: "Blink rate rising", value: 0.58, note: "Early fatigue signal" },
  { label: "Eyes on road", value: 0.89, note: "Attention recovered" },
];

export function HudMockup() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);

  const gaze = GAZE_STATES[tick % GAZE_STATES.length]!;
  const glare = 38 + ((tick * 13) % 42);
  const temp = -14 + ((tick * 3) % 7);

  return (
    <div className="glass-card relative overflow-hidden rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 p-3.5 shadow-[0_0_40px_rgba(0,240,255,0.12)] backdrop-blur-md sm:p-4.5">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="animate-dot size-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_#00F0FF]" />
          <span className="label-mono truncate font-bold text-[#00F0FF] text-glow-cyan">
            Live edge inference · on-device
          </span>
        </div>
        <span className="label-mono shrink-0 font-bold text-[#00F0FF] text-glow-cyan">28 ms</span>
      </div>

      {/* Cinematic Photorealistic Hero Viewport Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#1E293B] bg-[#0A0E17] shadow-[inset_0_0_24px_rgba(0,0,0,0.6)]">
        <img
          src={heroImg}
          alt="Astrateq on-device smart dashcam driver perspective in winter"
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient & Vignette for Visual Cohesion */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-black/35" />

        {/* Subtle Tech Grid / Scan Beam Overlay */}
        <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[#00F0FF]/15 to-transparent" />

        {/* Top-Left Live Tracking Tag */}
        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-1.5 rounded-lg border border-[#00F0FF]/50 bg-[#0F172A]/85 px-2.5 py-1 backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.25)]">
          <span className="size-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="label-mono font-bold text-[#00F0FF]">Forward Roadway · Active</span>
        </div>

        {/* Top-Right Air-Gapped Seal */}
        <div className="pointer-events-none absolute right-3 top-3 hidden items-center gap-1 rounded-lg border border-[#334155] bg-[#0F172A]/80 px-2 py-1 backdrop-blur-sm sm:flex">
          <ShieldCheck className="size-3.5 text-[#00F0FF]" />
          <span className="text-[10px] font-mono font-semibold text-[#E2E8F0]">NPU Enclave</span>
        </div>

        {/* Floating Telemetry Metric Cards over Lower Viewport */}
        <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Metric
            icon={<Eye className="size-3.5 text-[#00F0FF]" />}
            label="Gaze focus"
            value={`${Math.round(gaze.value * 100)}%`}
            note={gaze.label}
          />
          <Metric
            icon={<Thermometer className="size-3.5 text-[#00F0FF]" />}
            label="Cabin temp"
            value={`${temp}°C`}
            note="Cold-weather profile"
          />
          <Metric
            icon={<SunDim className="size-3.5 text-amber-400" />}
            label="Snow glare"
            value={`${glare}%`}
            note="HDR compensated"
            className="col-span-2 sm:col-span-1"
          />
        </div>
      </div>

      {/* Bottom Footer Status Bar */}
      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-1.5 truncate">
          <Zap className="size-3.5 shrink-0 text-[#00F0FF]" />
          <span className="truncate text-xs font-semibold text-[#F8FAFC]">{gaze.note}</span>
        </div>
        <span className="label-mono shrink-0 font-bold text-[#00F0FF]">0 KB uploaded</span>
      </div>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  note,
  className = "",
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[rgba(0,240,255,0.25)] bg-[#1E293B]/90 p-2.5 backdrop-blur-md shadow-[0_0_14px_rgba(0,240,255,0.08)] transition-all duration-300 ${className}`}
    >
      <div className="flex items-center justify-between gap-1">
        <p className="label-mono truncate text-[11px] text-[#E2E8F0]">{label}</p>
        {icon}
      </div>
      <p className="mt-1 font-display text-lg font-bold leading-none text-[#00F0FF] transition-all duration-500">
        {value}
      </p>
      <p className="mt-1 truncate text-[10px] font-medium text-[#F8FAFC]">{note}</p>
    </div>
  );
}
