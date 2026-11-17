/**
 * Internal Market Research Results Framework (Server-Side Only)
 *
 * Provides typed aggregation structures and query helpers for an internal
 * administrative analytics dashboard once Supabase tables are populated.
 * Never exposes individual respondent rows or private data publicly.
 */

export interface DistributionCount {
  option: string;
  count: number;
  percentage: number;
}

export interface MarketResearchDashboardMetrics {
  configured: boolean;
  totalSurveySubmissions: number;
  surveyCompletionRatePercent: number | null;
  averageCompletionSeconds: number | null;
  totalBetaRegistrations: number;
  drivingFrequencyDistribution: DistributionCount[];
  productInterestDistribution: DistributionCount[];
  mostRequestedCapabilities: DistributionCount[];
  privacyPreferenceDistribution: DistributionCount[];
  adoptionBarriersDistribution: DistributionCount[];
  everydayUsageDistribution: DistributionCount[];
}

interface RawSurveyRow {
  driving_frequency: string | null;
  product_interest: string | null;
  valuable_capabilities: string[] | null;
  privacy_importance: string | null;
  adoption_concerns: string[] | null;
  everyday_usage_likelihood: string | null;
  skipped_questions: string[] | null;
  completion_seconds: number | null;
}

function tallySingleChoice(values: Array<string | null>, total: number): DistributionCount[] {
  const counts = new Map<string, number>();
  for (const val of values) {
    if (!val) continue;
    counts.set(val, (counts.get(val) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([option, count]) => ({
      option,
      count,
      percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

function tallyMultiChoice(lists: Array<string[] | null>, total: number): DistributionCount[] {
  const counts = new Map<string, number>();
  for (const list of lists) {
    if (!Array.isArray(list)) continue;
    for (const item of list) {
      if (!item) continue;
      counts.set(item, (counts.get(item) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([option, count]) => ({
      option,
      count,
      percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Computes real aggregated research indicators from Supabase using service_role credentials.
 * Returns empty arrays and configured=false if Supabase credentials are absent.
 */
export async function fetchInternalResearchMetrics(): Promise<MarketResearchDashboardMetrics> {
  const url = process.env.SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !key) {
    return {
      configured: false,
      totalSurveySubmissions: 0,
      surveyCompletionRatePercent: null,
      averageCompletionSeconds: null,
      totalBetaRegistrations: 0,
      drivingFrequencyDistribution: [],
      productInterestDistribution: [],
      mostRequestedCapabilities: [],
      privacyPreferenceDistribution: [],
      adoptionBarriersDistribution: [],
      everydayUsageDistribution: [],
    };
  }

  const baseUrl = url.replace(/\/+$/, "");
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
  };

  const [surveyRes, betaRes] = await Promise.all([
    fetch(
      `${baseUrl}/rest/v1/market_research_surveys?select=driving_frequency,product_interest,valuable_capabilities,privacy_importance,adoption_concerns,everyday_usage_likelihood,skipped_questions,completion_seconds`,
      { headers },
    ),
    fetch(`${baseUrl}/rest/v1/beta_registrations?select=id&consent_marketing=eq.true`, {
      headers: { ...headers, Prefer: "count=exact" },
    }),
  ]);

  if (!surveyRes.ok) {
    throw new Error(`Failed to fetch survey rows (HTTP ${surveyRes.status})`);
  }

  const surveys = (await surveyRes.json()) as RawSurveyRow[];
  const total = surveys.length;

  const fullCompletions = surveys.filter(
    (s) => !s.skipped_questions || s.skipped_questions.length === 0,
  ).length;
  const durations = surveys
    .map((s) => s.completion_seconds)
    .filter((v): v is number => typeof v === "number" && v >= 0);
  const avgDuration =
    durations.length > 0
      ? Math.round(durations.reduce((acc, cur) => acc + cur, 0) / durations.length)
      : null;

  let betaCount = 0;
  if (betaRes.ok) {
    const betaRows = (await betaRes.json()) as Array<{ id: string }>;
    betaCount = betaRows.length;
  }

  return {
    configured: true,
    totalSurveySubmissions: total,
    surveyCompletionRatePercent:
      total > 0 ? Math.round((fullCompletions / total) * 1000) / 10 : null,
    averageCompletionSeconds: avgDuration,
    totalBetaRegistrations: betaCount,
    drivingFrequencyDistribution: tallySingleChoice(
      surveys.map((s) => s.driving_frequency),
      total,
    ),
    productInterestDistribution: tallySingleChoice(
      surveys.map((s) => s.product_interest),
      total,
    ),
    mostRequestedCapabilities: tallyMultiChoice(
      surveys.map((s) => s.valuable_capabilities),
      total,
    ),
    privacyPreferenceDistribution: tallySingleChoice(
      surveys.map((s) => s.privacy_importance),
      total,
    ),
    adoptionBarriersDistribution: tallyMultiChoice(
      surveys.map((s) => s.adoption_concerns),
      total,
    ),
    everydayUsageDistribution: tallySingleChoice(
      surveys.map((s) => s.everyday_usage_likelihood),
      total,
    ),
  };
}
