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
      `[Astrateq Waitlist] RESEND_API_KEY not configured in environment. Successfully simulated capture for: ${cleanEmail} (Source: ${source})`,
    );
    return {
      success: true,
      message: "You're on the list! Check your inbox shortly for your TestFlight beta invite.",
      simulated: true,
    };
  }

  try {
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Astrateq Gadgets <onboarding@resend.dev>";

    // 1. Add contact to Resend Audience if configured
    if (audienceId) {
      try {
        await resend.contacts.create({
          email: cleanEmail,
          unsubscribed: false,
          audienceId,
        });
      } catch (contactErr) {
        console.warn("[Astrateq Resend] Note on audience contact creation:", contactErr);
      }
    }

    // 2. Send automated welcome/confirmation email to the subscriber
    try {
      await resend.emails.send({
        from: fromAddress,
        to: [cleanEmail],
        subject: "✓ You're in the Astrateq TestFlight Beta Cohort",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #080B11; color: #FFFFFF; padding: 40px 20px;">
            <div style="max-width: 560px; margin: 0 auto; background: #0E1420; border: 1px solid #223046; border-radius: 16px; padding: 32px; box-shadow: 0 12px 32px rgba(0,0,0,0.5);">
              <div style="display: inline-block; padding: 4px 12px; background: rgba(0, 242, 254, 0.1); border: 1px solid rgba(0, 242, 254, 0.4); border-radius: 6px; font-family: monospace; font-size: 12px; color: #00F0FF; margin-bottom: 16px; font-weight: bold;">
                TESTFLIGHT BETA ACCESS · 500 COHORT
              </div>
              <h1 style="color: #FFFFFF; font-size: 24px; font-weight: 700; margin: 0 0 16px 0; letter-spacing: -0.02em;">
                Welcome to Astrateq Gadgets
              </h1>
              <p style="color: #94A3B8; font-size: 15px; line-height: 1.6; margin: 0 0 20px 0;">
                Your spot has been reserved for the Canadian Winter Commuter Beta Cohort. You will receive priority TestFlight builds featuring zero-cloud, 100% on-device NPU road intelligence.
              </p>
              <div style="background: #131B29; border: 1px solid #223046; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                <p style="color: #00F0FF; font-size: 12px; font-weight: bold; margin: 0 0 6px 0; font-family: monospace; letter-spacing: 0.05em;">
                  NEXT ROLLOUT WAVE
                </p>
                <p style="color: #E2E8F0; font-size: 14px; margin: 0; line-height: 1.5;">
                  We are releasing TestFlight access in batches of 100. Watch for an invite directly from Apple TestFlight or our team.
                </p>
              </div>
              <p style="color: #64748B; font-size: 12px; margin: 0; border-top: 1px solid #1E293B; padding-top: 16px;">
                © 2026 Astrateq Gadgets • On-Device AI • Engineered for Canadian Roads
              </p>
            </div>
          </div>
        `,
      });
    } catch (emailErr) {
      console.warn("[Astrateq Resend] Confirmation email note:", emailErr);
    }

    // 3. Optional: Forward lead notification to admin/founder
    if (notificationEmail) {
      try {
        await resend.emails.send({
          from: fromAddress,
          to: [notificationEmail],
          subject: `⚡ New Astrateq Beta Lead: ${cleanEmail}`,
          text: `A new driver has registered for the Astrateq Canadian Beta Cohort!\n\nEmail: ${cleanEmail}\nSource: ${source}\nTimestamp: ${new Date().toISOString()}`,
        });
      } catch (notifyErr) {
        console.warn("[Astrateq Resend] Admin notification note:", notifyErr);
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
