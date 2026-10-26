import { techLabel } from "@/lib/tech-labels";

const TONE_CLASS = {
  dark: "border-conduit text-muted",
  light: "border-[#CBD2DC] text-muted-on-light",
} as const;

export function TechChip({ tech, tone = "dark" }: { tech: string; tone?: keyof typeof TONE_CLASS }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-mono ${TONE_CLASS[tone]}`}
    >
      {techLabel(tech)}
    </span>
  );
}
