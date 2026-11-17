import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ClipboardCheck,
  Shield,
  Check,
} from "lucide-react";
import type { SiteCopy, SurveyQuestionCopy } from "@/lib/i18n";

interface MarketResearchSurveyProps {
  copy: SiteCopy["survey"];
  locale: string;
}

interface SurveyAnswers {
  drivingFrequency: string | null;
  productInterest: string | null;
  valuableCapabilities: string[];
  valuableCapabilitiesOther: string;
  privacyImportance: string | null;
  adoptionConcerns: string[];
  adoptionConcernsOther: string;
  everydayUsageLikelihood: string | null;
  additionalFeedback: string;
}

const INITIAL_ANSWERS: SurveyAnswers = {
  drivingFrequency: null,
  productInterest: null,
  valuableCapabilities: [],
  valuableCapabilitiesOther: "",
  privacyImportance: null,
  adoptionConcerns: [],
  adoptionConcernsOther: "",
  everydayUsageLikelihood: null,
  additionalFeedback: "",
};

interface SubmissionOutcome {
  status: "idle" | "submitting" | "saved" | "unconfigured" | "error";
  message: string;
  submissionId?: string;
  missingConfig?: string[];
}

export function MarketResearchSurvey({ copy, locale }: MarketResearchSurveyProps) {
  const questions = copy.questions;
  const totalSteps = questions.length + 1; // 7 questions + 1 review step
  const [stepIndex, setStepIndex] = useState(0); // 0..6 = questions, 7 = review
  const [answers, setAnswers] = useState<SurveyAnswers>(INITIAL_ANSWERS);
  const [skippedIds, setSkippedIds] = useState<string[]>([]);
  const [stepValidationError, setStepValidationError] = useState("");
  const [startedAt, setStartedAt] = useState<string>("");
  const [utmParams, setUtmParams] = useState<{
    utmSource: string | null;
    utmMedium: string | null;
    utmCampaign: string | null;
  }>({ utmSource: null, utmMedium: null, utmCampaign: null });
  const [outcome, setOutcome] = useState<SubmissionOutcome>({ status: "idle", message: "" });
  const [copiedSummary, setCopiedSummary] = useState(false);

  const stepFocusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStartedAt(new Date().toISOString());
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setUtmParams({
        utmSource: params.get("utm_source"),
        utmMedium: params.get("utm_medium"),
        utmCampaign: params.get("utm_campaign"),
      });
    }
  }, []);

  const isReviewStep = stepIndex === questions.length;
  const currentQuestion: SurveyQuestionCopy | undefined = questions[stepIndex];
  const progressPercent = Math.round(((stepIndex + 1) / totalSteps) * 100);

  const focusStepRegion = () => {
    requestAnimationFrame(() => {
      stepFocusRef.current?.focus({ preventScroll: true });
    });
  };

  const hasAnswerForQuestion = (q: SurveyQuestionCopy): boolean => {
    switch (q.id) {
      case "drivingFrequency":
        return Boolean(answers.drivingFrequency);
      case "productInterest":
        return Boolean(answers.productInterest);
      case "valuableCapabilities":
        return answers.valuableCapabilities.length > 0;
      case "privacyImportance":
        return Boolean(answers.privacyImportance);
      case "adoptionConcerns":
        return answers.adoptionConcerns.length > 0;
      case "everydayUsageLikelihood":
        return Boolean(answers.everydayUsageLikelihood);
      case "additionalFeedback":
        return answers.additionalFeedback.trim().length > 0;
    }
  };

  const formatAnswerSummary = (q: SurveyQuestionCopy): string => {
    switch (q.id) {
      case "drivingFrequency":
        return answers.drivingFrequency || copy.skippedLabel;
      case "productInterest":
        return answers.productInterest || copy.skippedLabel;
      case "valuableCapabilities": {
        if (answers.valuableCapabilities.length === 0) return copy.skippedLabel;
        const list = answers.valuableCapabilities.map((item) =>
          item === q.otherOption && answers.valuableCapabilitiesOther.trim()
            ? `${item} (${answers.valuableCapabilitiesOther.trim()})`
            : item,
        );
        return list.join(" · ");
      }
      case "privacyImportance":
        return answers.privacyImportance || copy.skippedLabel;
      case "adoptionConcerns": {
        if (answers.adoptionConcerns.length === 0) return copy.skippedLabel;
        const list = answers.adoptionConcerns.map((item) =>
          item === q.otherOption && answers.adoptionConcernsOther.trim()
            ? `${item} (${answers.adoptionConcernsOther.trim()})`
            : item,
        );
        return list.join(" · ");
      }
      case "everydayUsageLikelihood":
        return answers.everydayUsageLikelihood || copy.skippedLabel;
      case "additionalFeedback":
        return answers.additionalFeedback.trim() || copy.skippedLabel;
    }
  };

  const handleSingleSelect = (qId: SurveyQuestionCopy["id"], value: string) => {
    setStepValidationError("");
    setSkippedIds((prev) => prev.filter((id) => id !== qId));
    setAnswers((prev) => ({
      ...prev,
      [qId]: value,
    }));
  };

  const handleMultiToggle = (q: SurveyQuestionCopy, option: string) => {
    setStepValidationError("");
    setSkippedIds((prev) => prev.filter((id) => id !== q.id));

    const key = q.id === "valuableCapabilities" ? "valuableCapabilities" : "adoptionConcerns";

    setAnswers((prev) => {
      const current = prev[key];
      const exists = current.includes(option);

      if (exists) {
        return {
          ...prev,
          [key]: current.filter((item) => item !== option),
        };
      }

      if (q.exclusiveOption && option === q.exclusiveOption) {
        return {
          ...prev,
          [key]: [option],
          adoptionConcernsOther: "",
        };
      }

      const filtered = q.exclusiveOption
        ? current.filter((item) => item !== q.exclusiveOption)
        : current;

      return {
        ...prev,
        [key]: [...filtered, option],
      };
    });
  };

  const handleNext = () => {
    if (!currentQuestion) return;
    if (currentQuestion.type !== "text" && !hasAnswerForQuestion(currentQuestion)) {
      setStepValidationError("Please choose an option above, or select Skip question to continue.");
      return;
    }
    setStepValidationError("");
    setStepIndex((prev) => Math.min(prev + 1, questions.length));
    focusStepRegion();
  };

  const handleSkip = () => {
    if (!currentQuestion) return;
    setStepValidationError("");
    setSkippedIds((prev) =>
      prev.includes(currentQuestion.id) ? prev : [...prev, currentQuestion.id],
    );
    setStepIndex((prev) => Math.min(prev + 1, questions.length));
    focusStepRegion();
  };

  const handleBack = () => {
    setStepValidationError("");
    setStepIndex((prev) => Math.max(prev - 1, 0));
    focusStepRegion();
  };

  const handleSubmitSurvey = async () => {
    const answeredCount = questions.filter((q) => hasAnswerForQuestion(q)).length;
    if (answeredCount === 0) {
      setStepValidationError("Please answer at least one question before submitting.");
      return;
    }

    setStepValidationError("");
    setOutcome({ status: "submitting", message: "" });

    const completionSeconds = startedAt
      ? Math.max(1, Math.round((Date.now() - new Date(startedAt).getTime()) / 1000))
      : null;

    const computedSkipped = questions
      .filter((q) => !hasAnswerForQuestion(q) || skippedIds.includes(q.id))
      .filter((q) => !hasAnswerForQuestion(q))
      .map((q) => q.id);

    try {
      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          drivingFrequency: answers.drivingFrequency,
          productInterest: answers.productInterest,
          valuableCapabilities: answers.valuableCapabilities,
          valuableCapabilitiesOther: answers.valuableCapabilitiesOther || null,
          privacyImportance: answers.privacyImportance,
          adoptionConcerns: answers.adoptionConcerns,
          adoptionConcernsOther: answers.adoptionConcernsOther || null,
          everydayUsageLikelihood: answers.everydayUsageLikelihood,
          additionalFeedback: answers.additionalFeedback || null,
          skippedQuestions: computedSkipped,
          startedAt: startedAt || null,
          completionSeconds,
          locale,
          source: "web_survey",
          utmSource: utmParams.utmSource,
          utmMedium: utmParams.utmMedium,
          utmCampaign: utmParams.utmCampaign,
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        storedInDatabase?: boolean;
        configured?: boolean;
        missingConfig?: string[];
        submissionId?: string;
        message?: string;
      };

      if (response.ok && data.success && data.storedInDatabase) {
        setOutcome({
          status: "saved",
          submissionId: data.submissionId,
          message:
            data.message ||
            "Thank you. Your anonymous survey response has been saved to help guide Astrateq Gadgets product research.",
        });
        return;
      }

      if (data.configured === false || response.status === 503) {
        setOutcome({
          status: "unconfigured",
          missingConfig: data.missingConfig ?? ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY"],
          message:
            data.message ||
            "Your responses were validated, but database storage is not yet configured in this environment.",
        });
        return;
      }

      setOutcome({
        status: "error",
        message:
          data.message || "We could not save your survey response right now. Please try again.",
      });
    } catch {
      setOutcome({
        status: "error",
        message: "Network error submitting the survey. Please check your connection and try again.",
      });
    }
  };

  const handleCopySummary = async () => {
    const summaryText = questions
      .map((q, idx) => `Q${idx + 1}: ${q.prompt}\nAnswer: ${formatAnswerSummary(q)}`)
      .join("\n\n");
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopiedSummary(true);
      setTimeout(() => setCopiedSummary(false), 2500);
    } catch {
      // Clipboard API unavailable
    }
  };

  const resetSurvey = () => {
    setAnswers(INITIAL_ANSWERS);
    setSkippedIds([]);
    setStepIndex(0);
    setStepValidationError("");
    setOutcome({ status: "idle", message: "" });
    setStartedAt(new Date().toISOString());
    focusStepRegion();
  };

  if (outcome.status === "saved") {
    return (
      <div
        className="rounded-3xl border border-[#00E5FF]/35 bg-[#141A24] p-6 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#00E5FF]/40 bg-[#00E5FF]/10">
            <CheckCircle2 className="size-6 text-[#00E5FF]" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
              Survey Recorded
            </p>
            <h3 className="mt-2 font-display text-2xl font-bold text-white">
              Thank you for sharing your perspective.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9299A5]">{outcome.message}</p>
            {outcome.submissionId ? (
              <p className="mt-2 font-mono text-xs break-all text-[#9299A5]">
                Reference ID: {outcome.submissionId}
              </p>
            ) : null}
            <p className="mt-4 text-xs leading-relaxed text-[#9299A5]">
              Your survey responses remain anonymous and have not subscribed you to any email list.
              If you also wish to follow future development updates, you may register separately
              below.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#beta-access"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-5 py-2.5 font-display text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90"
              >
                <span>Optional: Request Beta Updates</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={resetSurvey}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/15 bg-[#0B0F19] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#050505] cursor-pointer"
              >
                Submit another response
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (outcome.status === "unconfigured") {
    return (
      <div className="rounded-3xl border border-amber-400/35 bg-[#141A24] p-6 sm:p-10" role="alert">
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
            <AlertCircle className="size-6 text-amber-300" aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-mono text-xs font-medium tracking-wider text-amber-300 uppercase">
              Database Configuration Required
            </p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">
              Survey Response Not Saved — Backend Storage Unavailable
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9299A5]">
              {outcome.message} To avoid misleading claims, we do not mark a survey as saved unless
              the database insert succeeds.
            </p>
            <div className="mt-4 rounded-xl border border-white/10 bg-[#0B0F19] p-4">
              <p className="font-mono text-xs text-white">Required Configuration:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 font-mono text-xs break-words text-[#9299A5]">
                {(outcome.missingConfig ?? []).map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>Apply migration: supabase/migrations/001_market_research_schema.sql</li>
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setOutcome({ status: "idle", message: "" })}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/15 bg-[#0B0F19] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#050505] cursor-pointer"
              >
                Back to Review
              </button>
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0B0F19] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#00E5FF] cursor-pointer"
              >
                <ClipboardCheck className="size-4 text-[#00E5FF]" aria-hidden="true" />
                <span>{copiedSummary ? "Copied Summary" : "Copy Response Summary"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-[#0B0F19] p-5 sm:p-10">
      {/* Progress Header */}
      <div className="border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="font-mono text-xs font-medium tracking-wider text-[#00E5FF] uppercase">
            {isReviewStep
              ? `Step ${totalSteps} of ${totalSteps} · Review`
              : currentQuestion?.stepLabel}
          </span>
          <span className="font-mono text-xs tabular-nums text-[#9299A5]">
            {progressPercent}% complete
          </span>
        </div>
        <div
          className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#141A24]"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Survey completion progress"
        >
          <div
            className="h-full rounded-full bg-[#00E5FF] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-[#9299A5]">{copy.noEmailBadge}</p>
      </div>

      {/* Question or Review Step */}
      <div ref={stepFocusRef} tabIndex={-1} className="outline-none">
        {!isReviewStep && currentQuestion ? (
          <div key={currentQuestion.id} className="animate-fade-rise pt-7">
            <fieldset>
              <legend className="font-display text-xl font-bold leading-snug text-white sm:text-2xl text-balance">
                {currentQuestion.prompt}
              </legend>
              {currentQuestion.helperText ? (
                <p className="mt-2 text-sm text-[#9299A5]">{currentQuestion.helperText}</p>
              ) : null}

              {/* Single-select radio options */}
              {currentQuestion.type === "single" && currentQuestion.options ? (
                <div className="mt-6 grid gap-3">
                  {currentQuestion.options.map((option, idx) => {
                    const selectedValue = answers[currentQuestion.id] as string | null;
                    const isChecked = selectedValue === option;
                    const inputId = `survey-${currentQuestion.id}-${idx}`;
                    return (
                      <label
                        key={option}
                        htmlFor={inputId}
                        className={`flex min-h-[52px] items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#00E5FF] has-[:focus-visible]:outline-offset-2 cursor-pointer ${
                          isChecked
                            ? "border-[#00E5FF] bg-[#141A24] text-white"
                            : "border-white/10 bg-[#050505]/70 text-[#9299A5] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        <span className="font-medium text-white">{option}</span>
                        <input
                          id={inputId}
                          type="radio"
                          name={currentQuestion.id}
                          value={option}
                          checked={isChecked}
                          onChange={() => handleSingleSelect(currentQuestion.id, option)}
                          className="size-4 shrink-0 accent-[#00E5FF]"
                        />
                      </label>
                    );
                  })}
                </div>
              ) : null}

              {/* Multi-select checkbox options with visible keyboard focus */}
              {currentQuestion.type === "multi" && currentQuestion.options ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {currentQuestion.options.map((option, idx) => {
                    const list =
                      currentQuestion.id === "valuableCapabilities"
                        ? answers.valuableCapabilities
                        : answers.adoptionConcerns;
                    const isChecked = list.includes(option);
                    const inputId = `survey-${currentQuestion.id}-${idx}`;
                    return (
                      <label
                        key={option}
                        htmlFor={inputId}
                        className={`flex min-h-[52px] items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-sm transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[#00E5FF] has-[:focus-visible]:outline-offset-2 cursor-pointer ${
                          isChecked
                            ? "border-[#00E5FF] bg-[#141A24] text-white"
                            : "border-white/10 bg-[#050505]/70 text-[#9299A5] hover:border-white/25 hover:text-white"
                        }`}
                      >
                        <span className="font-medium text-white">{option}</span>
                        <span
                          className={`flex size-5 shrink-0 items-center justify-center rounded border transition-colors ${
                            isChecked
                              ? "border-[#00E5FF] bg-[#00E5FF] text-[#050505]"
                              : "border-white/25 bg-transparent"
                          }`}
                          aria-hidden="true"
                        >
                          {isChecked ? <Check className="size-3.5 stroke-[3]" /> : null}
                        </span>
                        <input
                          id={inputId}
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleMultiToggle(currentQuestion, option)}
                          className="sr-only"
                        />
                      </label>
                    );
                  })}
                </div>
              ) : null}

              {/* Optional "Other" text input when "Other." is checked */}
              {currentQuestion.type === "multi" &&
              currentQuestion.otherOption &&
              (currentQuestion.id === "valuableCapabilities"
                ? answers.valuableCapabilities.includes(currentQuestion.otherOption)
                : answers.adoptionConcerns.includes(currentQuestion.otherOption)) ? (
                <div className="mt-4">
                  <label
                    htmlFor={`survey-${currentQuestion.id}-other`}
                    className="block text-xs font-medium text-[#9299A5]"
                  >
                    Please specify (optional)
                  </label>
                  <input
                    id={`survey-${currentQuestion.id}-other`}
                    type="text"
                    maxLength={240}
                    value={
                      currentQuestion.id === "valuableCapabilities"
                        ? answers.valuableCapabilitiesOther
                        : answers.adoptionConcernsOther
                    }
                    onChange={(e) => {
                      const val = e.target.value;
                      setAnswers((prev) => ({
                        ...prev,
                        ...(currentQuestion.id === "valuableCapabilities"
                          ? { valuableCapabilitiesOther: val }
                          : { adoptionConcernsOther: val }),
                      }));
                    }}
                    placeholder="Optional details..."
                    className="mt-2 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#050505] px-4 py-2.5 text-sm text-white placeholder:text-[#9299A5]/70 focus:border-[#00E5FF]"
                  />
                </div>
              ) : null}

              {/* Optional free-text feedback */}
              {currentQuestion.type === "text" ? (
                <div className="mt-6">
                  <label htmlFor="survey-additional-feedback" className="sr-only">
                    {currentQuestion.prompt}
                  </label>
                  <textarea
                    id="survey-additional-feedback"
                    rows={4}
                    maxLength={1500}
                    value={answers.additionalFeedback}
                    onChange={(e) => {
                      setStepValidationError("");
                      setAnswers((prev) => ({ ...prev, additionalFeedback: e.target.value }));
                    }}
                    placeholder={currentQuestion.placeholder}
                    className="w-full rounded-xl border border-white/15 bg-[#050505] px-4 py-3 text-sm leading-relaxed text-white placeholder:text-[#9299A5]/70 focus:border-[#00E5FF]"
                  />
                  <p className="mt-2 text-right font-mono text-[11px] tabular-nums text-[#9299A5]">
                    {answers.additionalFeedback.length} / 1500
                  </p>
                </div>
              ) : null}
            </fieldset>

            {stepValidationError ? (
              <div
                role="alert"
                className="mt-5 flex items-start gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-xs font-medium text-rose-200"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-400" aria-hidden="true" />
                <span>{stepValidationError}</span>
              </div>
            ) : null}

            {/* Navigation Footer Controls */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
              <div>
                {stepIndex > 0 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-[#141A24] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 cursor-pointer"
                  >
                    <ArrowLeft className="size-4" aria-hidden="true" />
                    <span>{copy.backButton}</span>
                  </button>
                ) : (
                  <span className="text-xs text-[#9299A5]">{copy.timeEstimate}</span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSkip}
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-[#9299A5] transition-colors hover:text-white cursor-pointer"
                >
                  {copy.skipButton}
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-2.5 font-display text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90 cursor-pointer"
                >
                  <span>
                    {stepIndex === questions.length - 1 ? copy.reviewButton : copy.continueButton}
                  </span>
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Review & Submit Step */
          <div className="animate-fade-rise pt-7">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              {copy.reviewTitle}
            </h3>
            <p className="mt-2 text-sm text-[#9299A5]">{copy.reviewSubtitle}</p>

            <div className="mt-6 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#050505]/70">
              {questions.map((q, idx) => (
                <div
                  key={q.id}
                  className="flex flex-col justify-between gap-3 px-4 py-4 sm:flex-row sm:items-start sm:px-5"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-[11px] text-[#9299A5]">
                      0{idx + 1} · {q.prompt}
                    </p>
                    <p className="mt-1.5 text-sm font-medium break-words text-white">
                      {formatAnswerSummary(q)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStepValidationError("");
                      setOutcome({ status: "idle", message: "" });
                      setStepIndex(idx);
                      focusStepRegion();
                    }}
                    className="inline-flex min-h-[40px] shrink-0 items-center self-start rounded-lg border border-white/15 bg-[#141A24] px-3.5 py-1.5 text-xs font-medium text-white transition-colors hover:border-[#00E5FF] hover:text-[#00E5FF] cursor-pointer"
                  >
                    {copy.editLabel}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-[#141A24] p-4">
              <Shield className="mt-0.5 size-4 shrink-0 text-[#00E5FF]" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-[#9299A5]">{copy.privacySummary}</p>
            </div>

            {stepValidationError ? (
              <div
                role="alert"
                className="mt-4 flex items-start gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-xs font-medium text-rose-200"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-400" aria-hidden="true" />
                <span>{stepValidationError}</span>
              </div>
            ) : null}

            {outcome.status === "error" ? (
              <div
                role="alert"
                className="mt-4 flex items-start gap-2 rounded-xl border border-rose-500/40 bg-rose-950/40 px-4 py-3 text-xs font-medium text-rose-200"
              >
                <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-400" aria-hidden="true" />
                <span>{outcome.message}</span>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={outcome.status === "submitting"}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-[#141A24] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 disabled:opacity-60 cursor-pointer"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                <span>{copy.backButton}</span>
              </button>

              <button
                type="button"
                onClick={handleSubmitSurvey}
                disabled={outcome.status === "submitting"}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 font-display text-sm font-semibold text-[#050505] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
              >
                {outcome.status === "submitting" ? (
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
        )}
      </div>
    </div>
  );
}
