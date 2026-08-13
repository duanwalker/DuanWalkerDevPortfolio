import { techLabel } from "@/lib/tech-labels";

export function TechChip({ tech }: { tech: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-conduit px-3 py-1 font-mono text-mono text-muted">
      {techLabel(tech)}
    </span>
  );
}
