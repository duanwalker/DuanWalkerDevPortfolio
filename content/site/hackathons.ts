export interface HackathonEntry {
  year: string;
  title: string;
  text: string;
  /** Only entries with visible: true are rendered. */
  visible: boolean;
}

/** Newest first. */
export const hackathonEntries: HackathonEntry[] = [
  {
    year: "2025",
    title: "FlowScribe.AI and a support automation agent",
    text: "Two entries: an AI documentation generator for Azure Logic Apps, and an internal agent that automates a support recovery workflow.",
    visible: true,
  },
  {
    year: "2023",
    title: "AI skilling challenge entry",
    // TODO: confirm wording.
    text: "An AI-driven workflow automation for the support organization.",
    visible: true,
  },
  {
    year: "2022",
    title: "Diagnostic tooling for support engineers",
    text: "A diagnostic detector that lets engineers filter troubleshooting data by a single client request.",
    visible: true,
  },
  {
    // TODO: confirm year (about 2020 to 2021) and wording, then set visible: true.
    year: "",
    title: "Crowd-sentiment predictor",
    text: "A crowd-sentiment predictor that forecast election and NBA Finals outcomes and later seeded AlphaBot.",
    visible: false,
  },
];

export const hackathonBadge = {
  src: "/images/badges/hackathon-2023-badge.png",
  alt: "Microsoft Hackathon 2023 Participant badge",
  caption: ["Microsoft Hackathon 2023", "Participant"],
};
