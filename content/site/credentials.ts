export interface Badge {
  title: string;
  issuer: string;
  src: string;
  alt: string;
}

export interface Credential {
  title: string;
  detail: string;
  /** Highlighted with the tint background, e.g. an in-progress cert. */
  highlight?: boolean;
}

export const badges: Badge[] = [
  {
    title: "Copilot Agent Maker",
    issuer: "Microsoft Digital",
    src: "/images/badges/copilot-agent-maker-badge.png",
    alt: "Microsoft Digital Copilot Agent Maker badge",
  },
  {
    title: "AI Fluency Achievement",
    issuer: "Microsoft SkillUp AI",
    src: "/images/badges/skillup-ai-fluency-badge.png",
    alt: "Microsoft SkillUp AI Fluency Achievement badge, The Garage",
  },
  {
    title: "Support Specialist",
    issuer: "Azure App Service Configuration and Management",
    src: "/images/badges/support-specialist-badge.png",
    alt: "Microsoft Customer Service and Support, Support Specialist badge for Azure App Service Configuration and Management",
  },
  {
    title: "Kepner Tregoe Practitioner",
    issuer: "Microsoft Customer Service & Support",
    src: "/images/badges/kepner-tregoe-practitioner-badge.png",
    alt: "Microsoft Customer Service and Support, Kepner Tregoe Practitioner badge",
  },
  {
    title: "Active Contributor",
    issuer: "MCAPS Contributor Program",
    src: "/images/badges/active-contributor-badge.png",
    alt: "Active Contributor, MCAPS Contributor Program badge",
  },
  {
    title: "Hackathon 2023",
    issuer: "Participant",
    src: "/images/badges/hackathon-2023-badge.png",
    alt: "Microsoft Hackathon 2023 Participant badge",
  },
];

export const credentials: Credential[] = [
  { title: "AI-900", detail: "Microsoft Learn · Artificial Intelligence" },
  { title: "AZ-305", detail: "In progress · Azure solutions architecture", highlight: true },
  { title: "B.S. Computer Science", detail: "Winston-Salem State University" },
];
