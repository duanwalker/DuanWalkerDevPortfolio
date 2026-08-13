import Link from "next/link";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "./status-badge";
import { TechChip } from "./tech-chip";

const MAX_CHIPS = 6;

export function ProjectCard({ project }: { project: Project }) {
  const chips = [...project.stack, ...(project.integrations ?? [])].slice(0, MAX_CHIPS);

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block rounded-xl border border-conduit bg-surface p-6 transition-colors hover:border-pulse"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-h3 text-mist">{project.title}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-2 text-body text-lilac">{project.tagline}</p>
      {chips.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((tech) => (
            <TechChip key={tech} tech={tech} />
          ))}
        </div>
      )}
    </Link>
  );
}
