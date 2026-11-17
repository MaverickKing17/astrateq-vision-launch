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
                Pre-Launch Notice · Astrateq.ai
              </p>
              <h3
                id={headingId}
                className="truncate font-display text-base font-bold text-white sm:text-lg"
              >
                {type === "safety" && "Driver Safety & Operation Notice"}
                {type === "privacy" && "Pre-Release Privacy Notice"}
                {type === "terms" && "Pre-Launch Beta Terms Summary"}
                {type === "support" && "Support & Inquiries"}
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
                <p className="font-semibold text-amber-200">Auxiliary Awareness Aid Only</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-100/90">
                  Astrateq is an informational driver-awareness tool currently in development. It is
                  not an autonomous driving system, collision-prevention tool, or medical device.
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
                  Mount your iPhone securely before driving and avoid interacting with your screen
                  while in motion.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">3. Environmental Limits</h4>
                <p>
                  Lighting extremes, sunglass polarization, snow glare, or camera obstruction can
                  affect optical visibility. Never rely on software alerts in place of cautious
                  driving.
                </p>
              </div>
            </>
          )}

          {type === "privacy" && (
            <>
              <div className="rounded-xl border border-[#00E5FF]/25 bg-[#141A24] p-4">
                <p className="font-semibold text-white">Pre-Release Privacy Architecture Summary</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  This summary describes Astrateq&apos;s intended data-handling design. A formal,
                  counsel-reviewed Privacy Policy will be published prior to public App Store
                  launch.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  1. On-Device Camera Evaluation
                </h4>
                <p>
                  Driver-facing camera frames are intended to be evaluated locally in transient
                  memory on your iPhone. Astrateq is designed not to record, store, or stream raw
                  video feeds to external cloud servers.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  2. Optional Sync & Waitlist Information
                </h4>
                <ul className="list-disc space-y-1.5 pl-5 text-xs">
                  <li>
                    Where optional synchronization with Supabase is enabled in a build, only
                    non-video metadata (such as summary trip counts or preferences) is synced.
                  </li>
                  <li>
                    Email addresses submitted via the beta-access form on Astrateq.ai are used
                    solely to notify you about beta availability and product updates.
                  </li>
                  <li>We do not sell personal contact details to third parties.</li>
                </ul>
              </div>
            </>
          )}

          {type === "terms" && (
            <>
              <div className="rounded-xl border border-white/10 bg-[#141A24] p-4">
                <p className="font-semibold text-white">Pre-Launch Informational Terms Summary</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  Full Beta Testing Terms of Use will be presented before any TestFlight invitation
                  is redeemed.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">1. Waitlist Requests</h4>
                <p>
                  Submitting your email on Astrateq.ai places you on a notification list for future
                  testing windows. Submission does not guarantee immediate TestFlight admission or
                  specific release timelines.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-semibold text-white">
                  2. Pre-Release Software Nature
                </h4>
                <p>
                  Beta software is provided for evaluation and feedback purposes only and may change
                  prior to general availability. Compatibility details and supported iOS versions
                  will be announced when beta builds open.
                </p>
              </div>
            </>
          )}

          {type === "support" && (
            <>
              <div className="rounded-xl border border-white/10 bg-[#141A24] p-4">
                <p className="font-semibold text-white">Pre-Release Support & Contact</p>
                <p className="mt-1 text-xs leading-relaxed text-[#9299A5]">
                  Have a question about the Astrateq iOS beta program, Canadian compatibility, or
                  partnership inquiries? Reach out directly below.
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
                  Please include your iPhone model and iOS version if asking about device
                  compatibility.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-[#050505] px-6 py-4">
          <p className="text-xs text-[#9299A5]">Astrateq.ai · Pre-Release Information</p>
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
