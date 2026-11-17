import { Smartphone, Cpu, Bell, Database, Mail } from "lucide-react";

export function PrivacyArchitectureDiagram() {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-[#0B0F19] p-6 sm:p-8"
      aria-label="Astrateq data handling architecture diagram"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <p className="font-display text-sm font-semibold text-white">
          Intended Data-Handling Architecture
        </p>
        <span className="font-mono text-xs text-[#9299A5]">Video vs. Metadata Separation</span>
      </div>

      <div className="mt-6 space-y-6">
        {/* Boundary 1: Local iPhone Processing */}
        <div className="rounded-xl border border-[#00E5FF]/30 bg-[#141A24] p-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#00E5FF] uppercase">
              On Your iPhone
            </span>
            <span className="text-xs text-[#9299A5]">Transient in-memory evaluation</span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Smartphone className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">1. Front Camera</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Captures active session frames only while monitoring is turned on.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Cpu className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">2. Local Evaluation</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Evaluates eye and gaze cues locally; frames are discarded after processing.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#0B0F19] p-3.5">
              <Bell className="size-4 text-[#00E5FF]" aria-hidden="true" />
              <p className="mt-2.5 text-sm font-semibold text-white">3. Awareness Cue</p>
              <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                Delivers visual or audible prompts directly on-device when thresholds trigger.
              </p>
            </div>
          </div>
        </div>

        {/* Boundary 2: Separated Optional / Website Flows */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-dashed border-white/15 bg-[#050505]/70 p-4">
            <div className="flex items-center gap-2">
              <Database className="size-4 text-[#9299A5]" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Optional Sync (Supabase)</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#9299A5]">
              Separated from the camera stream. If optional sync is enabled by the user, only
              non-video metadata (such as session summary counts) is transmitted. You can disable
              optional sync.
            </p>
          </div>

          <div className="rounded-xl border border-dashed border-white/15 bg-[#050505]/70 p-4">
            <div className="flex items-center gap-2">
              <Mail className="size-4 text-[#9299A5]" aria-hidden="true" />
              <p className="text-sm font-semibold text-white">Website Beta Waitlist</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[#9299A5]">
              Submitting your email on Astrateq.ai transmits only your email address to our waitlist
              notification service so we can contact you about beta access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
