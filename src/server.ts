import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { processWaitlistSubmission, type WaitlistSubmissionPayload } from "./lib/resend-service";
import {
  insertSurveyResponseToSupabase,
  type SurveySubmissionPayload,
} from "./lib/supabase-research-service";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);

      // Handle Consumer Market Research Survey endpoint (anonymous, separate from beta waitlist)
      if (url.pathname === "/api/survey") {
        if (request.method !== "POST") {
          return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { "content-type": "application/json" },
          });
        }

        try {
          const body = (await request.json()) as Partial<SurveySubmissionPayload>;

          const hasAnyAnswer =
            Boolean(body.drivingFrequency) ||
            Boolean(body.productInterest) ||
            (Array.isArray(body.valuableCapabilities) && body.valuableCapabilities.length > 0) ||
            Boolean(body.privacyImportance) ||
            (Array.isArray(body.adoptionConcerns) && body.adoptionConcerns.length > 0) ||
            Boolean(body.everydayUsageLikelihood) ||
            Boolean(body.additionalFeedback?.trim());

          if (!hasAnyAnswer) {
            return new Response(
              JSON.stringify({
                success: false,
                storedInDatabase: false,
                message: "Please answer at least one survey question before submitting.",
              }),
              {
                status: 400,
                headers: { "content-type": "application/json" },
              },
            );
          }

          const dbResult = await insertSurveyResponseToSupabase({
            drivingFrequency: body.drivingFrequency ?? null,
            productInterest: body.productInterest ?? null,
            valuableCapabilities: Array.isArray(body.valuableCapabilities)
              ? body.valuableCapabilities
              : [],
            valuableCapabilitiesOther: body.valuableCapabilitiesOther ?? null,
            privacyImportance: body.privacyImportance ?? null,
            adoptionConcerns: Array.isArray(body.adoptionConcerns) ? body.adoptionConcerns : [],
            adoptionConcernsOther: body.adoptionConcernsOther ?? null,
            everydayUsageLikelihood: body.everydayUsageLikelihood ?? null,
            additionalFeedback: body.additionalFeedback ?? null,
            skippedQuestions: Array.isArray(body.skippedQuestions) ? body.skippedQuestions : [],
            startedAt: body.startedAt ?? null,
            completionSeconds: body.completionSeconds ?? null,
            locale: body.locale ?? "en-CA",
            source: body.source ?? "web_survey",
            utmSource: body.utmSource ?? null,
            utmMedium: body.utmMedium ?? null,
            utmCampaign: body.utmCampaign ?? null,
          });

          if (!dbResult.saved) {
            return new Response(
              JSON.stringify({
                success: false,
                storedInDatabase: false,
                configured: dbResult.configured,
                missingConfig: dbResult.missingEnvVars ?? [],
                message:
                  dbResult.errorMessage || "Survey response could not be saved to the database.",
              }),
              {
                status: dbResult.configured ? 502 : 503,
                headers: { "content-type": "application/json" },
              },
            );
          }

          return new Response(
            JSON.stringify({
              success: true,
              storedInDatabase: true,
              submissionId: dbResult.recordId,
              message:
                "Thank you. Your anonymous survey response has been saved to help guide Astrateq Gadgets product research.",
            }),
            {
              status: 201,
              headers: { "content-type": "application/json" },
            },
          );
        } catch {
          return new Response(
            JSON.stringify({
              success: false,
              storedInDatabase: false,
              message: "Invalid survey payload format.",
            }),
            {
              status: 400,
              headers: { "content-type": "application/json" },
            },
          );
        }
      }

      // Handle Beta Interest Registration endpoint (strictly separate from survey)
      if (url.pathname === "/api/waitlist") {
        if (request.method === "POST") {
          try {
            const body = (await request.json()) as WaitlistSubmissionPayload;
            const result = await processWaitlistSubmission(body);
            const statusCode = result.success
              ? 200
              : result.error === "backend_unconfigured"
                ? 503
                : 400;
            return new Response(JSON.stringify(result), {
              status: statusCode,
              headers: { "content-type": "application/json" },
            });
          } catch {
            return new Response(
              JSON.stringify({ success: false, message: "Invalid request payload format." }),
              {
                status: 400,
                headers: { "content-type": "application/json" },
              },
            );
          }
        } else {
          return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: { "content-type": "application/json" },
          });
        }
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
