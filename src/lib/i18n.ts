export type Locale = "en-CA" | "fr-CA";

export type FeatureModeId = "gateway" | "awareness" | "drowsiness" | "feedback";

export interface FeatureMode {
  id: FeatureModeId;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  screenHeading: string;
  screenSubheading: string;
  statusLabel: string;
  ringTitle: string;
  ringSubtitle: string;
  indicators: Array<{ label: string; value: string }>;
}

export interface ProductPillarCard {
  id: string;
  title: string;
  description: string;
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
    overview: string;
    howItWorks: string;
    technology: string;
    privacy: string;
    research: string;
    faq: string;
    primaryAction: string;
    secondaryAction: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    headlineLine1: string;
    headlineLine2: string;
    supportingHeadline: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stageIndicator: string;
    previewLabel: string;
  };
  highlights: Array<{
    title: string;
    subtitle: string;
  }>;
  productExplanation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cards: ProductPillarCard[];
    disclaimer: string;
    stagesHeading: string;
    stages: DevelopmentStageItem[];
    modesHeading: string;
    modes: FeatureMode[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: HowItWorksStep[];
    responsibilityNote: string;
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
    policyLinkLabel: string;
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
    introMeta: string;
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
    stageNote: string;
    marketNote: string;
    navigationHeading: string;
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
    overview: "Overview",
    howItWorks: "How It Works",
    technology: "Technology",
    privacy: "Privacy",
    research: "Consumer Research",
    faq: "FAQ",
    primaryAction: "Share Your Interest",
    secondaryAction: "Explore the App",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  hero: {
    badge: "Consumer Market Research",
    headlineLine1: "Stay Aware.",
    headlineLine2: "Stay Ahead.",
    supportingHeadline: "Discover a new perspective on everyday driving.",
    description:
      "Astrateq Gadgets is an emerging driver-awareness intelligence experience for iPhone, exploring how on-device computer vision can help drivers become more aware of visual indicators associated with distraction and drowsiness.",
    primaryCta: "Share Your Interest",
    secondaryCta: "Explore the Technology",
    stageIndicator: "Early-stage iOS application · Consumer research underway",
    previewLabel: "Illustrative iOS interface concept · Early development simulation",
  },
  highlights: [
    {
      title: "Driver Awareness",
      subtitle: "Explore visual attention indicators.",
    },
    {
      title: "Drowsiness Monitoring",
      subtitle: "Evaluate eye-closure cadence cues.",
    },
    {
      title: "Privacy Conscious",
      subtitle: "Designed for local camera evaluation.",
    },
    {
      title: "Built for iPhone",
      subtitle: "Exploring native iOS capabilities.",
    },
  ],
  productExplanation: {
    eyebrow: "Product Concept",
    title: "Driver Awareness, Reimagined.",
    subtitle:
      "Astrateq Gadgets explores how computer vision and on-device intelligence on iPhone can evaluate visual indicators associated with driver attention and drowsiness—without dedicated aftermarket hardware.",
    cards: [
      {
        id: "awareness",
        title: "Driver Awareness",
        description:
          "Explores monitoring relevant visual indicators associated with driver attention, such as sustained head or gaze orientation away from the roadway during a drive.",
      },
      {
        id: "drowsiness",
        title: "Drowsiness-Related Monitoring",
        description:
          "Explores evaluating eye-closure patterns and other implemented visual indicators to surface timely awareness prompts—strictly as an informational aid, never as a medical device or accident-prevention guarantee.",
      },
      {
        id: "privacy-processing",
        title: "Privacy-Conscious Processing",
        description:
          "Designed so driver-facing camera frames are evaluated locally on your iPhone in transient memory rather than streamed as cloud video, clearly separating on-device vision from optional non-video metadata.",
      },
    ],
    disclaimer:
      "All iPhone interface previews shown on this page are concept simulations illustrating intended iOS workflows. Astrateq Gadgets is in early development and consumer market research, is not a commercially launched product, and makes no guarantee of detection accuracy or accident prevention.",
    stagesHeading: "Development Status & Transparency",
    stages: [
      {
        stage: "Implemented Today",
        scope: "Consumer Research Experience",
        details:
          "This Astrateq Gadgets website, interactive concept previews, anonymous 7-question consumer survey, and optional beta-interest registration.",
      },
      {
        stage: "Prototype / Simulation",
        scope: "iOS Concept Screens & Vision R&D",
        details:
          "Design and computer-vision exploration for Driver Gateway, Driver Awareness, Drowsiness Monitoring, and Awareness Feedback; not yet road-validated.",
      },
      {
        stage: "Planned Future Work",
        scope: "Beta Testing & Optional Sync",
        details:
          "Initial iOS testing builds, supported iPhone compatibility validation, and optional non-video summary synchronization if consumer interest supports further development.",
      },
    ],
    modesHeading: "Intended iOS Experience Previews",
    modes: [
      {
        id: "gateway",
        tabLabel: "Driver Gateway",
        eyebrow: "Pre-Drive Hub",
        title: "Driver Gateway",
        description:
          "The starting point before shifting into drive. Drivers verify phone mount alignment, choose audio or visual prompt preferences, and manage optional summary sync settings.",
        screenHeading: "Driver Gateway",
        screenSubheading: "Pre-Drive Setup",
        statusLabel: "Concept · Setup Check",
        ringTitle: "Mount Check",
        ringSubtitle: "Pre-Drive Concept",
        indicators: [
          { label: "Mount Alignment", value: "Check View" },
          { label: "Audio Prompts", value: "Configurable" },
        ],
      },
      {
        id: "awareness",
        tabLabel: "Driver Awareness",
        eyebrow: "Active Session View",
        title: "Driver Awareness",
        description:
          "Explores evaluating forward-attention visual cues on-device during regular commutes, displaying a calm, uncluttered status summary.",
        screenHeading: "Driver Focus",
        screenSubheading: "Driver Awareness",
        statusLabel: "Simulation · On-Device Concept",
        ringTitle: "Driver Focus",
        ringSubtitle: "Concept Preview",
        indicators: [
          { label: "Attention Monitor", value: "Illustrative" },
          { label: "Drowsiness Check", value: "Illustrative" },
        ],
      },
      {
        id: "drowsiness",
        tabLabel: "Drowsiness Monitoring",
        eyebrow: "Fatigue Indicator Evaluation",
        title: "Drowsiness-Related Monitoring",
        description:
          "Explores evaluating eye-closure duration and blink cadence patterns associated with driver fatigue, intended strictly as a supportive awareness cue.",
        screenHeading: "Fatigue Cues",
        screenSubheading: "Drowsiness Check",
        statusLabel: "Simulation · Eye Landmarks",
        ringTitle: "Blink Cadence",
        ringSubtitle: "On-Device Concept",
        indicators: [
          { label: "Eye Landmarks", value: "Transient RAM" },
          { label: "Cloud Video", value: "Not Streamed" },
        ],
      },
      {
        id: "feedback",
        tabLabel: "Awareness Feedback",
        eyebrow: "Prompt & Notification Concept",
        title: "Gentle Awareness Feedback",
        description:
          "Where implemented in future builds, subtle visual or audible cues remind drivers to refocus attention on the road or consider taking a break.",
        screenHeading: "Focus Prompt",
        screenSubheading: "Awareness Cue",
        statusLabel: "Simulation · Audio + Visual",
        ringTitle: "Prompt Active",
        ringSubtitle: "Concept Alert",
        indicators: [
          { label: "Visual Cue", value: "High Contrast" },
          { label: "Audio Chime", value: "Optional" },
        ],
      },
    ],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "Four straightforward steps around your commute.",
    subtitle:
      "Designed to integrate cleanly into everyday driving routines without extra dash-mounted cameras or complex setup.",
    steps: [
      {
        number: "01",
        title: "Open the Application",
        description:
          "The driver launches Astrateq Gadgets on their securely mounted iPhone before beginning a trip.",
      },
      {
        number: "02",
        title: "Start the Experience",
        description:
          "The user enters the Driver Gateway and selects the intended driver-awareness session experience.",
      },
      {
        number: "03",
        title: "On-Device Analysis",
        description:
          "Where implemented in prototype vision pipelines, the iPhone camera evaluates visual indicators locally in transient memory.",
      },
      {
        number: "04",
        title: "Awareness Feedback",
        description:
          "Where implemented, the application communicates subtle visual or audible notifications encouraging driver focus.",
      },
    ],
    responsibilityNote:
      "Driver Responsibility: Astrateq Gadgets is an exploratory awareness concept. It never replaces attentive, responsible driving practices and cannot guarantee detection of every distraction or drowsiness event.",
  },
  privacy: {
    eyebrow: "Privacy & Architecture",
    title: "Technology Designed With Privacy in Mind.",
    subtitle:
      "Drivers deserve clarity on what runs locally on their iPhone, what camera permissions are required, and what information does or does not leave the device.",
    pillars: [
      {
        title: "On-device camera evaluation",
        description:
          "Camera access is requested solely during active monitoring sessions so visual indicators can be processed locally on iPhone hardware.",
      },
      {
        title: "No video frame storage",
        description:
          "Raw driver-facing camera frames are evaluated in transient device memory and discarded rather than saved as recorded clips or uploaded to cloud servers.",
      },
      {
        title: "Distinct from network telemetry",
        description:
          'Unlike local camera video, any optional account sync, diagnostics, or feedback telemetry uses standard encrypted network requests—we never make blanket "zero cloud processing" claims.',
      },
      {
        title: "Optional synchronization controls",
        description:
          "If future builds offer optional Supabase session summaries, sharing remains opt-in, limited to non-video metadata, and separate from this anonymous research survey.",
      },
    ],
    auditNote:
      "Transparency Note: Astrateq Gadgets is in early development and consumer market research. We do not claim third-party security certifications, completed compliance audits, or guaranteed absolute privacy.",
    policyLinkLabel: "Read our Privacy Policy",
  },
  technology: {
    eyebrow: "Technical Architecture",
    title: "Exploring native iOS intelligence.",
    subtitle:
      "Evaluating Apple silicon capabilities to keep real-time visual analysis responsive on everyday iPhones across changing Canadian daylight and winter conditions.",
    items: [
      {
        id: "ane",
        title: "Apple Neural Engine & Core ML",
        summary: "Intended on-device execution",
        detail:
          "Designed to run compact vision inference locally on iPhone Neural Engine hardware without continuous server round trips for frame evaluation.",
      },
      {
        id: "vision",
        title: "Front Camera & Visual Indicators",
        summary: "Eye-closure & gaze cues",
        detail:
          "Explores evaluating facial landmark geometry, blink cadence, and head-orientation cues strictly while an awareness session is active.",
      },
      {
        id: "separation",
        title: "Video vs. Metadata Separation",
        summary: "Controlled optional sync",
        detail:
          "Architecture isolates raw camera streams inside transient memory on the device, keeping any optional future backend communication strictly non-video.",
      },
    ],
  },
  survey: {
    eyebrow: "Integrated Consumer Research",
    title: "Help Shape the Future of Driver Awareness.",
    subtitle:
      "We're exploring whether driver-awareness intelligence could become a useful part of everyday driving. Your feedback will help us understand what drivers value, what concerns them, and what would make an application like Astrateq Gadgets worth using.",
    introMeta: "2–3 minutes · Optional participation · No purchase required",
    transparencyNote:
      "Astrateq Gadgets is an early-stage iOS concept conducting consumer market research. Survey participation is anonymous, does not require an email address, and never subscribes you to marketing communications.",
    timeEstimate: "7 questions · 2–3 minutes",
    privacySummary:
      "No email or contact information is requested in this survey. Answers are stored anonymously for consumer product research only.",
    backButton: "Back",
    skipButton: "Skip question",
    continueButton: "Continue",
    reviewButton: "Review Answers",
    submitButton: "Submit Research Survey",
    submittingButton: "Saving Responses...",
    reviewTitle: "Review Your Responses",
    reviewSubtitle:
      "Check or edit your answers below before submitting. No email address is required.",
    editLabel: "Edit",
    skippedLabel: "Skipped",
    noEmailBadge: "Anonymous research · No email required · Separate from beta registration",
    questions: [
      {
        id: "drivingFrequency",
        stepLabel: "Question 1 of 7 · Driving Frequency",
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
        stepLabel: "Question 2 of 7 · Product Interest",
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
        stepLabel: "Question 3 of 7 · Desired Capabilities",
        prompt: "Which features would interest you most?",
        helperText: "Select all that apply.",
        type: "multi",
        otherOption: "Other.",
        options: [
          "Driver distraction awareness.",
          "Drowsiness-related monitoring.",
          "Real-time awareness notifications.",
          "On-device AI processing.",
          "Privacy-conscious camera processing.",
          "Driving activity insights.",
          "Other.",
        ],
      },
      {
        id: "privacyImportance",
        stepLabel: "Question 4 of 7 · Privacy Expectations",
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
        stepLabel: "Question 5 of 7 · Adoption Concerns",
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
        stepLabel: "Question 6 of 7 · Potential Everyday Usage",
        prompt:
          "If an application like this met your expectations, how likely would you be to use it during everyday driving?",
        type: "single",
        options: ["Very likely.", "Likely.", "Unsure.", "Unlikely.", "Very unlikely."],
      },
      {
        id: "additionalFeedback",
        stepLabel: "Question 7 of 7 · Additional Feedback",
        prompt:
          "Is there anything you would want an application like Astrateq Gadgets to do differently or better?",
        helperText: "Optional — share any thoughts, concerns, or everyday driving feedback.",
        type: "text",
        placeholder: "Share your thoughts (optional)...",
      },
    ],
  },
  beta: {
    eyebrow: "Beta Interest Registration",
    title: "Be Among the First to Explore Astrateq Gadgets.",
    subtitle:
      "We're exploring the next generation of driver-awareness intelligence for iPhone. Register your interest to receive occasional development updates and potential future beta opportunities.",
    emailLabel: "Email address (required)",
    emailPlaceholder: "you@domain.ca",
    firstNameLabel: "First name (optional)",
    firstNamePlaceholder: "Optional",
    iphoneModelLabel: "iPhone model (optional)",
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
      "I agree to receive occasional Astrateq Gadgets development updates and beta-related communications. I understand I can unsubscribe at any time.",
    privacyNotice:
      "Survey respondents are never subscribed automatically. Registering your email records your interest in updates only and does not promise guaranteed beta access.",
    successTitle: "Beta Interest Registered",
    duplicateTitle: "Already Registered",
    successBody:
      "Thank you for registering your interest in Astrateq Gadgets. We will send occasional updates if development milestones or testing windows open. Registration does not guarantee beta access.",
    submitAnother: "Register another email address",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Clear, honest answers.",
    subtitle:
      "Details on the current research stage, intended camera privacy, device compatibility evaluation, and participation.",
    items: [
      {
        id: "what-is",
        question: "What is Astrateq Gadgets?",
        answer:
          "Astrateq Gadgets is an early-stage driver-awareness intelligence iOS application concept. It explores how on-device computer vision on iPhone can help everyday drivers become more aware of visual indicators associated with distraction and drowsiness.",
      },
      {
        id: "available-yet",
        question: "Is the application available yet?",
        answer:
          "Not yet. Astrateq Gadgets is currently in an early product development and consumer market research phase to evaluate driver interest before any commercial or public App Store release.",
      },
      {
        id: "supported-iphones",
        question: "Which iPhone devices will be supported?",
        answer:
          "Exact supported iPhone models and minimum iOS version requirements are still being evaluated. Research currently prioritizes modern iPhones equipped with Apple Neural Engine hardware.",
      },
      {
        id: "how-monitoring-works",
        question: "How does driver-awareness monitoring work?",
        answer:
          "In the intended iPhone experience, the driver launches Astrateq Gadgets while the device is securely mounted and starts an awareness session. On-device vision routines are designed to evaluate visual cues such as eye-closure cadence and head orientation and surface gentle awareness prompts when appropriate.",
      },
      {
        id: "uses-camera",
        question: "Does the application use the iPhone camera?",
        answer:
          "Yes, the proposed iPhone application concept relies on the front-facing iPhone camera during an active driving session to evaluate attention and fatigue visual cues, subject to standard iOS camera permissions. This website itself never accesses your camera.",
      },
      {
        id: "cloud-upload",
        question: "Is video uploaded to cloud servers?",
        answer:
          "In the intended architecture, driver-facing camera frames are processed locally on-device in transient memory and are not stored or uploaded as cloud video. Where future builds include optional non-video summary synchronization or diagnostics, those remain separate network requests under user control.",
      },
      {
        id: "prevent-accidents",
        question: "Does the application prevent accidents?",
        answer:
          "No. Astrateq Gadgets cannot guarantee accident prevention, cannot detect every distraction or fatigue event, and is not a medical device or autonomous driving feature. The driver always retains full responsibility for safe vehicle operation.",
      },
      {
        id: "survey-cost",
        question: "Does participating in the survey cost anything?",
        answer:
          "No. Participating in the consumer market research survey is completely free, anonymous, optional, and requires no purchase or email registration.",
      },
      {
        id: "beta-guarantee",
        question: "Does registering interest guarantee beta access?",
        answer:
          "No. Registering your email adds you to an optional notification list for future development updates and potential testing invitations, without guaranteeing acceptance into a beta cohort or a launch timeline.",
      },
    ],
  },
  footer: {
    tagline: "Smarter Driving Awareness. Early-Stage iOS Concept.",
    stageNote:
      "Early-stage product development & Canadian consumer market research. Not yet a commercially available product.",
    marketNote: "Designed for Canadian everyday drivers",
    navigationHeading: "Explore",
    legalHeading: "Policies & Information",
    contactHeading: "Contact",
    privacyLink: "Privacy Policy",
    termsLink: "Research & Beta Terms",
    safetyLink: "Safety Notice",
    supportLink: "Contact & Support",
    legalDraftNote:
      "Pre-release informational notices. Comprehensive App Store & Beta terms will be published prior to any public release.",
    copyright: `© ${new Date().getFullYear()} Astrateq Gadgets. All rights reserved.`,
  },
};

export function getCopy(locale: Locale = "en-CA"): SiteCopy {
  switch (locale) {
    case "fr-CA":
    case "en-CA":
    default:
      return EN_CA_COPY;
  }
}
