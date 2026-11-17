export type Locale = "en-CA" | "fr-CA";

export type FeatureModeId = "awareness" | "drowsiness" | "distraction" | "gateway";

export interface FeatureMode {
  id: FeatureModeId;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  screenHeading: string;
  screenSubheading: string;
  statusLabel: string;
  indicators: Array<{ label: string; value: string }>;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface TechItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteCopy {
  locale: Locale;
  brand: string;
  skipToContent: string;
  nav: {
    product: string;
    technology: string;
    privacy: string;
    faq: string;
    betaAccess: string;
    requestBeta: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingHeadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    contextNote: string;
    previewLabel: string;
  };
  demonstration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    modes: FeatureMode[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
  };
  privacy: {
    eyebrow: string;
    title: string;
    subtitle: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
    auditNote: string;
  };
  technology: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TechItem[];
  };
  beta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitButton: string;
    submittingButton: string;
    consentLabel: string;
    privacyNotice: string;
    successTitle: string;
    successBody: string;
    submitAnother: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    marketNote: string;
    productHeading: string;
    legalHeading: string;
    contactHeading: string;
    privacyLink: string;
    termsLink: string;
    safetyLink: string;
    supportLink: string;
    legalDraftNote: string;
    copyright: string;
  };
}

export const EN_CA_COPY: SiteCopy = {
  locale: "en-CA",
  brand: "Astrateq.ai",
  skipToContent: "Skip to main content",
  nav: {
    product: "Product",
    technology: "Technology",
    privacy: "Privacy",
    faq: "FAQ",
    betaAccess: "Beta Access",
    requestBeta: "Request Beta Access",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    eyebrow: "iOS Pre-Release · Canada",
    headline: "Stay Aware. Stay Ahead.",
    supportingHeadline: "Intelligent Driver Awareness. Designed for iPhone.",
    description:
      "Meet Astrateq: an iOS driver-awareness experience designed to monitor visual indicators of distraction and drowsiness using on-device intelligence.",
    primaryCta: "Request Beta Access",
    secondaryCta: "Explore the Technology",
    contextNote: "Engineered for Canadian roads · Pre-release iOS interface preview",
    previewLabel: "Interface Concept · Pre-Release iOS Build",
  },
  demonstration: {
    eyebrow: "Product Capabilities",
    title: "Intelligence That Works Alongside You.",
    subtitle:
      "Explore the four core views inside the Astrateq iOS experience—from active trip monitoring to pre-drive configuration in the Driver Gateway.",
    disclaimer:
      "Interface screens below represent pre-release design and planned iOS behaviour. Astrateq is currently in beta development and has not yet completed third-party road-safety validation.",
    modes: [
      {
        id: "awareness",
        tabLabel: "Driver Awareness",
        eyebrow: "A · Driver Awareness",
        title: "Continuous Attentiveness Cues",
        description:
          "Designed to observe forward-attention indicators during your commute without cluttering your field of vision. Subtle status cues let you confirm monitoring is active at a glance.",
        screenHeading: "Active Trip Session",
        screenSubheading: "Driver Awareness",
        statusLabel: "Monitoring Active",
        indicators: [
          { label: "Session Mode", value: "On-Device" },
          { label: "Gaze Alignment", value: "Forward" },
          { label: "Alert Audio", value: "Enabled" },
        ],
      },
      {
        id: "drowsiness",
        tabLabel: "Drowsiness Monitoring",
        eyebrow: "B · Drowsiness Monitoring",
        title: "Eye-Closure & Fatigue Indicators",
        description:
          "Monitors eyelid closure patterns and blink cadence for visual signs associated with fatigue. Designed strictly as an awareness aid—not a medical device or collision-prevention guarantee.",
        screenHeading: "Fatigue Indicator Check",
        screenSubheading: "Drowsiness Monitoring",
        statusLabel: "Evaluating Blink Cadence",
        indicators: [
          { label: "Signal Source", value: "Eye Landmarks" },
          { label: "Processing", value: "Local Frame Eval" },
          { label: "Prompt State", value: "Standby" },
        ],
      },
      {
        id: "distraction",
        tabLabel: "Distraction Awareness",
        eyebrow: "C · Distraction Awareness",
        title: "Gaze & Head-Orientation Checks",
        description:
          "Evaluates head pose and gaze direction indicators to recognize sustained glances away from the roadway, surfacing an awareness prompt when attention drifts for too long.",
        screenHeading: "Attention Orientation",
        screenSubheading: "Distraction Awareness",
        statusLabel: "Tracking Head Pose",
        indicators: [
          { label: "Orientation", value: "Roadway Axis" },
          { label: "Frame Retention", value: "None Stored" },
          { label: "Feedback", value: "Visual + Chime" },
        ],
      },
      {
        id: "gateway",
        tabLabel: "Driver Gateway",
        eyebrow: "D · Driver Gateway",
        title: "Pre-Drive Control & Preferences",
        description:
          "Your starting hub before shifting into drive. Mount alignment checks, audio prompt settings, and optional trip summary sync preferences are all managed in one clear view.",
        screenHeading: "Driver Gateway",
        screenSubheading: "Pre-Drive Setup",
        statusLabel: "Ready for Mount Check",
        indicators: [
          { label: "Camera Position", value: "Check Mount" },
          { label: "Optional Sync", value: "User Controlled" },
          { label: "Safety Notice", value: "Reviewed" },
        ],
      },
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "Built for everyday commutes, explained simply.",
    subtitle:
      "Astrateq runs quietly alongside your drive in three clear steps—without requiring dedicated hardware or complicated setup.",
    steps: [
      {
        number: "01",
        title: "On-device processing",
        description:
          "Once mounted securely in your vehicle, your iPhone camera evaluates frames directly on-device using supported iOS vision and machine-learning frameworks.",
      },
      {
        number: "02",
        title: "Driver-state monitoring",
        description:
          "Implemented computer-vision routines look for visual indicators such as sustained eye closure, blink cadence changes, and head or gaze orientation away from the road.",
      },
      {
        number: "03",
        title: "Awareness feedback",
        description:
          "When supported indicators cross configured thresholds, Astrateq provides clear visual or audible awareness prompts designed to help you refocus or take a break.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy & Data Architecture",
    title: "Your Privacy Is Part of the Technology.",
    subtitle:
      "Driver-awareness tools belong in your cabin only when you know exactly what happens to your camera feed and trip data. Here is how Astrateq handles information.",
    pillars: [
      {
        title: "On-device frame evaluation",
        description:
          "Visual analysis of driver-facing camera frames is designed to run locally on your iPhone rather than streaming continuous video to cloud servers for processing.",
      },
      {
        title: "No raw video storage or upload",
        description:
          "Astrateq does not archive or upload continuous camera recordings. Frames are evaluated transiently in memory during an active session and discarded immediately after analysis.",
      },
      {
        title: "Optional, user-controlled sync",
        description:
          "Where optional synchronization with Supabase is enabled in a release, only non-video metadata—such as anonymized session counts or preference settings—may sync. You can disable optional sync.",
      },
      {
        title: "Transparent beta data handling",
        description:
          "Submitting your email on this website records your beta-access request via our email notification service so we can contact you regarding availability. We do not sell personal information.",
      },
    ],
    auditNote:
      "Accuracy & Transparency Note: Astrateq is in active pre-release development. We publish architecture details plainly and do not claim third-party privacy certifications or completed compliance audits.",
  },
  technology: {
    eyebrow: "Core Architecture",
    title: "Engineered around native iOS capabilities.",
    subtitle:
      "Every layer of Astrateq is selected for responsive local execution and predictable behaviour in Canadian driving conditions.",
    items: [
      {
        id: "ane",
        title: "Apple Neural Engine & Core ML",
        summary: "Hardware-accelerated inference on iPhone",
        detail:
          "Designed to run vision workloads on Apple silicon Neural Engine cores via Core ML and native iOS frameworks, prioritizing low-latency evaluation without external round trips.",
      },
      {
        id: "vision",
        title: "iOS Camera & Facial Landmark Pipeline",
        summary: "Structured visual indicator tracking",
        detail:
          "Evaluates geometric eye-closure ratios (EAR) and head-pose orientation from the iPhone front camera stream while respecting iOS permission controls.",
      },
      {
        id: "gateway-sync",
        title: "Driver Gateway & Optional Sync",
        summary: "Clean separation between video and metadata",
        detail:
          "Keeps real-time camera processing isolated on your handset while optionally allowing non-video session summaries to synchronize with Supabase when enabled by the user.",
      },
    ],
  },
  beta: {
    eyebrow: "Canadian Beta Program",
    title: "Be Among the First to Experience Astrateq.",
    subtitle:
      "Join the Astrateq beta-access list and receive updates about availability, testing opportunities, and product development.",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.ca",
    submitButton: "Request Beta Access",
    submittingButton: "Sending Request...",
    consentLabel:
      "I agree to receive email updates from Astrateq.ai regarding beta testing availability and product development. You may withdraw consent at any time.",
    privacyNotice:
      "Requesting beta access adds your email to our waitlist—invitations are issued in batches as testing windows open.",
    successTitle: "Beta Access Request Received",
    successBody:
      "Thank you. Your email has been recorded on the Astrateq beta-access list. We will reach out with updates when testing opportunities open for your device and region.",
    submitAnother: "Submit another email address",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers before you join the waitlist.",
    subtitle:
      "Straightforward details on compatibility, privacy, and what to expect during the upcoming beta rollout.",
    items: [
      {
        id: "what-is",
        question: "What is Astrateq?",
        answer:
          "Astrateq is an upcoming driver-awareness application for iPhone designed to monitor visual indicators of distraction and drowsiness using on-device intelligence.",
      },
      {
        id: "supported-iphones",
        question: "Which iPhones will be supported?",
        answer:
          "Final device compatibility and minimum iOS version requirements are not yet confirmed and will be announced ahead of the beta rollout. The architecture targets modern iPhones equipped with Apple Neural Engine hardware.",
      },
      {
        id: "how-monitoring-works",
        question: "How does driver-awareness monitoring work?",
        answer:
          "When your iPhone is properly mounted and an active session is running, on-device computer vision evaluates visual indicators such as eye-closure cadence and gaze or head orientation to detect signs associated with distraction or fatigue.",
      },
      {
        id: "local-processing",
        question: "Does the application process video locally?",
        answer:
          "Yes. The application architecture is designed to process camera frames locally on your iPhone in transient memory rather than sending video streams to external servers for analysis.",
      },
      {
        id: "cloud-upload",
        question: "Is video uploaded to cloud servers?",
        answer:
          "No raw driver-facing camera video is stored or uploaded to cloud servers. Any optional synchronization with Supabase—when enabled by the user—is limited to non-video metadata such as anonymized trip summary counts.",
      },
      {
        id: "distraction-detected",
        question: "What happens if the application detects signs of distraction?",
        answer:
          "Where supported, Astrateq provides a timely awareness prompt (such as an on-screen visual cue or audio alert) to remind you to return your attention to the roadway or consider resting.",
      },
      {
        id: "responsible-driving",
        question: "Does Astrateq replace responsible driving?",
        answer:
          "No. Astrateq is strictly an awareness aid. It is not an autonomous driving system, collision-avoidance tool, or medical device. The driver remains fully responsible for safe vehicle operation and compliance with Canadian distracted-driving laws.",
      },
      {
        id: "beta-availability",
        question: "When will beta access become available?",
        answer:
          "Exact TestFlight release dates will be announced to registered waitlist members as development milestones are completed. Submitting your email places you on the notification list rather than guaranteeing immediate entry.",
      },
      {
        id: "support",
        question: "How can users request support?",
        answer:
          "You can reach our team directly by email at kingnarmer702@gmail.com or open the Support information panel in the footer for pre-release inquiry details.",
      },
    ],
  },
  footer: {
    tagline:
      "Intelligent driver-awareness software for iPhone, designed in Canada with privacy-conscious on-device architecture.",
    marketNote: "Designed for Canadian roads · Expanding across North America",
    productHeading: "Navigation",
    legalHeading: "Policies & Safety",
    contactHeading: "Contact",
    privacyLink: "Privacy Notice",
    termsLink: "Terms of Use",
    safetyLink: "Safety Notice",
    supportLink: "Support",
    legalDraftNote:
      "Pre-launch informational notices. Final legal agreements will be published prior to public App Store release.",
    copyright: `© ${new Date().getFullYear()} Astrateq.ai. All rights reserved.`,
  },
};

export function getCopy(locale: Locale = "en-CA"): SiteCopy {
  // Architecture ready for professionally reviewed fr-CA localization
  switch (locale) {
    case "fr-CA":
    case "en-CA":
    default:
      return EN_CA_COPY;
  }
}
