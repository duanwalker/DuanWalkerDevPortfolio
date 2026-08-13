const TECH_LABELS: Record<string, string> = {
  react: "React",
  nodejs: "Node.js",
  express: "Express",
  "claude-api": "Claude API",
  "azure-tables": "Azure Table Storage",
  "azure-vm": "Azure VM",
  "azure-functions": "Azure Functions",
  nextjs: "Next.js",
  alpaca: "Alpaca",
  polygon: "Polygon",
  "alpha-vantage": "Alpha Vantage",
  finbert: "FinBERT",
  "copilot-studio": "Copilot Studio",
  "logic-apps": "Logic Apps",
  csharp: "C#",
  "razor-pages": "Razor Pages",
};

export function techLabel(key: string): string {
  return TECH_LABELS[key] ?? key;
}
