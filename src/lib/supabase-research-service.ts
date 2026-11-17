export interface SurveySubmissionPayload {
  drivingFrequency: string | null;
  productInterest: string | null;
  valuableCapabilities: string[];
  valuableCapabilitiesOther?: string | null;
  privacyImportance: string | null;
  adoptionConcerns: string[];
  adoptionConcernsOther?: string | null;
  everydayUsageLikelihood: string | null;
  additionalFeedback?: string | null;
  skippedQuestions: string[];
  startedAt?: string | null;
  completionSeconds?: number | null;
  locale?: string;
  source?: string;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
}

export interface BetaRegistrationDbPayload {
  email: string;
  firstName?: string | null;
  iphoneModel?: string | null;
  consentMarketing: boolean;
  locale?: string;
  source?: string;
}

export interface DatabaseOperationResult {
  configured: boolean;
  saved: boolean;
  recordId?: string;
  missingEnvVars?: string[];
  errorMessage?: string;
}

function getSupabaseServerConfig(): {
  url: string | null;
  key: string | null;
  missing: string[];
} {
  const url = process.env.SUPABASE_URL?.trim() || null;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || null;

  const missing: string[] = [];
  if (!url) missing.push("SUPABASE_URL");
  if (!key) missing.push("SUPABASE_SERVICE_ROLE_KEY");

  return { url, key, missing };
}

export function getSupabaseConfigurationStatus() {
  const { url, key, missing } = getSupabaseServerConfig();
  return {
    configured: Boolean(url && key),
    missingEnvVars: missing,
  };
}

export async function insertSurveyResponseToSupabase(
  payload: SurveySubmissionPayload,
): Promise<DatabaseOperationResult> {
  const { url, key, missing } = getSupabaseServerConfig();

  if (!url || !key) {
    return {
      configured: false,
      saved: false,
      missingEnvVars: missing,
      errorMessage:
        "Supabase database persistence is not configured in this environment. Missing: " +
        missing.join(", "),
    };
  }

  const endpoint = `${url.replace(/\/+$/, "")}/rest/v1/market_research_surveys`;
  const row = {
    started_at: payload.startedAt || null,
    completed_at: new Date().toISOString(),
    completion_seconds:
      typeof payload.completionSeconds === "number" && payload.completionSeconds >= 0
        ? Math.round(payload.completionSeconds)
        : null,
    driving_frequency: payload.drivingFrequency,
    product_interest: payload.productInterest,
    valuable_capabilities: payload.valuableCapabilities ?? [],
    valuable_capabilities_other: payload.valuableCapabilitiesOther?.trim() || null,
    privacy_importance: payload.privacyImportance,
    adoption_concerns: payload.adoptionConcerns ?? [],
    adoption_concerns_other: payload.adoptionConcernsOther?.trim() || null,
    everyday_usage_likelihood: payload.everydayUsageLikelihood,
    additional_feedback: payload.additionalFeedback?.trim() || null,
    skipped_questions: payload.skippedQuestions ?? [],
    locale: payload.locale || "en-CA",
    source: payload.source || "web_survey",
    utm_source: payload.utmSource || null,
    utm_medium: payload.utmMedium || null,
    utm_campaign: payload.utmCampaign || null,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(row),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Astrateq Supabase] Survey insert failed:", response.status, errorText);
      return {
        configured: true,
        saved: false,
        errorMessage: `Database rejected survey submission (HTTP ${response.status}). Ensure migration 001_market_research_schema.sql has been applied.`,
      };
    }

    const inserted = (await response.json()) as Array<{ id?: string }>;
    return {
      configured: true,
      saved: true,
      recordId: inserted[0]?.id,
    };
  } catch (err: unknown) {
    console.error("[Astrateq Supabase] Survey insert exception:", err);
    return {
      configured: true,
      saved: false,
      errorMessage:
        err instanceof Error ? err.message : "Network error connecting to Supabase database.",
    };
  }
}

export async function insertBetaRegistrationToSupabase(
  payload: BetaRegistrationDbPayload,
): Promise<DatabaseOperationResult> {
  const { url, key, missing } = getSupabaseServerConfig();

  if (!url || !key) {
    return {
      configured: false,
      saved: false,
      missingEnvVars: missing,
      errorMessage:
        "Supabase database persistence is not configured. Missing: " + missing.join(", "),
    };
  }

  const endpoint = `${url.replace(/\/+$/, "")}/rest/v1/beta_registrations?on_conflict=email`;
  const row = {
    email: payload.email.trim().toLowerCase(),
    first_name: payload.firstName?.trim() || null,
    iphone_model: payload.iphoneModel?.trim() || null,
    consent_marketing: Boolean(payload.consentMarketing),
    consent_timestamp: new Date().toISOString(),
    locale: payload.locale || "en-CA",
    source: payload.source || "beta_section",
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=representation,resolution=merge-duplicates",
      },
      body: JSON.stringify(row),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[Astrateq Supabase] Beta insert failed:", response.status, errorText);
      return {
        configured: true,
        saved: false,
        errorMessage: `Database error recording beta registration (HTTP ${response.status}).`,
      };
    }

    const inserted = (await response.json()) as Array<{ id?: string }>;
    return {
      configured: true,
      saved: true,
      recordId: inserted[0]?.id,
    };
  } catch (err: unknown) {
    console.error("[Astrateq Supabase] Beta insert exception:", err);
    return {
      configured: true,
      saved: false,
      errorMessage:
        err instanceof Error ? err.message : "Network error connecting to Supabase database.",
    };
  }
}
