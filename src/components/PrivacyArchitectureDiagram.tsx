import { Smartphone, Cpu, Bell, Database, Mail } from "lucide-react";

export function PrivacyArchitectureDiagram() {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-[#0B0F19] p-5 sm:p-8"
      aria-label="Astrateq Gadgets intended data handling and live website collection diagram"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <h3 className="font-display text-sm font-semibold text-white">
          Intended App vs. Website Data Flow
        </h3>
        <span className="font-mono text-xs text-[#9299A5]">Video vs. Metadata Separation</span>
      </div>

      <div className="mt-6 space-y-6">
        {/* Boundary 1: Proposed Local iPhone Processing */}
        <div className="rounded-xl border border-[#00E5FF]/30 bg-[#141A24] p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#00E5FF] uppercase">
              Proposed iOS Concept (On iPhone)
            </span>
            <span className="text-xs text-[#9299A5]">Intended in-memory evaluation</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Smartphone className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">1. Front Camera</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Active session frames evaluated only while monitoring is turned on.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Cpu className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">2. Local Evaluation</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Intended to assess eye and gaze cues locally and discard frames after processing.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Bell className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">3. Awareness Cue</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Surfaces on-device visual or audible prompts when configured thresholds trigger.
              </p>
            </div>
          </div>
        </div>

        {/* Boundary 2: Separated Optional / Website Flows */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-dashed border-white/15 bg-[#050505]/70 p-4">
            <div className="flex items-center gap-2">
              <Database className="size-4 text-[#9299A5]" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Optional Sync & Survey Storage</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#9299A5]">
              If optional Supabase sync is enabled in future builds, only non-video metadata syncs.
              On this website, anonymous survey answers store separately once Supabase is connected.
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-white/15 bg-[#050505]/70 p-4">
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-[#9299A5]" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Website Beta Updates</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#9299A5]">
              Optional beta registration collects only your email (plus optional first name and
              iPhone model) with explicit consent, strictly separate from the anonymous survey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
