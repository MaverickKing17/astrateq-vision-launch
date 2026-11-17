import { Resend } from "resend";
import { insertBetaRegistrationToSupabase } from "./supabase-research-service";

let resendClient: Resend | null = null;

function getResendClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }
  return resendClient;
}

export interface WaitlistSubmissionPayload {
  email: string;
  firstName?: string;
  iphoneModel?: string;
  consent?: boolean;
  source?: string;
  locale?: string;
}

export interface WaitlistSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
  emailDispatched?: boolean;
  storedInDatabase?: boolean;
  missingConfig?: string[];
}

export async function processWaitlistSubmission(
  input: string | WaitlistSubmissionPayload,
  legacySource: string = "landing_page",
): Promise<WaitlistSubmissionResult> {
  const payload: WaitlistSubmissionPayload =
    typeof input === "string" ? { email: input, source: legacySource } : input;

  const cleanEmail = payload.email?.trim().toLowerCase();
  const cleanFirstName = payload.firstName?.trim() || "";
  const cleanIphoneModel = payload.iphoneModel?.trim() || "";
  const source = payload.source || legacySource || "beta_section";
  const locale = payload.locale || "en-CA";

  // Email format validation
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "invalid_email",
    };
  }

  if (payload.consent === false) {
    return {
      success: false,
      message: "Explicit consent is required to register for beta updates.",
      error: "consent_required",
    };
  }

  // 1. Attempt Supabase database storage if configured
  const dbResult = await insertBetaRegistrationToSupabase({
    email: cleanEmail,
    firstName: cleanFirstName || null,
    iphoneModel: cleanIphoneModel || null,
    consentMarketing: payload.consent !== false,
    locale,
    source,
  });

  // 2. Attempt Resend email notification if configured
  const resend = getResendClient();
  let emailDispatched = false;

  if (resend) {
    try {
      const recipientEmail =
        process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || "kingnarmer702@gmail.com";
      const senderEmail = process.env.NOTIFICATION_FROM_EMAIL || "onboarding@resend.dev";
      const timestamp = new Date().toISOString();

      const emailResult = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        subject: `Astrateq Gadgets — Beta Interest Request: ${cleanEmail}`,
        text: [
          "A visitor submitted a beta interest registration on Astrateq.ai:",
          "",
          `Email: ${cleanEmail}`,
          `First Name: ${cleanFirstName || "Not provided"}`,
          `iPhone Model: ${cleanIphoneModel || "Not specified"}`,
          `Consent Confirmed: ${payload.consent !== false ? "Yes" : "No"}`,
          `Locale: ${locale}`,
          `Date: ${timestamp}`,
          `Source: ${source}`,
          `Stored in Supabase: ${dbResult.saved ? "Yes" : "No"}`,
        ].join("\n"),
      });

      if (emailResult.error) {
        console.warn("[Astrateq Resend] Notification email warning:", emailResult.error);
      } else {
        emailDispatched = true;
      }

      // Add Contact to Resend
      try {
        await resend.contacts.create({
          email: cleanEmail,
          firstName: cleanFirstName || undefined,
          unsubscribed: false,
        });
      } catch (contactErr) {
        console.warn("[Astrateq Resend] Contact creation note:", contactErr);
      }

      // Optional auto-responder when custom domain or verified owner inbox is used
      const isCustomDomain = !senderEmail.includes("resend.dev");
      const isOwnerEmail = cleanEmail === recipientEmail.toLowerCase();

      if (isCustomDomain || isOwnerEmail) {
        try {
          await resend.emails.send({
            from: senderEmail,
            to: cleanEmail,
            subject: "Astrateq Gadgets — Beta Updates Request Received",
            text: `Thank you${cleanFirstName ? `, ${cleanFirstName}` : ""}, for your interest in Astrateq Gadgets. Your email has been added to our beta-updates notification list. Submitting an email does not guarantee beta access, and we will follow up if testing windows open.`,
          });
        } catch (autoErr) {
          console.warn("[Astrateq Resend] Auto-responder note:", autoErr);
        }
      }
    } catch (error: unknown) {
      console.error("[Astrateq Resend] Waitlist submission error:", error);
    }
  }

  // Truthful status reporting: only claim saved/sent when at least one real backend succeeded
  if (dbResult.saved || emailDispatched) {
    return {
      success: true,
      storedInDatabase: dbResult.saved,
      emailDispatched,
      message:
        "Thank you. Your beta-interest request has been received. Registration adds you to our update list and does not guarantee beta access.",
    };
  }

  const missingConfig: string[] = [];
  if (!resend) missingConfig.push("RESEND_API_KEY");
  if (!dbResult.configured && dbResult.missingEnvVars) {
    missingConfig.push(...dbResult.missingEnvVars);
  }

  return {
    success: false,
    storedInDatabase: false,
    emailDispatched: false,
    missingConfig,
    error: "backend_unconfigured",
    message:
      "Beta registration persistence is not yet active in this environment. Server environment variables (" +
      missingConfig.join(", ") +
      ") must be configured before submissions can be saved.",
  };
}
