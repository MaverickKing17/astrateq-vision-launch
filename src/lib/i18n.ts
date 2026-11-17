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

export interface DevelopmentStageItem {
  stage: string;
  scope: string;
  details: string;
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
    tertiaryCta: string;
    contextNote: string;
    previewLabel: string;
  };
  demonstration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    stagesHeading: string;
    stages: DevelopmentStageItem[];
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
    duplicateTitle: string;
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
    primaryAction: "Share Your Feedback",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    eyebrow: "Early-Stage iOS Concept · Canadian Market Research",
    headline: "Stay Aware. Stay Ahead.",
    supportingHeadline: "Everyday Driver Awareness. Designed for iPhone.",
    description:
      "Astrateq Gadgets is an emerging iOS application concept exploring how on-device intelligence and computer vision can help everyday drivers notice visual cues associated with distraction and drowsiness.",
    researchBanner:
      "Astrateq Gadgets is currently in an early development and consumer research phase. We are gathering feedback to understand whether driver-awareness intelligence would be valuable in everyday driving.",
    primaryCta: "Share Your Feedback",
    secondaryCta: "Explore Astrateq Gadgets",
    tertiaryCta: "Request Beta Updates",
    contextNote: "2-minute anonymous survey · No commercial launch claims · Canada",
    previewLabel: "Concept Interface Simulation · Early Development",
  },
  demonstration: {
    eyebrow: "Product Concept & Transparency",
    title: "Intelligence That Works Alongside You.",
    subtitle:
      "Explore the proposed capabilities inside the Astrateq Gadgets iOS concept—from active trip awareness cues to pre-drive setup in the Driver Gateway.",
    disclaimer:
      "Interface views above and below are concept simulations illustrating planned iOS workflows. Astrateq Gadgets is not a commercially launched product, has not completed real-world safety validation, and does not claim detection accuracy guarantees or accident prevention.",
    stagesHeading: "Development Status & Scope",
    stages: [
      {
        stage: "Implemented Today",
        scope: "Consumer Research Platform",
        details:
          "This website, interactive concept previews, anonymous market-research survey, and optional beta-update registration workflow.",
      },
      {
        stage: "Prototype / Simulation",
        scope: "iOS Concept Screens & Vision R&D",
        details:
          "Interface concepts for Driver Awareness, Drowsiness Monitoring, Distraction Awareness, and Driver Gateway; not yet validated in public road trials.",
      },
      {
        stage: "Planned Future Work",
        scope: "TestFlight Beta & Optional Sync",
        details:
          "iOS TestFlight testing builds, supported device matrix, and optional non-video trip count synchronization if consumer research supports further investment.",
      },
    ],
    modes: [
      {
        id: "awareness",
        tabLabel: "Driver Awareness",
        eyebrow: "A · Driver Awareness",
        title: "Continuous Attentiveness Cues",
        description:
          "Explores observing forward-attention indicators during everyday commutes without cluttering your field of view. Subtle status cues let drivers see intended monitoring state at a glance.",
        screenHeading: "Concept Trip View",
        screenSubheading: "Driver Awareness",
        statusLabel: "Simulation · On-Device Concept",
        indicators: [
          { label: "Intended Mode", value: "On-Device" },
          { label: "Gaze Target", value: "Forward" },
          { label: "Audio Cue", value: "Configurable" },
        ],
      },
      {
        id: "drowsiness",
        tabLabel: "Drowsiness Monitoring",
        eyebrow: "B · Drowsiness Monitoring",
        title: "Eye-Closure & Fatigue Indicators",
        description:
          "Explores evaluating eyelid closure patterns and blink cadence for visual cues associated with fatigue—strictly as an awareness prompt, not a medical device or safety guarantee.",
        screenHeading: "Concept Fatigue View",
        screenSubheading: "Drowsiness Monitoring",
        statusLabel: "Simulation · Blink Cadence",
        indicators: [
          { label: "Visual Cue", value: "Eye Landmarks" },
          { label: "Intended Eval", value: "In-Memory" },
          { label: "Prompt State", value: "Standby" },
        ],
      },
      {
        id: "distraction",
        tabLabel: "Distraction Awareness",
        eyebrow: "C · Distraction Awareness",
        title: "Gaze & Head-Orientation Checks",
        description:
          "Explores evaluating head pose and gaze direction indicators to recognize sustained glances away from the roadway, surfacing an awareness prompt when attention drifts.",
        screenHeading: "Concept Attention View",
        screenSubheading: "Distraction Awareness",
        statusLabel: "Simulation · Head Pose",
        indicators: [
          { label: "Orientation", value: "Roadway Axis" },
          { label: "Video Upload", value: "Not Planned" },
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
        statusLabel: "Concept · Mount Check",
        indicators: [
          { label: "Camera View", value: "Check Mount" },
          { label: "Optional Sync", value: "User Opt-In" },
          { label: "Safety Notice", value: "Required" },
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
          "Planned computer-vision routines evaluate visual indicators such as sustained eye closure, blink cadence changes, and head or gaze orientation away from the road.",
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
      "Everyday drivers deserve plain answers about what this website collects today and how camera data is intended to be handled in the iOS concept.",
    pillars: [
      {
        title: "Intended on-device camera processing",
        description:
          "In the proposed iOS app architecture, driver-facing camera frames are intended to be evaluated locally in transient memory on your iPhone—not streamed or stored as cloud video.",
      },
      {
        title: "Optional sync & telemetry scope",
        description:
          "Where optional Supabase synchronization or diagnostics are offered in future builds, they are limited to non-video metadata (such as opt-in summary counts) and can be disabled.",
      },
      {
        title: "Website survey & beta separation",
        description:
          "This website does not access your camera. Anonymous survey answers do not require an email address and are stored separately from optional beta-update registrations.",
      },
      {
        title: "Data retention & removal",
        description:
          "Research responses and optional beta registrations are retained only while evaluating product feasibility and managing requested updates. You can request removal of your beta email anytime.",
      },
    ],
    auditNote:
      "Transparency Note: Astrateq Gadgets is in early development and consumer research. We do not claim third-party privacy certifications, security certifications, or completed compliance audits.",
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
        summary: "Target on-device inference path",
        detail:
          "Intended to execute vision workloads on Apple silicon Neural Engine cores via Core ML, supporting responsive on-device evaluation without continuous server round trips.",
      },
      {
        id: "vision",
        title: "iOS Camera & Facial Landmark Pipeline",
        summary: "Structured visual indicator tracking",
        detail:
          "Planned to evaluate geometric eye-closure ratios and head-pose orientation from the front camera feed while respecting standard iOS camera permission controls.",
      },
      {
        id: "gateway-sync",
        title: "Driver Gateway & Optional Sync",
        summary: "Clear separation between video and metadata",
        detail:
          "Designed to keep real-time camera processing isolated on your iPhone while optionally allowing non-video session summaries to synchronize with Supabase when enabled by the user.",
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
    title: "Request Beta Updates.",
    subtitle:
      "Separate from the survey above, you can leave your email if you would like to receive occasional updates on Astrateq Gadgets development and potential future testing opportunities.",
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
    submitButton: "Request Beta Updates",
    submittingButton: "Submitting...",
    consentLabel:
      "I consent to receive occasional email updates from Astrateq Gadgets (Astrateq.ai) regarding product development and future beta testing opportunities. I understand I can withdraw consent at any time.",
    privacyNotice:
      "Registering adds you only to our beta-update list and does not guarantee beta access or require purchasing anything. Survey respondents are never subscribed automatically.",
    successTitle: "Beta Update Request Received",
    duplicateTitle: "Already on Update List",
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
          "In the proposed iOS concept architecture, camera frames are intended to be evaluated locally on your iPhone in transient memory rather than streaming continuous video to cloud servers. This website itself does not access your camera.",
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
          "Where supported in future builds, the concept provides a visual or audible awareness prompt designed to remind the driver to refocus on the road or consider taking a rest break.",
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
