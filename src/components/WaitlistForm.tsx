import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight, Info } from "lucide-react";
import type { SiteCopy } from "@/lib/i18n";

interface WaitlistFormProps {
  copy: SiteCopy["beta"];
  locale: string;
  source?: string;
  inputId?: string;
}

export function WaitlistForm({
  copy,
  locale,
  source = "beta_section",
  inputId = "beta-email-input",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [iphoneModel, setIphoneModel] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [backendInfo, setBackendInfo] = useState<{
    duplicate?: boolean;
    message?: string;
    storedInDatabase?: boolean;
    emailDispatched?: boolean;
    missingConfig?: string[];
  }>({});
  const [error, setError] = useState("");

  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setError("Please enter a valid email address (for example, name@example.ca).");
      return;
    }

    if (!consent) {
      setError(
        "Please check the consent box to confirm you would like to receive Astrateq Gadgets updates.",
      );
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
          firstName: firstName.trim() || undefined,
          iphoneModel: iphoneModel && iphoneModel !== "Prefer not to say" ? iphoneModel : undefined,
          consent,
          locale,
          source,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        duplicate?: boolean;
        message?: string;
        storedInDatabase?: boolean;
        emailDispatched?: boolean;
        missingConfig?: string[];
      };

      if (!response.ok || data.success === false) {
        setBackendInfo({ missingConfig: data.missingConfig });
        throw new Error(
          data.message || "Unable to submit your registration right now. Please try again.",
        );
      }

      setBackendInfo({
        duplicate: data.duplicate,
        message: data.message,
        storedInDatabase: data.storedInDatabase,
        emailDispatched: data.emailDispatched,
      });
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Network error. Please verify your connection and try again.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    const isDuplicate = Boolean(backendInfo.duplicate);
    return (
      <div
        className="animate-fade-rise rounded-2xl border border-[#00E5FF]/35 bg-[#0B0F19] p-6 text-left"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-3.5">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10">
            {isDuplicate ? (
              <Info className="size-5 text-[#00E5FF]" aria-hidden="true" />
            ) : (
              <CheckCircle2 className="size-5 text-[#00E5FF]" aria-hidden="true" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold text-white">
              {isDuplicate ? copy.duplicateTitle : copy.successTitle}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#9299A5]">
              {isDuplicate ? backendInfo.message : copy.successBody}
            </p>
            <p className="mt-2 font-mono text-[11px] text-[#9299A5]">
              {backendInfo.storedInDatabase && backendInfo.emailDispatched
                ? "Recorded in Supabase database and notification sent."
                : backendInfo.storedInDatabase
                  ? "Recorded in Supabase database."
                  : isDuplicate
                    ? "Duplicate request prevented — existing registration preserved."
                    : "Notification dispatched via email service (Supabase database not configured)."}
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setEmail("");
                setFirstName("");
                setIphoneModel("");
                setConsent(false);
                setError("");
                setBackendInfo({});
              }}
              className="mt-4 inline-flex min-h-[40px] items-center text-xs font-semibold text-[#00E5FF] underline-offset-4 hover:underline cursor-pointer"
            >
              {copy.submitAnother}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full text-left" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={`${inputId}-first-name`} className="block text-sm font-medium text-white">
            {copy.firstNameLabel}
          </label>
          <input
            id={`${inputId}-first-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            maxLength={80}
            disabled={loading}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={copy.firstNamePlaceholder}
            className="mt-2 min-h-[48px] w-full rounded-xl border border-white/15 bg-[#050505] px-4 py-3 text-sm text-white placeholder:text-[#9299A5]/70 transition-colors focus:border-[#00E5FF] disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor={`${inputId}-iphone`} className="block text-sm font-medium text-white">
            {copy.iphoneModelLabel}
          </label>
          <select
            id={`${inputId}-iphone`}
            name="iphoneModel"
            disabled={loading}
            value={iphoneModel}
            onChange={(e) => setIphoneModel(e.target.value)}
            className="mt-2 min-h-[48px] w-full rounded-xl border border-white/15 bg-[#050505] px-4 py-3 text-sm text-white transition-colors focus:border-[#00E5FF] disabled:opacity-60"
          >
            <option value="">Select iPhone model (optional)</option>
            {copy.iphoneModelOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor={inputId} className="block text-sm font-medium text-white">
          {copy.emailLabel}
        </label>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            required
            disabled={loading}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder={copy.emailPlaceholder}
            aria-invalid={Boolean(error)}
            aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
            className="min-h-[48px] w-full min-w-0 flex-1 rounded-xl border border-white/15 bg-[#050505] px-4 py-3 text-sm text-white placeholder:text-[#9299A5]/70 transition-colors focus:border-[#00E5FF] disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl border border-[#00E5FF] bg-[#0B0F19] px-6 py-3 font-display text-sm font-semibold text-[#00E5FF] transition-colors hover:bg-[#00E5FF] hover:text-[#050505] disabled:cursor-not-allowed disabled:opacity-70 whitespace-nowrap cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                <span>{copy.submittingButton}</span>
              </>
            ) : (
              <>
                <span>{copy.submitButton}</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Canadian CASL-aligned explicit consent checkbox */}
      <div className="mt-4 flex items-start gap-3">
        <input
          id={`${inputId}-consent`}
          name="consent"
          type="checkbox"
          checked={consent}
          disabled={loading}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (error) setError("");
          }}
          className="mt-0.5 size-4 shrink-0 rounded border-white/25 bg-[#050505] accent-[#00E5FF] cursor-pointer"
        />
        <label
          htmlFor={`${inputId}-consent`}
          className="text-xs leading-relaxed text-[#9299A5] cursor-pointer"
        >
          {copy.consentLabel}
        </label>
      </div>

      <p id={hintId} className="mt-3 text-xs leading-relaxed text-[#9299A5]/90">
        {copy.privacyNotice}
      </p>

      {error ? (
        <div
          id={errorId}
          role="alert"
          className="mt-3 flex items-start gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 px-3.5 py-2.5 text-xs font-medium text-rose-200"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-400" aria-hidden="true" />
          <div>
            <p>{error}</p>
            {backendInfo.missingConfig && backendInfo.missingConfig.length > 0 ? (
              <p className="mt-1 font-mono text-[11px] text-rose-300">
                Missing configuration: {backendInfo.missingConfig.join(", ")}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </form>
  );
}
