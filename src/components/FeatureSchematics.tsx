import {
  Shield,
  Cpu,
  Snowflake,
  ScanEye,
  Network,
  Share2,
  Radio,
  Gauge,
  Video,
  Eye,
  Zap,
} from "lucide-react";

/**
 * Card 1: On-Device Neural Phone Schematic
 */
export function PrivacyNeuralSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]/90 p-4 shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
      {/* Background HUD Grid */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00F0FF 1px, transparent 1px), linear-gradient(to bottom, #00F0FF 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top Status Bar */}
      <div className="relative flex items-center justify-between text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-[#00F0FF] font-semibold">AIR-GAPPED NPU</span>
        </div>
        <span className="rounded bg-[#1E293B] px-1.5 py-0.5 text-[#38BDF8] border border-[#00F0FF]/30">
          0 B/s EXTERNAL
        </span>
      </div>

      {/* Phone Silhouette & Internal Neural Engine */}
      <div className="relative mt-3 flex items-center justify-center">
        {/* Smartphone Frame */}
        <div className="relative h-44 w-full max-w-[210px] rounded-2xl border-2 border-[#00F0FF]/40 bg-[#1E293B] p-2.5 shadow-[0_0_24px_rgba(0,240,255,0.15)]">
          {/* Speaker / Camera Notch */}
          <div className="mx-auto h-1.5 w-12 rounded-full bg-[#0F172A]" />

          {/* Windshield Viewport / Camera Input Inset */}
          <div className="relative mt-2 h-14 overflow-hidden rounded-lg border border-[#334155] bg-[#0F172A]">
            <svg viewBox="0 0 160 56" className="h-full w-full opacity-60">
              <path d="M20 56 L65 24 L95 24 L140 56" stroke="#334155" strokeWidth="1" fill="none" />
              <line
                x1="80"
                y1="24"
                x2="80"
                y2="56"
                stroke="#00F0FF"
                strokeDasharray="3 3"
                strokeWidth="1"
              />
              <rect
                x="70"
                y="28"
                width="20"
                height="14"
                rx="2"
                stroke="#00F0FF"
                fill="none"
                strokeWidth="1"
              />
            </svg>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A] to-transparent py-0.5 text-center">
              <span className="text-[8px] font-mono text-[#94A3B8]">RAW CAMERA FEED</span>
            </div>
          </div>

          {/* Inward Data Flow Arrows */}
          <div className="my-1 flex justify-center">
            <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-[#00F0FF]">
              <span>▼</span>
              <span className="text-[8px] tracking-widest text-[#E2E8F0]">LOCAL BUS</span>
              <span>▼</span>
            </div>
          </div>

          {/* Central NPU Silicon Chip (Termination Node) */}
          <div className="relative rounded-lg border border-[#00F0FF] bg-[#0F172A] p-2 text-center shadow-[0_0_16px_rgba(0,240,255,0.3)]">
            <div className="flex items-center justify-center gap-1.5">
              <Cpu className="size-3.5 text-[#00F0FF] animate-pulse" />
              <span className="font-display text-[10px] font-bold tracking-wider text-[#FFFFFF]">
                NEURAL ENGINE CORE
              </span>
            </div>
            <p className="mt-0.5 text-[8px] font-mono text-[#38BDF8]">
              Locked in Volatile RAM • Instant Purge
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Guarantee Badge */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] pt-2 text-[10px]">
        <span className="text-[#E2E8F0] font-medium">Memory Isolation:</span>
        <span className="font-mono font-semibold text-[#00F0FF]">100% Enclave Secured</span>
      </div>
    </div>
  );
}

/**
 * Card 2: Canadian Climate & Harsh Glare Vision Schematic
 */
export function WinterVisionSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]/90 p-4 shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
      {/* Top Telemetry Header */}
      <div className="relative flex items-center justify-between text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[#F8FAFC] font-semibold">GLARE COMPENSATOR</span>
        </div>
        <span className="rounded bg-[#1E293B] px-1.5 py-0.5 text-amber-300 border border-amber-500/30">
          -78% SNOW BLOOM
        </span>
      </div>

      {/* Winter Road Scene with HUD Tracking Overlay */}
      <div className="relative mt-3 h-44 overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]">
        {/* Synthetic Winter Road Perspective */}
        <svg viewBox="0 0 240 140" className="absolute inset-0 h-full w-full">
          <defs>
            {/* Harsh Sun / Snow Glare Spot */}
            <radialGradient id="glareSpot" cx="80%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            {/* Road Gradient */}
            <linearGradient id="winterRoad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0B132B" />
            </linearGradient>
          </defs>

          {/* Glare Halo */}
          <rect width="240" height="140" fill="url(#glareSpot)" />

          {/* Road Perspective */}
          <path
            d="M40 140 L105 60 L135 60 L200 140 Z"
            fill="url(#winterRoad)"
            stroke="#334155"
            strokeWidth="1"
          />
          {/* Lane Markers */}
          <line
            x1="120"
            y1="60"
            x2="120"
            y2="140"
            stroke="#00F0FF"
            strokeDasharray="6 6"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Hazard Reticle 1: Vehicle in Blizzard */}
          <rect
            x="108"
            y="70"
            width="24"
            height="18"
            rx="2"
            stroke="#00F0FF"
            strokeWidth="1.5"
            fill="none"
          />
          <line x1="120" y1="66" x2="120" y2="70" stroke="#00F0FF" strokeWidth="1" />

          {/* Hazard Reticle 2: Black Ice Warning Area */}
          <ellipse
            cx="85"
            cy="115"
            rx="25"
            ry="8"
            stroke="#38BDF8"
            strokeDasharray="3 3"
            strokeWidth="1"
            fill="rgba(56, 189, 248, 0.1)"
          />
        </svg>

        {/* HUD Inset: Driver Fatigue / Gaze Vector Tracker */}
        <div className="absolute top-2 left-2 rounded-lg border border-[#00F0FF]/40 bg-[#0F172A]/90 p-1.5 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <Eye className="size-3 text-[#00F0FF]" />
            <span className="text-[9px] font-mono font-bold text-[#FFFFFF]">
              DRIVER GAZE: FORWARD
            </span>
          </div>
          <div className="mt-1 flex items-center justify-between gap-2 text-[8px] font-mono text-[#E2E8F0]">
            <span>
              Fatigue: <strong className="text-emerald-400">0.02 (Nominal)</strong>
            </span>
          </div>
        </div>

        {/* HUD Tag: Road Target */}
        <div className="absolute top-2 right-2 rounded border border-amber-400/40 bg-[#0F172A]/85 px-1.5 py-0.5 text-[8px] font-mono text-amber-300">
          LEAD VEHICLE · 38m
        </div>

        {/* Bottom Banner inside graphic */}
        <div className="absolute inset-x-2 bottom-2 flex items-center justify-between rounded bg-[#1E293B]/85 px-2 py-1 text-[8px] font-mono text-[#E2E8F0] border border-[#334155]">
          <span className="text-[#38BDF8]">Exposure HDR: Active</span>
          <span className="text-[#00F0FF]">Latency: 24 ms</span>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] pt-2 text-[10px]">
        <span className="text-[#E2E8F0] font-medium">Sub-Zero Optic Profile:</span>
        <span className="font-mono font-semibold text-[#00F0FF]">Calibrated to -40°C</span>
      </div>
    </div>
  );
}

/**
 * Card 3: Connected Ecosystem & Hardware Mesh Schematic
 */
export function EcosystemMeshSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]/90 p-4 shadow-[inset_0_0_20px_rgba(0,240,255,0.05)]">
      {/* Top Status */}
      <div className="relative flex items-center justify-between text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-[#00F0FF] font-semibold">MESH PROTOCOL</span>
        </div>
        <span className="rounded bg-[#1E293B] px-1.5 py-0.5 text-[#38BDF8] border border-[#00F0FF]/30">
          PHASE 1 ➔ PHASE 2
        </span>
      </div>

      {/* Interactive Tech Mesh Graph */}
      <div className="relative mt-3 h-44 rounded-xl border border-[#334155] bg-[#0F172A] p-2 flex flex-col justify-between">
        {/* Mesh Background Graphic */}
        <svg viewBox="0 0 240 130" className="absolute inset-0 h-full w-full">
          {/* Connection Lines from Center Hub to Peripherals */}
          <line
            x1="120"
            y1="40"
            x2="45"
            y2="100"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="120"
            y1="40"
            x2="120"
            y2="105"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <line
            x1="120"
            y1="40"
            x2="195"
            y2="100"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          {/* Pulse Signal Circles */}
          <circle
            cx="120"
            cy="40"
            r="26"
            stroke="#00F0FF"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
          />
          <circle
            cx="120"
            cy="40"
            r="18"
            stroke="#00F0FF"
            strokeWidth="1"
            fill="rgba(0, 240, 255, 0.08)"
          />
        </svg>

        {/* Center Node: Smartphone App (Phase 1 Hub) */}
        <div className="relative mx-auto mt-1 flex flex-col items-center">
          <div className="flex size-9 items-center justify-center rounded-xl border border-[#00F0FF] bg-[#1E293B] shadow-[0_0_14px_rgba(0,240,255,0.35)]">
            <Radio className="size-4 text-[#00F0FF] animate-pulse" />
          </div>
          <span className="mt-1 rounded bg-[#0F172A] px-1.5 py-0.2 text-[8px] font-mono font-bold text-[#FFFFFF] border border-[#00F0FF]/30">
            Astrateq Hub (Phone)
          </span>
        </div>

        {/* 3 Peripheral Nodes (Phase 2 Hardware) */}
        <div className="relative z-10 grid grid-cols-3 gap-2 text-center pt-2">
          {/* Peripheral 1: NPU Dashcam */}
          <div className="flex flex-col items-center rounded-lg border border-[#334155] bg-[#1E293B]/90 p-1.5 hover:border-[#00F0FF] transition-colors">
            <Video className="size-3.5 text-[#00F0FF]" />
            <span className="mt-1 text-[8px] font-bold text-[#FFFFFF]">4K NPU Cam</span>
            <span className="text-[7px] font-mono text-[#94A3B8]">Dual Sensor</span>
          </div>

          {/* Peripheral 2: OBD-II Diagnostics */}
          <div className="flex flex-col items-center rounded-lg border border-[#334155] bg-[#1E293B]/90 p-1.5 hover:border-[#00F0FF] transition-colors">
            <Gauge className="size-3.5 text-[#00F0FF]" />
            <span className="mt-1 text-[8px] font-bold text-[#FFFFFF]">OBD-II Port</span>
            <span className="text-[7px] font-mono text-[#94A3B8]">CAN Telemetry</span>
          </div>

          {/* Peripheral 3: Winter TPMS */}
          <div className="flex flex-col items-center rounded-lg border border-[#334155] bg-[#1E293B]/90 p-1.5 hover:border-[#00F0FF] transition-colors">
            <Zap className="size-3.5 text-[#00F0FF]" />
            <span className="mt-1 text-[8px] font-bold text-[#FFFFFF]">Cold TPMS</span>
            <span className="text-[7px] font-mono text-[#94A3B8]">Tire Dynamics</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer Details */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] pt-2 text-[10px]">
        <span className="text-[#E2E8F0] font-medium">Interoperability:</span>
        <span className="font-mono font-semibold text-[#00F0FF]">Seamless BLE Mesh</span>
      </div>
    </div>
  );
}
