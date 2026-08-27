import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function WaitlistForm({
  cta = "Request Early Beta Access",
  id,
}: {
  cta?: string;
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    // Client-side email validation
    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: cleanEmail,
          source: id === "beta-email" ? "cohort_bottom_section" : "hero_top_section",
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === false) {
        throw new Error(data.message || "Failed to register. Please try again.");
      }

      setDone(true);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Network error. Please check your connection and try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div
        className="animate-rise relative overflow-hidden rounded-2xl border border-[#00f2fe]/40 bg-[#0E1420]/95 p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.5),0_0_24px_rgba(0,242,254,0.2)] backdrop-blur-xl"
        role="status"
      >
        <div className="flex items-start gap-3.5">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/50 shadow-[0_0_12px_rgba(0,242,254,0.4)]">
            <CheckCircle2 className="size-5 text-[#00f2fe]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-bold tracking-wider text-[#00f2fe] uppercase">
                Spot Reserved · TestFlight Cohort
              </span>
            </div>
            <p className="mt-1 font-display text-sm sm:text-base font-semibold leading-snug text-[#FFFFFF]">
              ✓ You&apos;re on the list! Check your inbox shortly for your TestFlight beta invite.
            </p>
            <p className="mt-1.5 text-xs text-[#94A3B8]">
              We&apos;re issuing weekly TestFlight redemption batches for Canadian winter drivers.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full" noValidate>
      <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="sr-only" htmlFor={id ?? "waitlist-email"}>
          Email address
        </label>
        <input
          id={id ?? "waitlist-email"}
          type="email"
          value={email}
          disabled={loading}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          placeholder="you@commute.ca"
          className="w-full min-w-0 rounded-xl border border-[#223046] bg-[#131B29] px-4 py-3.5 text-sm text-[#FFFFFF] outline-none transition-all placeholder:text-[#94A3B8] focus:border-[#00f2fe] focus:ring-2 focus:ring-[#00f2fe]/30 disabled:opacity-60"
          style={{
            backgroundColor: "#131B29",
            color: "#FFFFFF",
            border: "1px solid #223046",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#00f2fe] px-5 py-3.5 font-display text-sm font-bold text-[#080B11] shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_26px_rgba(0,242,254,0.6)] focus-visible:ring-2 focus-visible:ring-[#00f2fe]/50 disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          style={{
            backgroundColor: "#00f2fe",
            color: "#080B11",
            fontFamily:
              "'Segoe UI Bold', 'Segoe UI Semibold', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
            fontWeight: 700,
            boxShadow: "0 0 20px rgba(0, 242, 254, 0.4)",
          }}
        >
          {loading ? (
            <>
              <Loader2 className="size-4 animate-spin text-[#080B11]" />
              <span>Securing Spot...</span>
            </>
          ) : (
            <span>{cta}</span>
          )}
        </button>
      </div>
      {error ? (
        <div className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs font-semibold text-red-300 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
          <AlertCircle className="size-3.5 shrink-0 text-red-400" />
          <span>{error}</span>
        </div>
      ) : null}
    </form>
  );
}
