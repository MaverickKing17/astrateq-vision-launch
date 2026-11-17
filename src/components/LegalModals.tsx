import { useEffect } from "react";
import { X, ShieldAlert, Lock, FileText, Headphones } from "lucide-react";

export type LegalModalType = "safety" | "privacy" | "terms" | "support" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const headingId = `legal-modal-title-${type}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#050505]/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0B0F19] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-[#141A24] px-6 py-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#00E5FF]/30 bg-[#00E5FF]/10 text-[#00E5FF]">
              {type === "safety" && <ShieldAlert className="size-5" aria-hidden="true" />}
              {type === "privacy" && <Lock className="size-5" aria-hidden="true" />}
              {type === "terms" && <FileText className="size-5" aria-hidden="true" />}
              {type === "support" && <Headphones className="size-5" aria-hidden="true" />}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-wider text-[#9299A5] uppercase">
                Pre-Launch Notice · Astrateq Gadgets
              </p>
              <h3
                id={headingId}
                className="truncate font-display text-base font-bold text-white sm:text-lg"
              >
                {type === "safety" && "Driver Safety & Operation Notice"}
                {type === "privacy" && "Research & Pre-Release Privacy Notice"}
                {type === "terms" && "Consumer Research & Beta Terms Summary"}
                {type === "support" && "Support & Research Inquiries"}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-[#0B0F19] text-white transition-colors hover:border-[#00E5FF] hover:text-[#00E5FF] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="space-y-5 overflow-y-auto px-6 py-6 text-sm leading-relaxed text-[#9299A5]">
          {type === "safety" && (
            <>
              <div className="rounded-xl border border-amber-400/30 bg-amber-950/30 p-4">
                <p className="font-semibold text-amber-200">Exploratory Awareness Concept Only</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-100/90">
                  Astrateq Gadgets is an early-stage driver-awareness concept currently in consumer
                  research and development. It is not an autonomous driving system, medical device,
                  or accident-prevention guarantee.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">1. Driver Responsibility</h4>
                <p>
                  The vehicle operator retains complete legal and operational responsibility for
                  safe driving at all times. You must maintain attentive visual awareness, safe
                  following distances, and full control of your vehicle regardless of app status.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  2. Canadian Road & Mounting Laws
                </h4>
                <p>
                  Drivers must comply with all federal, provincial, territorial, and state laws
                  governing hands-free mounting, windshield visibility, and distracted driving.
                  Mount any device securely before driving and avoid interacting with screens while
                  in motion.
                </p>
              </div>
            </>
          )}

          {type === "privacy" && (
            <>
              <div className="rounded-xl border border-[#00E5FF]/25 bg-[#141A24] p-4">
                <p className="font-semibold text-white">
                  Research & Pre-Release Data Handling Summary
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  This notice explains how information submitted on Astrateq.ai is used during our
                  consumer research phase, as well as the intended data design of the iOS concept.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  1. Consumer Market Research Survey
                </h4>
                <p>
                  Survey responses are collected anonymously without requiring your name or email
                  address. Responses are stored separately from beta-update registrations and used
                  solely to evaluate product feasibility, privacy expectations, and adoption
                  barriers.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  2. Optional Beta Update Registrations
                </h4>
                <p>
                  If you choose to register in the separate Beta Updates form, your email address
                  (and optional first name or iPhone model interest) is used only with your explicit
                  consent to send updates about Astrateq Gadgets availability or potential testing.
                  You may withdraw consent at any time.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  3. Proposed iOS Concept Camera Handling
                </h4>
                <p>
                  In the proposed iPhone application architecture, driver-facing camera frames are
                  intended to be evaluated locally on-device in transient memory, with no raw video
                  feeds uploaded to cloud servers. Where optional Supabase sync is offered, only
                  non-video metadata is synchronized.
                </p>
              </div>
            </>
          )}

          {type === "terms" && (
            <>
              <div className="rounded-xl border border-white/10 bg-[#141A24] p-4">
                <p className="font-semibold text-white">Consumer Research & Pre-Release Terms</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  Full Beta Testing Terms of Use will be published prior to any public TestFlight or
                  App Store release.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  1. Voluntary Research Participation
                </h4>
                <p>
                  Participating in the Astrateq Gadgets consumer survey is completely voluntary,
                  requires no purchase, and does not create any obligation or guarantee of beta
                  access.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">2. Beta Update Requests</h4>
                <p>
                  Submitting an email address for future beta updates places you on an optional
                  notification list. It does not guarantee acceptance into a testing cohort or
                  confirm a commercial launch schedule.
                </p>
              </div>
            </>
          )}

          {type === "support" && (
            <>
              <div className="rounded-xl border border-white/10 bg-[#141A24] p-4">
                <p className="font-semibold text-white">Consumer Research & Product Inquiries</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  Questions about the Astrateq Gadgets research survey, privacy practices, or future
                  iOS testing? Contact us directly below.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#141A24] p-4">
                <p className="font-mono text-xs text-[#00E5FF] uppercase">Direct Email</p>
                <a
                  href="mailto:kingnarmer702@gmail.com"
                  className="mt-1 inline-block font-mono text-sm font-medium text-white underline-offset-4 hover:text-[#00E5FF] hover:underline"
                >
                  kingnarmer702@gmail.com
                </a>
                <p className="mt-2 text-xs text-[#9299A5]">
                  Please include your iPhone model and iOS version if inquiring about future testing
                  compatibility.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#050505] px-6 py-4">
          <p className="text-xs text-[#9299A5]">Astrateq Gadgets · Consumer Research Phase</p>
          <button
            type="button"
            onClick={onClose}
            className="min-h-[40px] rounded-lg bg-[#00E5FF] px-4 py-2 font-display text-xs font-semibold text-[#050505] transition-opacity hover:opacity-90 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
