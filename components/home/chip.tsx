import type { ProjectStatus } from "@/lib/projects";

export type ChipTone = "active" | "development" | "neutral";

const TONE_CLASS: Record<ChipTone, string> = {
  active: "bg-tint text-accent-on-light-hover",
  development: "bg-amber text-depth",
  neutral: "bg-[#ECECF1] text-[#3A3F4B]",
};

/** Small mono label chip for light surfaces. */
export function Chip({ tone, children }: { tone: ChipTone; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 font-mono text-[12px] leading-none tracking-[0.04em] ${TONE_CLASS[tone]}`}
    >
      {children}
    </span>
  );
}

const STATUS_CHIP: Record<ProjectStatus, { tone: ChipTone; label: string }> = {
  active: { tone: "active", label: "ACTIVE" },
  "in-development": { tone: "development", label: "IN DEVELOPMENT" },
  internal: { tone: "neutral", label: "INTERNAL" },
  archived: { tone: "neutral", label: "ARCHIVED" },
};

export function StatusChip({ status }: { status: ProjectStatus }) {
  const { tone, label } = STATUS_CHIP[status];
  return <Chip tone={tone}>{label}</Chip>;
}
