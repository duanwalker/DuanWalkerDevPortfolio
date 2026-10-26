export interface Job {
  employer: string;
  dates: string;
  /** Short line under the employer name, e.g. a vendor relationship. */
  employerNote?: string;
  role: string;
  /** Line under the role. */
  subline?: string;
  bullets: string[];
}

export const jobs: Job[] = [
  {
    employer: "Microsoft",
    dates: "1/2020 – Present",
    role: "Sr Azure Cloud Integrations Support Engineer, Logic Apps",
    subline: "Promoted to Senior in 2024 · Enterprise customers, partners, and engineers",
    bullets: [
      "Own escalations for enterprise customers: scope the problem, research it, pull in engineering, and drive it to a fix.",
      "Built cloud-based diagnostic tooling in C# and Kusto queries to detect issues in single-tenant Logic Apps.",
      "Built an AI-agent automation with Copilot Studio and Logic Apps for an internal escalation workflow.",
      "Mentored two junior engineers.",
      "Wrote Logic Apps tutorials for the Microsoft Community Hub, covering authentication, storage, and connectors.",
    ],
  },
  {
    employer: "Collabera",
    dates: "6/2019 – 1/2020",
    employerNote: "Vendor on the Microsoft account",
    role: "Azure Cloud Support Engineer, Function Apps",
    bullets: [
      "Owned new cases and escalations for enterprise customers and partners, handled to Microsoft SLAs.",
      "Acted as an internal customer advocate, escalating to management and keeping customers informed.",
    ],
  },
  {
    employer: "Deephaven Mortgage",
    dates: "8/2018 – 6/2019",
    role: "Applications Developer",
    bullets: [
      "Built the company intranet in C# and ASP.NET, and served as business analyst on the BRD and FSD documentation.",
      "Delivered a custom Encompass .NET plugin that calculates loan underwriting conditions to speed up closings.",
      "Built ETL and SFTP applications that moved data to third parties through their REST services.",
    ],
  },
  {
    employer: "Wells Fargo",
    dates: "11/2017 – 6/2018",
    role: "Applications System Analyst",
    bullets: [
      "Supported and fixed credit-reporting and dispute-resolution applications for Enterprise Risk Management in C#, VB.NET, and SQL stored procedures.",
      "Designed an SSIS data-migration application and a SQL-driven email messaging application.",
    ],
  },
];

export const earlierCareer: string[] = [
  "Baker & Taylor, .NET Developer, Business Analyst, and QA (2014–2017)",
  "UNC Charlotte, part-time coding boot camp TA (2016–2017)",
  "Triad Foreclosures, .NET Web Developer (2011–2012)",
];
