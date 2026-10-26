export interface Badge {
  title: string;
  issuer: string;
  src: string;
  alt: string;
  /** Intrinsic pixel size of the image file. */
  width: number;
  height: number;
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
    width: 240,
    height: 240,
  },
  {
    title: "Support Specialist",
    issuer: "Azure App Service Configuration and Management",
    src: "/images/badges/support-specialist-badge.png",
    alt: "Microsoft Customer Service and Support, Support Specialist badge for Azure App Service Configuration and Management",
    width: 204,
    height: 204,
  },
  {
    title: "Hackathon 2023",
    issuer: "Participant",
    src: "/images/badges/hackathon-2023-badge.png",
    alt: "Microsoft Hackathon 2023 Participant badge",
    width: 240,
    height: 240,
  },
];

export const credentials: Credential[] = [
  { title: "AI-900", detail: "Microsoft Learn · Artificial Intelligence" },
  { title: "AZ-305", detail: "In progress · Azure solutions architecture", highlight: true },
  { title: "B.S. Computer Science", detail: "Winston-Salem State University" },
];
