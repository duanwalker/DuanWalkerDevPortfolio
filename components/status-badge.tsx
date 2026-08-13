import type { ProjectStatus } from "@/lib/projects";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  active: "active",
  "in-development": "in development",
  internal: "internal",
  archived: "archived",
};

const STATUS_COLOR: Record<ProjectStatus, string> = {
  active: "border-pulse text-pulse",
  "in-development": "border-amber text-amber",
  internal: "border-muted text-muted",
  archived: "border-conduit text-muted",
};

const STATUS_DOT: Record<ProjectStatus, string> = {
  active: "bg-pulse",
  "in-development": "bg-amber",
  internal: "bg-muted",
  archived: "bg-conduit",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-mono ${STATUS_COLOR[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${STATUS_DOT[status]}`} aria-hidden />
      {STATUS_LABEL[status]}
    </span>
  );
}
