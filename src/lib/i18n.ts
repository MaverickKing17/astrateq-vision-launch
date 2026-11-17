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

export interface SurveyQuestionCopy {
  id:
    | "drivingFrequency"
    | "productInterest"
    | "valuableCapabilities"
    | "privacyImportance"
    | "adoptionConcerns"
    | "everydayUsageLikelihood"
    | "additionalFeedback";
  stepLabel: string;
  prompt: string;
  helperText?: string;
  type: "single" | "multi" | "text";
  options?: string[];
  exclusiveOption?: string;
  otherOption?: string;
  placeholder?: string;
}

export interface SiteCopy {
  locale: Locale;
  brand: string;
  skipToContent: string;
  nav: {
    product: string;
    survey: string;
    privacy: string;
    faq: string;
    betaAccess: string;
    primaryAction: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    supportingHeadline: string;
    description: string;
    researchBanner: string;
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
  survey: {
    eyebrow: string;
    title: string;
    subtitle: string;
    transparencyNote: string;
    timeEstimate: string;
    privacySummary: string;
    backButton: string;
    skipButton: string;
    continueButton: string;
    reviewButton: string;
    submitButton: string;
    submittingButton: string;
    reviewTitle: string;
    reviewSubtitle: string;
    editLabel: string;
    skippedLabel: string;
    noEmailBadge: string;
    questions: SurveyQuestionCopy[];
  };
  beta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    emailPlaceholder: string;
    firstNameLabel: string;
    firstNamePlaceholder: string;
    iphoneModelLabel: string;
    iphoneModelOptions: string[];
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
  brand: "Astrateq Gadgets",
  skipToContent: "Skip to main content",
  nav: {
    product: "Product",
    survey: "Survey",
    privacy: "Privacy",
    faq: "FAQ",
    betaAccess: "Beta Updates",
    primaryAction: "Take Survey",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    eyebrow: "Early-Stage iOS Concept · Canadian Market Research",
    headline: "Stay Aware. Stay Ahead.",
    supportingHeadline: "Intelligent Driver Awareness. Designed for iPhone.",
    description:
      "Astrateq Gadgets is an emerging iOS application concept exploring how on-device intelligence and computer vision can help everyday drivers become more aware of visual indicators associated with distraction and drowsiness.",
    researchBanner:
      "Astrateq Gadgets is currently in an early development and consumer research phase. We are gathering feedback to understand whether driver-awareness intelligence would be valuable in everyday driving.",
    primaryCta: "Help Shape the Concept (2-Min Survey)",
    secondaryCta: "Explore the Technology",
    contextNote: "Early-stage iOS concept · No commercial launch claims · Canada",
    previewLabel: "Concept Interface Preview · Early Development",
  },
  demonstration: {
    eyebrow: "Product Concept",
    title: "Intelligence That Works Alongside You.",
    subtitle:
      "Explore the proposed capabilities inside the Astrateq Gadgets iOS concept—from active trip awareness cues to pre-drive setup in the Driver Gateway.",
    disclaimer:
      "Interface views below illustrate an early-stage iOS concept under active exploration. Astrateq Gadgets is not yet a commercially released product, has not completed third-party road-safety validation, and does not guarantee accident prevention.",
    modes: [
      {
        id: "awareness",
        tabLabel: "Driver Awareness",
        eyebrow: "A · Driver Awareness",
        title: "Continuous Attentiveness Cues",
        description:
          "Explores observing forward-attention indicators during everyday commutes without cluttering your field of view. Subtle status cues let drivers confirm monitoring is active at a glance.",
        screenHeading: "Active Trip Concept",
        screenSubheading: "Driver Awareness",
        statusLabel: "Monitoring Concept",
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
          "Designed to evaluate eyelid closure patterns and blink cadence for visual cues associated with fatigue—strictly as an awareness prompt, not a medical device or safety guarantee.",
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
          "Evaluates head pose and gaze direction indicators to recognize sustained glances away from the roadway, surfacing an awareness prompt when attention drifts.",
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
          "The proposed starting hub before shifting into drive. Mount alignment checks, audio prompt settings, and optional trip summary sync controls live in one clear screen.",
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
    title: "Built around everyday commutes, explained simply.",
    subtitle:
      "The Astrateq Gadgets concept is designed to run quietly alongside a regular drive in three clear steps—without dedicated hardware.",
    steps: [
      {
        number: "01",
        title: "On-device processing",
        description:
          "When mounted securely in your vehicle, your iPhone camera is intended to evaluate frames locally using supported iOS vision and machine-learning frameworks.",
      },
      {
        number: "02",
        title: "Driver-state monitoring",
        description:
          "Computer-vision routines evaluate visual indicators such as sustained eye closure, blink cadence changes, and head or gaze orientation away from the road.",
      },
      {
        number: "03",
        title: "Awareness feedback",
        description:
          "When supported visual indicators suggest sustained distraction or fatigue, the concept surfaces visual or audible prompts designed to encourage refocusing or taking a break.",
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy & Data Transparency",
    title: "Your Privacy Is Part of the Technology.",
    subtitle:
      "Everyday drivers should know exactly how camera data and optional metrics are handled before considering an in-cabin app. Here is our intended architecture.",
    pillars: [
      {
        title: "On-device frame evaluation",
        description:
          "Visual analysis of driver-facing camera frames is designed to run locally on your iPhone rather than streaming continuous video to cloud servers.",
      },
      {
        title: "No raw video storage or upload",
        description:
          "Astrateq Gadgets is designed not to archive or upload continuous camera recordings. Frames are evaluated transiently in memory and discarded after analysis.",
      },
      {
        title: "Optional, user-controlled sync",
        description:
          "Where optional synchronization with Supabase is enabled in a build, only non-video metadata—such as session counts or user preferences—may sync, and users can disable it.",
      },
      {
        title: "Separate research & beta data",
        description:
          "Consumer survey responses on this website are collected without requiring your email address and stored separately from optional beta-update registrations.",
      },
    ],
    auditNote:
      "Transparency Note: Astrateq Gadgets is in early development and consumer research. We describe our architecture plainly and do not claim completed compliance certifications or third-party audits.",
  },
  technology: {
    eyebrow: "Core Architecture",
    title: "Designed around native iOS capabilities.",
    subtitle:
      "We are exploring native Apple iOS frameworks to evaluate visual cues smoothly on existing iPhone hardware.",
    items: [
      {
        id: "ane",
        title: "Apple Neural Engine & Core ML",
        summary: "Hardware-accelerated inference on iPhone",
        detail:
          "Structured to execute vision workloads on Apple silicon Neural Engine cores via Core ML, supporting responsive on-device evaluation without continuous server round trips.",
      },
      {
        id: "vision",
        title: "iOS Camera & Facial Landmark Pipeline",
        summary: "Structured visual indicator tracking",
        detail:
          "Evaluates geometric eye-closure ratios and head-pose orientation from the front camera feed while respecting standard iOS camera permission controls.",
      },
      {
        id: "gateway-sync",
        title: "Driver Gateway & Optional Sync",
        summary: "Clear separation between video and metadata",
        detail:
          "Keeps real-time camera processing isolated on your iPhone while optionally allowing non-video session summaries to synchronize with Supabase when enabled by the user.",
      },
    ],
  },
  survey: {
    eyebrow: "Consumer Market Research · 2–3 Minutes",
    title: "Help Shape the Future of Driver Awareness.",
    subtitle:
      "We're researching whether driver-awareness intelligence could become a useful part of everyday driving. Your feedback will help us understand what drivers value, what concerns them, and what features would make an application like Astrateq Gadgets worth using.",
    transparencyNote:
      "Astrateq Gadgets is currently in an early development and consumer research phase. Survey participation is anonymous, does not require purchasing anything, does not subscribe you to marketing emails, and does not guarantee beta access.",
    timeEstimate: "7 short questions · Approx. 2–3 minutes",
    privacySummary:
      "No email address or personal contact details are requested in this survey. Anonymous answers are used solely for product feasibility and consumer interest research.",
    backButton: "Back",
    skipButton: "Skip question",
    continueButton: "Continue",
    reviewButton: "Review answers",
    submitButton: "Submit Survey Feedback",
    submittingButton: "Saving Survey...",
    reviewTitle: "Review Your Feedback",
    reviewSubtitle:
      "Confirm or edit your responses below before submitting. No email address is collected.",
    editLabel: "Edit",
    skippedLabel: "Skipped",
    noEmailBadge: "No email required · Strictly separate from beta updates",
    questions: [
      {
        id: "drivingFrequency",
        stepLabel: "Question 1 of 7 · Driving frequency",
        prompt: "How often do you drive?",
        type: "single",
        options: [
          "Every day.",
          "Several times a week.",
          "Once a week.",
          "Occasionally.",
          "Rarely.",
        ],
      },
      {
        id: "productInterest",
        stepLabel: "Question 2 of 7 · Product interest",
        prompt:
          "Would you consider using an iPhone application designed to help monitor visual indicators associated with driver distraction and drowsiness?",
        type: "single",
        options: [
          "Definitely interested.",
          "Probably interested.",
          "Not sure yet.",
          "Probably not interested.",
          "Not interested.",
        ],
      },
      {
        id: "valuableCapabilities",
        stepLabel: "Question 3 of 7 · Most valuable functionality",
        prompt: "Which capabilities would interest you most?",
        helperText: "Select all that apply.",
        type: "multi",
        otherOption: "Other.",
        options: [
          "Driver distraction awareness.",
          "Drowsiness-related monitoring.",
          "Real-time awareness notifications.",
          "On-device AI processing.",
          "Privacy-focused camera processing.",
          "Driving activity insights.",
          "Other.",
        ],
      },
      {
        id: "privacyImportance",
        stepLabel: "Question 4 of 7 · Privacy preferences",
        prompt:
          "How important is it to you that camera-based driver monitoring is processed directly on your iPhone rather than uploaded to cloud servers?",
        type: "single",
        options: [
          "Extremely important.",
          "Very important.",
          "Somewhat important.",
          "Not particularly important.",
          "I would need more information.",
        ],
      },
      {
        id: "adoptionConcerns",
        stepLabel: "Question 5 of 7 · Adoption concerns",
        prompt: "What would make you hesitant to use an application like this?",
        helperText: "Select all that apply.",
        type: "multi",
        exclusiveOption: "I have no major concerns.",
        otherOption: "Other.",
        options: [
          "Privacy and camera access.",
          "Battery consumption.",
          "iPhone compatibility.",
          "Accuracy and reliability.",
          "Too many notifications.",
          "Subscription or purchase cost.",
          "Distracting interface.",
          "I have no major concerns.",
          "Other.",
        ],
      },
      {
        id: "everydayUsageLikelihood",
        stepLabel: "Question 6 of 7 · Potential usage",
        prompt:
          "If an application like this met your expectations, how likely would you be to use it during everyday driving?",
        type: "single",
        options: ["Very likely.", "Likely.", "Unsure.", "Unlikely.", "Very unlikely."],
      },
      {
        id: "additionalFeedback",
        stepLabel: "Question 7 of 7 · Additional feedback (Optional)",
        prompt:
          "Is there anything you would want an application like Astrateq Gadgets to do differently or better?",
        helperText: "Optional — share any thoughts, concerns, or everyday driving scenarios.",
        type: "text",
        placeholder: "Share your thoughts (optional)...",
      },
    ],
  },
  beta: {
    eyebrow: "Optional Future Beta Updates",
    title: "Follow Product Development & Future Testing.",
    subtitle:
      "Separate from the survey above, you can leave your email if you would like to receive updates on Astrateq Gadgets availability and potential testing opportunities.",
    emailLabel: "Email address (required)",
    emailPlaceholder: "name@example.ca",
    firstNameLabel: "First name (optional)",
    firstNamePlaceholder: "Optional",
    iphoneModelLabel: "iPhone model of interest (optional)",
    iphoneModelOptions: [
      "Prefer not to say",
      "iPhone 16 / 16 Pro series",
      "iPhone 15 / 15 Pro series",
      "iPhone 14 / 14 Pro series",
      "iPhone 13 series",
      "Older or other iPhone model",
    ],
    submitButton: "Register for Beta Updates",
    submittingButton: "Registering...",
    consentLabel:
      "I consent to receive occasional email updates from Astrateq Gadgets (Astrateq.ai) regarding product development and future beta testing opportunities. I understand I can withdraw consent at any time.",
    privacyNotice:
      "Registering adds you only to our beta-update list and does not guarantee beta access or require purchasing anything. Survey respondents are never subscribed automatically.",
    successTitle: "Beta Update Request Recorded",
    successBody:
      "Thank you. Your interest in receiving future Astrateq Gadgets updates has been noted. Registering does not guarantee beta access, and we will only contact you if testing opportunities or development updates are shared.",
    submitAnother: "Register another email address",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear answers about our research & concept.",
    subtitle:
      "Honest details on the current development stage, compatibility plans, privacy architecture, and participation.",
    items: [
      {
        id: "what-is",
        question: "What is Astrateq Gadgets?",
        answer:
          "Astrateq Gadgets is an early-stage iOS application concept exploring how on-device intelligence and computer vision can help everyday drivers become more aware of visual indicators associated with distraction and drowsiness.",
      },
      {
        id: "supported-iphones",
        question: "Which iPhones will be supported?",
        answer:
          "Final hardware compatibility and minimum iOS requirements have not been finalized and will be announced if the product advances to public beta testing. Our research currently focuses on modern iPhones equipped with Apple Neural Engine hardware.",
      },
      {
        id: "how-monitoring-works",
        question: "How does driver-awareness monitoring work?",
        answer:
          "In the proposed workflow, your iPhone is mounted securely in view of the driver, and on-device computer vision evaluates visual indicators such as eye-closure cadence and head or gaze orientation while a session is active.",
      },
      {
        id: "local-processing",
        question: "Does the application process video locally?",
        answer:
          "Yes—the architecture is designed to evaluate camera frames locally on your iPhone in transient memory rather than streaming continuous video to cloud servers.",
      },
      {
        id: "cloud-upload",
        question: "Is video uploaded to cloud servers?",
        answer:
          "No raw driver-facing camera video is intended to be stored or uploaded to cloud servers. Where optional Supabase synchronization is offered in future builds, it is limited to non-video metadata (such as summary counts) and can be disabled.",
      },
      {
        id: "distraction-detected",
        question: "What happens if the application detects signs of distraction?",
        answer:
          "Where supported, the concept provides a visual or audible awareness prompt designed to remind the driver to refocus on the road or consider taking a rest break.",
      },
      {
        id: "responsible-driving",
        question: "Does Astrateq Gadgets replace responsible driving?",
        answer:
          "No. Astrateq Gadgets is strictly an exploratory awareness aid. It is not an autonomous driving system, medical device, or accident-prevention guarantee. Drivers remain fully responsible for safe vehicle operation and obeying Canadian road laws.",
      },
      {
        id: "beta-availability",
        question: "When will beta access become available?",
        answer:
          "Astrateq Gadgets is currently in an early development and consumer market research phase. Any future testing dates will be shared with registered update subscribers if we proceed to beta trials.",
      },
      {
        id: "support",
        question: "How can users ask questions or request support?",
        answer:
          "You can email kingnarmer702@gmail.com directly or open the Support information panel in the footer.",
      },
    ],
  },
  footer: {
    tagline:
      "An early-stage iOS driver-awareness concept exploring privacy-conscious on-device intelligence for everyday driving.",
    marketNote: "Consumer market research · Canada & North America",
    productHeading: "Navigation",
    legalHeading: "Policies & Notices",
    contactHeading: "Contact",
    privacyLink: "Privacy Notice",
    termsLink: "Research & Beta Terms",
    safetyLink: "Safety Notice",
    supportLink: "Support",
    legalDraftNote:
      "Pre-release informational notices for consumer research. Full legal documents will be published prior to any public release.",
    copyright: `© ${new Date().getFullYear()} Astrateq Gadgets (Astrateq.ai). All rights reserved.`,
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
