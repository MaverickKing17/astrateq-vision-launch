import privacyImg from "@/assets/images/privacy_phone_dashcam_1787859072246.jpg";
import winterImg from "@/assets/images/winter_glare_vision_1787859083155.jpg";
import hardwareImg from "@/assets/images/hardware_ecosystem_mesh_1787859093853.jpg";
import { Eye, Lock } from "lucide-react";

/**
 * Card 1: On-Device Neural Phone Schematic with Photographic Visual
 */
export function PrivacyNeuralSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-2xl border border-[#334155] bg-[#0F172A]/95 p-3.5 shadow-[inset_0_0_20px_rgba(0,240,255,0.06)]">
      {/* Top Status Bar */}
      <div className="relative mb-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
          <span className="font-bold tracking-wide text-[#00F0FF]">AIR-GAPPED NPU</span>
        </div>
        <span className="rounded-md border border-[#00F0FF]/40 bg-[#1E293B]/90 px-2 py-0.5 font-bold text-[#38BDF8] shadow-[0_0_8px_rgba(0,240,255,0.15)]">
          0 B/s EXTERNAL
        </span>
      </div>

      {/* Image Container with HUD Overlays */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]">
        <img
          src={privacyImg}
          alt="On-device AI privacy dashcam smartphone"
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Subtle Vignette & Tech HUD Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/30" />

        {/* Central Privacy Lock Watermark on Phone */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center rounded-xl border border-[#00F0FF]/60 bg-[#0F172A]/85 px-3 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.35)]">
            <Lock className="size-4 text-[#00F0FF] animate-pulse" />
            <span className="mt-0.5 text-[9px] font-mono font-bold tracking-wider text-[#FFFFFF]">
              Privacy Lock
            </span>
          </div>
        </div>

        {/* Corner HUD Reticles */}
        <div className="pointer-events-none absolute top-2 left-2 size-3 border-t-2 border-l-2 border-[#00F0FF]/70" />
        <div className="pointer-events-none absolute top-2 right-2 size-3 border-t-2 border-r-2 border-[#00F0FF]/70" />
        <div className="pointer-events-none absolute bottom-2 left-2 size-3 border-b-2 border-l-2 border-[#00F0FF]/70" />
        <div className="pointer-events-none absolute bottom-2 right-2 size-3 border-b-2 border-r-2 border-[#00F0FF]/70" />
      </div>

      {/* Bottom Guarantee Bar */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] px-1 pt-2 text-[11px]">
        <span className="font-medium text-[#E2E8F0]">Memory Isolation:</span>
        <span className="font-mono font-bold text-[#00F0FF]">100% Enclave Secured</span>
      </div>
    </div>
  );
}

/**
 * Card 2: Canadian Climate & Harsh Glare Vision with Photographic Visual
 */
export function WinterVisionSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-2xl border border-[#334155] bg-[#0F172A]/95 p-3.5 shadow-[inset_0_0_20px_rgba(0,240,255,0.06)]">
      {/* Top Status Bar */}
      <div className="relative mb-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B] animate-pulse" />
          <span className="font-bold tracking-wide text-[#F8FAFC]">GLARE COMPENSATOR</span>
        </div>
        <span className="rounded-md border border-amber-500/40 bg-[#1E293B]/90 px-2 py-0.5 font-bold text-amber-300 shadow-[0_0_8px_rgba(245,158,11,0.15)]">
          -78% SNOW BLOOM
        </span>
      </div>

      {/* Image Container with HUD Overlays */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]">
        <img
          src={winterImg}
          alt="Snow glare road vision with computer vision HUD"
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient for Legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/30" />

        {/* HUD Inset 1: Driver Gaze & Fatigue Tracker (Top-Left) */}
        <div className="pointer-events-none absolute top-2 left-2 rounded-lg border border-[#00F0FF]/50 bg-[#0F172A]/85 p-1.5 backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.2)]">
          <div className="flex items-center gap-1">
            <Eye className="size-3 text-[#00F0FF]" />
            <span className="text-[8px] font-mono font-bold text-[#FFFFFF]">
              DRIVER GAZE: FORWARD
            </span>
          </div>
          <div className="mt-0.5 text-[8px] font-mono text-[#E2E8F0]">
            Fatigue: <strong className="text-emerald-400">0.02 (Nominal)</strong>
          </div>
        </div>

        {/* HUD Inset 2: Lead Vehicle Tracking Box (Center Horizon) */}
        <div className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="rounded border border-amber-400/60 bg-[#0F172A]/85 px-1.5 py-0.2 text-[8px] font-mono font-semibold text-amber-300 backdrop-blur-sm">
            LEAD VEHICLE · 38m
          </span>
          <div className="mt-1 h-12 w-16 rounded border-2 border-[#00F0FF] shadow-[0_0_12px_#00F0FF] animate-reticle" />
        </div>

        {/* HUD Inset 3: Latency Metric (Bottom-Right) */}
        <div className="pointer-events-none absolute bottom-2 right-2 rounded border border-[#00F0FF]/50 bg-[#0F172A]/85 px-2 py-0.5 text-[8px] font-mono font-bold text-[#00F0FF] backdrop-blur-md">
          Latency: 24 ms
        </div>
      </div>

      {/* Bottom Guarantee Bar */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] px-1 pt-2 text-[11px]">
        <span className="font-medium text-[#E2E8F0]">Sub-Zero Optic Profile:</span>
        <span className="font-mono font-bold text-[#00F0FF]">Calibrated to -40°C</span>
      </div>
    </div>
  );
}

/**
 * Card 3: Connected Ecosystem & Hardware Mesh with Photographic Visual
 */
export function EcosystemMeshSchematic() {
  return (
    <div className="relative my-4 overflow-hidden rounded-2xl border border-[#334155] bg-[#0F172A]/95 p-3.5 shadow-[inset_0_0_20px_rgba(0,240,255,0.06)]">
      {/* Top Status Bar */}
      <div className="relative mb-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-[#E2E8F0]">
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_#00F0FF] animate-pulse" />
          <span className="font-bold tracking-wide text-[#00F0FF]">MESH PROTOCOL</span>
        </div>
        <span className="rounded-md border border-[#00F0FF]/40 bg-[#1E293B]/90 px-2 py-0.5 font-bold text-[#38BDF8] shadow-[0_0_8px_rgba(0,240,255,0.15)]">
          PHASE 1 ➔ PHASE 2
        </span>
      </div>

      {/* Image Container with Mesh Network Overlay */}
      <div className="relative h-48 w-full overflow-hidden rounded-xl border border-[#334155] bg-[#0F172A]">
        <img
          src={hardwareImg}
          alt="Connected hardware ecosystem NPU dashcam and sensors"
          className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Overlay for Depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-black/30" />

        {/* Dynamic Glowing Mesh Lines SVG Overlay */}
        <svg viewBox="0 0 240 160" className="pointer-events-none absolute inset-0 h-full w-full">
          {/* Geometric connection mesh between smartphone and hardware */}
          <line
            x1="120"
            y1="80"
            x2="45"
            y2="40"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeDasharray="4 2"
          />
          <line
            x1="120"
            y1="80"
            x2="195"
            y2="45"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeDasharray="4 2"
          />
          <line
            x1="120"
            y1="80"
            x2="40"
            y2="125"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeDasharray="4 2"
          />
          <line
            x1="120"
            y1="80"
            x2="195"
            y2="125"
            stroke="#00F0FF"
            strokeWidth="1.5"
            strokeOpacity="0.8"
            strokeDasharray="4 2"
          />
          <line
            x1="45"
            y1="40"
            x2="195"
            y2="45"
            stroke="#00F0FF"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <line
            x1="40"
            y1="125"
            x2="195"
            y2="125"
            stroke="#00F0FF"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Glowing Mesh Nodes */}
          <circle cx="120" cy="80" r="5" fill="#00F0FF" className="animate-pulse" />
          <circle cx="45" cy="40" r="3.5" fill="#00F0FF" />
          <circle cx="195" cy="45" r="3.5" fill="#00F0FF" />
          <circle cx="40" cy="125" r="3.5" fill="#00F0FF" />
          <circle cx="195" cy="125" r="3.5" fill="#00F0FF" />
        </svg>
      </div>

      {/* Bottom Guarantee Bar */}
      <div className="relative mt-3 flex items-center justify-between border-t border-[#334155] px-1 pt-2 text-[11px]">
        <span className="font-medium text-[#E2E8F0]">Interoperability:</span>
        <span className="font-mono font-bold text-[#00F0FF]">Seamless BLE Mesh</span>
      </div>
    </div>
  );
}
