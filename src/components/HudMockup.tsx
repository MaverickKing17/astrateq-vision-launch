import { useEffect, useState } from "react";

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
    <div className="glass-card relative overflow-hidden rounded-2xl p-3 sm:p-4">
      <div className="flex items-center justify-between gap-3 px-1 pb-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="animate-dot size-1.5 shrink-0 rounded-full bg-primary" />
          <span className="label-mono truncate text-[#E2E8F0]">
            Live edge inference · on-device
          </span>
        </div>
        <span className="label-mono shrink-0 font-bold text-[#00F0FF]">28 ms</span>
      </div>

      <div className="tech-grid relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-[#1E293B]/60">
        <svg viewBox="0 0 320 200" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.05" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.22" />
            </linearGradient>
          </defs>
          <g className="text-foreground">
            <path d="M0 200 L130 96 L190 96 L320 200 Z" fill="url(#road)" />
            <path d="M130 96 L190 96" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1" />
            <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
              <path d="M160 104 L160 118" />
              <path d="M160 132 L160 152" />
              <path d="M160 168 L160 200" />
            </g>
          </g>
          <g className="text-primary" stroke="currentColor" fill="none" strokeWidth="1.25">
            <rect x="118" y="82" width="46" height="34" rx="2" strokeOpacity="0.9" />
            <rect x="196" y="88" width="58" height="40" rx="2" strokeOpacity="0.55" />
            <line x1="141" y1="99" x2="141" y2="99" />
            <path d="M118 82 h8 M156 82 h8 M118 116 h8 M156 116 h8" strokeWidth="2" />
          </g>
          <g className="text-primary">
            <circle cx="141" cy="99" r="2" fill="currentColor" />
            <circle cx="225" cy="108" r="2" fill="currentColor" fillOpacity="0.5" />
          </g>
        </svg>

        <div className="animate-scan pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-primary/15 to-transparent" />

        <div className="absolute left-3 top-3 rounded-md border border-primary/40 bg-[#0F172A]/85 px-2 py-1">
          <span className="label-mono font-bold text-primary">Vehicle · 32 m</span>
        </div>

        <div className="absolute inset-x-3 bottom-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Metric label="Gaze focus" value={`${Math.round(gaze.value * 100)}%`} note={gaze.label} />
          <Metric label="Cabin temp" value={`${temp}°C`} note="Cold-weather profile" />
          <Metric
            label="Snow glare"
            value={`${glare}%`}
            note="Exposure compensated"
            className="col-span-2 sm:col-span-1"
          />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 px-1">
        <span className="truncate text-xs font-medium text-[#E2E8F0]">{gaze.note}</span>
        <span className="label-mono shrink-0 font-bold text-primary">0 KB uploaded</span>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  note,
  className = "",
}: {
  label: string;
  value: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-border bg-[#0F172A]/85 px-2.5 py-2 backdrop-blur-sm ${className}`}
    >
      <p className="label-mono truncate text-[#E2E8F0]">{label}</p>
      <p className="mt-0.5 font-display text-lg font-bold leading-none text-primary transition-all duration-500">
        {value}
      </p>
      <p className="mt-1 truncate text-[10px] font-medium text-[#F8FAFC]">{note}</p>
    </div>
  );
}
