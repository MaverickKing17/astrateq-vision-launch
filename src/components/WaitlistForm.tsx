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
        className="animate-rise glow-cyan flex items-start gap-3 rounded-xl border border-primary/30 bg-surface-strong px-4 py-4"
        role="status"
      >
        <span className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
          ✓
        </span>
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-primary">You're on the waitlist!</p>
          <p className="mt-1 text-sm text-muted-foreground">
            We'll send your TestFlight invite shortly.
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
          className="w-full min-w-0 rounded-xl border border-input bg-surface px-4 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-ring/30"
        />
        <button
          type="submit"
          className="shrink-0 rounded-xl bg-primary px-5 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:glow-cyan focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          {cta}
        </button>
      </div>
      {error ? <p className="mt-2 text-xs text-destructive">{error}</p> : null}
    </form>
  );
}
