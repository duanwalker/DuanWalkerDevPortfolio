import { badges } from "./credentials";

export interface NavSection {
  id: string;
  label: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface SiteContent {
  name: string;
  title: string;
  employer: string;
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  resumePath: string;
  avatar: { src: string; alt: string };
  /** Sections linked from the top bar, in page order. */
  nav: NavSection[];
  hero: {
    eyebrow: string;
    heading: string;
    sub: string;
    stats: HeroStat[];
  };
  about: {
    heading: string;
    paragraphs: string[];
    depth: { title: string; text: string };
    breadth: { title: string; handsOn: string[]; architectureLevel: string[] };
    location: string;
  };
  contact: {
    heading: string;
    text: string;
  };
  copyright: string;
}

export const site: SiteContent = {
  name: "Duan Walker",
  title: "Sr Azure Cloud Integrations Support Engineer",
  employer: "Microsoft",
  email: "duan.walker.dev@gmail.com",
  githubUrl: "https://github.com/duanwalker",
  githubHandle: "duanwalker",
  linkedinUrl: "https://www.linkedin.com/in/duanwalkerthecpututor/",
  resumePath: "/resume/DuanWalkerResume.pdf",
  avatar: { src: "/images/avatar.jpg", alt: "Cartoon portrait of Duan Walker" },
  nav: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "writing", label: "Writing" },
    { id: "hackathons", label: "Hackathons" },
    { id: "credentials", label: "Credentials" },
  ],
  hero: {
    eyebrow: "SR AZURE CLOUD INTEGRATIONS SUPPORT ENGINEER · MICROSOFT",
    heading: "I design AI systems that run on Azure.",
    sub: "Seven years on Azure support at Microsoft, building orchestration, agent workflows, and integration architecture for enterprise customers.",
    stats: [
      { value: "7 yrs", label: "Azure support at Microsoft, promoted to Senior in 2024" },
      { value: "3", label: "Logic Apps tutorials on Microsoft Community Hub" },
      { value: "4 of 5", label: "Recent years with a Microsoft hackathon entry" },
      { value: String(badges.length), label: "Microsoft-issued badges earned" },
    ],
  },
  about: {
    heading: "Systems, built end to end.",
    paragraphs: [
      "The pattern started early. As a kid I built a three-wheeled car by myself from the spare parts of old toys, and I’ve been designing and assembling systems end to end ever since.",
      "Seven years supporting Azure at Microsoft, most of them on Logic Apps, have given me deep integration knowledge: how connectors, authentication, and storage behave in production, and where they break. Around that core I carry breadth across the platform, from compute and storage to the data and eventing layer, including Event Hubs, Data Factory, Data Lake, Synapse, and Databricks, so I can design the whole solution rather than just the workflow.",
    ],
    depth: {
      title: "Logic Apps, end to end",
      text: "Connectors, authentication, storage, runtime behavior, and the failure modes in between.",
    },
    breadth: {
      title: "The Azure platform around it",
      handsOn: ["Functions", "Storage", "SQL", "Key Vault", "AKS", "Azure OpenAI", "Copilot Studio"],
      architectureLevel: ["Event Hubs", "Data Factory", "Data Lake", "Synapse", "Databricks"],
    },
    location: "Charlotte, NC · Remote-first",
  },
  contact: {
    heading: "Let’s talk about AI on Azure.",
    text: "Open to Cloud Solution Architect (AI) conversations, remote-first.",
  },
  copyright: "© 2026 Duan Walker",
};
