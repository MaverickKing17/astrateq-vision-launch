import { useEffect } from "react";
import { X, ShieldAlert, Lock, FileText, Scale, Headphones } from "lucide-react";

export type LegalModalType = "disclaimer" | "privacy" | "terms" | "dmca" | "support" | null;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#080B11]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className="relative z-10 flex max-h-[88vh] w-full max-w-2xl flex-col rounded-2xl border border-[#223046] bg-[#0E1420] shadow-[0_0_50px_rgba(0,240,255,0.12)]"
        style={{
          fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#223046] px-6 py-5 bg-[#080B11]/60">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF]">
              {type === "disclaimer" && <ShieldAlert className="size-5 text-[#00F0FF]" />}
              {type === "privacy" && <Lock className="size-5 text-[#00F0FF]" />}
              {type === "terms" && <FileText className="size-5 text-[#00F0FF]" />}
              {type === "dmca" && <Scale className="size-5 text-[#00F0FF]" />}
              {type === "support" && <Headphones className="size-5 text-[#00F0FF]" />}
            </span>
            <div>
              <p className="label-mono text-[11px] font-semibold text-[#00F0FF]">
                LEGAL & COMPLIANCE · AUG 2026
              </p>
              <h3 className="font-display text-base font-bold text-[#FFFFFF] sm:text-lg">
                {type === "disclaimer" && "Driver Safety & Operation Disclaimer"}
                {type === "privacy" && "Privacy Policy & On-Device Processing Guarantee"}
                {type === "terms" && "Pre-Launch Beta Cohort Agreement"}
                {type === "dmca" && "Intellectual Property & DMCA Policy"}
                {type === "support" && "Beta Support & Technical Inquiries"}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex size-8 items-center justify-center rounded-lg border border-[#223046] bg-[#131B29] text-[#E2E8F0] transition-all hover:border-[#00F0FF] hover:bg-[#00F0FF] hover:text-[#080B11] hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 py-6 text-sm leading-relaxed text-[#94A3B8] space-y-5">
          {type === "disclaimer" && (
            <>
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
                <p className="font-semibold text-amber-300">
                  ⚠️ Critical Safety Notice for All Operators
                </p>
                <p className="mt-1 text-xs text-amber-200/90">
                  Astrateq is an auxiliary driver awareness assistance tool and is NOT an autonomous
                  driving system, autopilot, collision prevention mechanism, or replacement for
                  attentive human vigilance.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">1. Sole Driver Responsibility</h4>
                <p className="text-[#E2E8F0]">
                  The operator of the motor vehicle retains 100% full legal and operational
                  responsibility for the safe navigation, monitoring, and control of the vehicle at
                  all times. You must continuously maintain visual scan paths, safe following
                  distances, and awareness of weather, road hazards, traffic signals, pedestrians,
                  and surrounding motorists.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">2. Legal & Regulatory Compliance</h4>
                <p className="text-[#E2E8F0]">
                  Users are strictly obligated to abide by all municipal, provincial, state, and
                  federal laws regarding hands-free device usage and distracted driving in Canada
                  (including Ontario HTA Section 78.1 and corresponding provincial motor vehicle
                  acts) and the United States. Ensure your mobile phone or dashcam hardware is
                  mounted securely in compliance with local windshield obstruction regulations prior
                  to vehicle operation.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">
                  3. Operational Boundaries in Harsh Weather
                </h4>
                <p className="text-[#E2E8F0]">
                  While Astrateq’s Edge-AI models incorporate winter fatigue and snow-glare
                  mitigation models, extreme ambient conditions (such as heavy blizzards, uncleaned
                  windshield ice, dense fog, or lens obstruction) may degrade inference fidelity.
                  Never rely on automated alerts as a substitute for reduced speed and defensive
                  driving in Canadian winter conditions.
                </p>
              </div>
            </>
          )}

          {type === "privacy" && (
            <>
              <div className="rounded-xl border border-[#00F0FF]/30 bg-[#00F0FF]/10 p-4">
                <p className="font-semibold text-[#00F0FF]">
                  🔒 Absolute Data Sovereignty Architecture
                </p>
                <p className="mt-1 text-xs text-[#E2E8F0]">
                  Updated as of August 2026. Driver-facing camera video feeds, gaze tracking
                  metadata, and cabin sensor streams are processed exclusively on your device's
                  local Neural Processing Unit (NPU).
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">
                  1. Zero Cloud Transmission of Raw Video
                </h4>
                <p className="text-[#E2E8F0]">
                  At no point does Astrateq stream, capture, or transmit raw camera video or facial
                  biometric records to cloud servers or external infrastructure. Neural network
                  inference operates locally in device volatile memory with real-time memory purge
                  on frame completion.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">2. Biometrics & PIPEDA Compliance</h4>
                <p className="text-[#E2E8F0]">
                  In accordance with the Canadian Personal Information Protection and Electronic
                  Documents Act (PIPEDA) and international privacy frameworks:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#E2E8F0]">
                  <li>
                    No facial geometry templates or persistent driver identities are retained or
                    cataloged.
                  </li>
                  <li>
                    No driving telemetry is sold, traded, or shared with commercial data brokers,
                    insurers, or advertising platforms.
                  </li>
                  <li>
                    Waitlist email addresses are stored securely solely for cohort management and
                    authentication dispatch.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">3. Anonymized Diagnostic Telemetry</h4>
                <p className="text-[#E2E8F0]">
                  Users may optionally opt in to transmit high-level aggregated performance
                  benchmarks (e.g., inference frame rates, NPU latency in milliseconds, thermal
                  throttling statistics) to aid winter model calibration. These diagnostics contain
                  zero visual, location, or personally identifiable metadata.
                </p>
              </div>
            </>
          )}

          {type === "terms" && (
            <>
              <div className="rounded-xl border border-[#334155] bg-[#0F172A]/60 p-4">
                <p className="font-semibold text-[#FFFFFF]">
                  📋 Canadian Beta Cohort Participation Terms (Phase 01)
                </p>
                <p className="mt-1 text-xs text-[#E2E8F0]">
                  These terms govern early access to the Astrateq TestFlight (iOS) and Early Access
                  (Android) builds across the limited 500-seat winter validation program.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">
                  1. Pre-Release Software Provided "As-Is"
                </h4>
                <p className="text-[#E2E8F0]">
                  The beta release represents developmental software provided strictly for
                  evaluation, testing, and algorithmic refinement. Astrateq Gadgets provides no
                  warranties, express or implied, regarding uninterrupted operation or specific
                  hardware compatibility.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">
                  2. Cohort Slot Reservation & Inactivity
                </h4>
                <p className="text-[#E2E8F0]">
                  Early access invites are capped at 500 active testers for the Canadian winter
                  phase. Invitations are non-transferable. Astrateq reserves the right to reallocate
                  inactive slots to waitlist commuters if TestFlight builds remain uninstalled after
                  14 calendar days.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">3. Tester Feedback Ownership</h4>
                <p className="text-[#E2E8F0]">
                  Any qualitative bug submissions, glare scenario logs, or feature suggestions
                  submitted through official beta feedback forms become the exclusive intellectual
                  property of Astrateq Gadgets for product development without royalty or
                  compensation obligations.
                </p>
              </div>
            </>
          )}

          {type === "dmca" && (
            <>
              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">1. Intellectual Property Protection</h4>
                <p className="text-[#E2E8F0]">
                  All software code, edge-inference models, proprietary algorithms, trademarks,
                  visual user interfaces, HUD iconography, and documentation associated with
                  Astrateq Gadgets are protected under Canadian, United States, and international
                  intellectual property legislation.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">2. Notice and Takedown Procedure</h4>
                <p className="text-[#E2E8F0]">
                  In compliance with the U.S. Digital Millennium Copyright Act (17 U.S.C. § 512) and
                  the Canadian Copyright Act Notice-and-Notice regime, copyright holders or
                  authorized representatives may submit written infringement notifications
                  containing:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#E2E8F0]">
                  <li>Identification of the copyrighted work claimed to have been infringed.</li>
                  <li>
                    Specific identification of the allegedly infringing material and location URL.
                  </li>
                  <li>
                    Direct contact information (name, address, telephone number, and verified
                    email).
                  </li>
                  <li>A statement of good faith belief that the use is unauthorized.</li>
                  <li>
                    A statement made under penalty of perjury that the information provided is
                    accurate.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">3. Designated Legal Agent</h4>
                <p className="text-[#E2E8F0]">
                  Direct all formal DMCA and Canadian Copyright notices to: <br />
                  <span className="font-mono text-xs text-[#00F0FF]">legal@astrateq.com</span>{" "}
                  (Subject: Notice of Infringement / DMCA Agent).
                </p>
              </div>
            </>
          )}

          {type === "support" && (
            <>
              <div className="rounded-xl border border-[#334155] bg-[#0F172A]/60 p-4">
                <p className="font-semibold text-[#FFFFFF]">
                  🛠️ Developer Support & Cohort Helpdesk
                </p>
                <p className="mt-1 text-xs text-[#E2E8F0]">
                  Direct technical assistance for TestFlight builds, device compatibility
                  diagnostics, and Canadian commuter onboarding.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-[#223046] bg-[#131B29] p-3.5">
                  <p className="text-xs font-bold text-[#00F0FF]">TESTFLIGHT & APP SUPPORT</p>
                  <p className="mt-1 font-mono text-xs text-[#FFFFFF]">beta@astrateq.com</p>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">
                    Invite redemption, build crashes, and iOS/Android compatibility.
                  </p>
                </div>
                <div className="rounded-xl border border-[#223046] bg-[#131B29] p-3.5">
                  <p className="text-xs font-bold text-[#00F0FF]">PARTNERSHIPS & FLEET</p>
                  <p className="mt-1 font-mono text-xs text-[#FFFFFF]">fleets@astrateq.com</p>
                  <p className="mt-1 text-[11px] text-[#94A3B8]">
                    Inquiries for commercial transport, dashcam hardware, and OBD-II pilot programs.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-[#FFFFFF]">Minimum Hardware Requirements for Beta</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs text-[#E2E8F0]">
                  <li>
                    <strong className="text-[#FFFFFF]">iOS:</strong> iPhone 13 or newer running iOS
                    17.0+ (Apple Neural Engine required).
                  </li>
                  <li>
                    <strong className="text-[#FFFFFF]">Android:</strong> Devices with dedicated NPU
                    / Google Tensor G2+, Snapdragon 8 Gen 1+, running Android 14+.
                  </li>
                  <li>
                    <strong className="text-[#FFFFFF]">Mounting:</strong> Rigid, vibration-isolated
                    dashboard or windshield mount with direct driver line-of-sight.
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#223046] bg-[#080B11]/80 px-6 py-4">
          <p className="text-xs text-[#94A3B8]">Astrateq Gadgets • Legal & Compliance Division</p>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#00F0FF] px-4 py-2 text-xs font-bold text-[#080B11] transition-all hover:brightness-110 hover:shadow-[0_0_14px_rgba(0,240,255,0.4)] cursor-pointer"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
