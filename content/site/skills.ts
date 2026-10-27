export type SkillIcon = "cloud" | "bot" | "code" | "wrench" | "database";

export interface SkillGroup {
  title: string;
  icon: SkillIcon;
  /** Optional mono chip shown next to the title. */
  tag?: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Azure & Integration",
    icon: "cloud",
    skills: [
      "Logic Apps (Standard)",
      "Function Apps",
      "Azure Storage",
      "Azure SQL",
      "Key Vault",
      "AKS",
      "Docker",
    ],
  },
  {
    title: "AI & Agents",
    icon: "bot",
    skills: [
      "Copilot Studio",
      "Microsoft 365 Copilot",
      "Azure OpenAI",
      "Anthropic Claude API",
      "Human-in-the-loop workflows",
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: "code",
    skills: [
      "C# / .NET Core",
      "ASP.NET Core",
      "JavaScript",
      "React",
      "Node.js",
      "SQL",
      "KQL",
      "JSON",
    ],
  },
  {
    title: "Tools & Practice",
    icon: "wrench",
    skills: [
      "GitHub",
      "Visual Studio",
      "VS Code",
      "Kusto",
      "Postman",
      "Full SDLC, requirements to deployment",
    ],
  },
  {
    title: "Data & Streaming",
    icon: "database",
    tag: "ARCHITECTURE-LEVEL",
    skills: ["Event Hubs", "Data Factory", "Data Lake", "Synapse", "Databricks"],
  },
];
