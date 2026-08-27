import { useState } from "react";

export function WaitlistForm({
  cta = "Request Early Beta Access",
  id,
}: {
  cta?: string;
  id?: string;
}) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div
        className="animate-rise flex items-center gap-3.5 rounded-xl border border-primary/40 bg-card px-4 py-4 text-left shadow-[0_0_24px_rgba(0,240,255,0.18)]"
        role="status"
      >
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
          ✓
        </span>
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-primary">
            ✓ You're on the waitlist! We'll send your TestFlight invite shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="w-full" noValidate>
      <div className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="sr-only" htmlFor={id ?? "waitlist-email"}>
          Email address
        </label>
        <input
          id={id ?? "waitlist-email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@commute.ca"
          className="w-full min-w-0 rounded-xl border border-[#334155] bg-[#1E293B] px-4 py-3.5 text-sm text-[#FFFFFF] outline-none transition-colors placeholder:text-[#94A3B8] focus:border-[#00F0FF] focus:ring-2 focus:ring-[#00F0FF]/30"
          style={{
            backgroundColor: "#1E293B",
            color: "#FFFFFF",
            border: "1px solid #334155",
          }}
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-[#00F0FF] px-5 py-3.5 font-display text-sm font-bold text-[#0A0A0B] shadow-[0_0_12px_rgba(0,240,255,0.25)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_18px_rgba(0,240,255,0.45)] focus-visible:ring-2 focus-visible:ring-[#00F0FF]/50"
          style={{
            backgroundColor: "#00F0FF",
            color: "#0A0A0B",
            fontFamily:
              "'Segoe UI Bold', 'Segoe UI Semibold', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif",
            fontWeight: 700,
          }}
        >
          {cta}
        </button>
      </div>
      {error ? <p className="mt-2 text-xs font-semibold text-destructive">{error}</p> : null}
    </form>
  );
}
