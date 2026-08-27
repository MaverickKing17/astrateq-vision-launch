import { Resend } from "resend";

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

export interface WaitlistSubmissionResult {
  success: boolean;
  message: string;
  error?: string;
  simulated?: boolean;
}

export async function processWaitlistSubmission(
  email: string,
  source: string = "landing_page",
): Promise<WaitlistSubmissionResult> {
  const cleanEmail = email?.trim().toLowerCase();

  // Email format validation
  if (!cleanEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
      error: "invalid_email",
    };
  }

  const resend = getResendClient();

  if (!resend) {
    console.info(
      `[Astrateq Waitlist] RESEND_API_KEY not configured. Simulated capture for: ${cleanEmail} (Source: ${source})`,
    );
    return {
      success: true,
      message: "You're on the list! Check your inbox shortly for your TestFlight beta invite.",
      simulated: true,
    };
  }

  try {
    const recipientEmail =
      process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || "kingnarmer702@gmail.com";
    const senderEmail = process.env.NOTIFICATION_FROM_EMAIL || "onboarding@resend.dev";
    const timestamp = new Date().toISOString();

    // 1. Send Admin/Lead Notification Email
    try {
      const emailResult = await resend.emails.send({
        from: senderEmail,
        to: recipientEmail,
        subject: `🚀 New Beta Signup: ${cleanEmail}`,
        text: `A new user just submitted their email on the waitlist:\n\nEmail: ${cleanEmail}\nDate: ${timestamp}\nSource: ${source}`,
      });

      if (emailResult.error) {
        console.warn("[Astrateq Resend] Notification email warning:", emailResult.error);
      } else {
        console.info(
          `[Astrateq Resend] Lead notification sent for ${cleanEmail} (ID: ${emailResult.data?.id})`,
        );
      }
    } catch (notifyErr) {
      console.warn("[Astrateq Resend] Notification email send error:", notifyErr);
    }

    // 2. Add Contact to Resend (if supported by active plan/configuration)
    try {
      const contactResult = await resend.contacts.create({
        email: cleanEmail,
        unsubscribed: false,
      });
      if (contactResult.error) {
        console.warn("[Astrateq Resend] Contact creation note:", contactResult.error);
      }
    } catch (contactErr) {
      console.warn("[Astrateq Resend] Contact creation exception:", contactErr);
    }

    // 3. User Auto-responder (Only attempted if using custom domain or sending to verified owner)
    const isCustomDomain = !senderEmail.includes("resend.dev");
    const isOwnerEmail = cleanEmail === recipientEmail.toLowerCase();

    if (isCustomDomain || isOwnerEmail) {
      try {
        const autoResult = await resend.emails.send({
          from: senderEmail,
          to: cleanEmail,
          subject: "✓ You're in the Astrateq TestFlight Beta Cohort",
          text: `Thanks for joining the Astrateq Canadian Beta Cohort! We will be in touch with your TestFlight beta invite shortly.`,
        });
        if (autoResult.error) {
          console.warn("[Astrateq Resend] Auto-responder note:", autoResult.error);
        }
      } catch (autoErr) {
        console.warn("[Astrateq Resend] Auto-responder exception:", autoErr);
      }
    }

    return {
      success: true,
      message: "You're on the list! Check your inbox shortly for your TestFlight beta invite.",
    };
  } catch (error: unknown) {
    console.error("[Astrateq Resend] Waitlist submission error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Could not complete registration. Please check your email and try again.";
    return {
      success: false,
      message,
      error: "resend_error",
    };
  }
}
