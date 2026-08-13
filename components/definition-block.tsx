"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";
import { StatusBadge } from "./status-badge";
import { TechChip } from "./tech-chip";

export function DefinitionBlock({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-xl border border-conduit bg-surface">
      <div className="flex flex-col gap-3 p-6 font-mono text-mono text-muted">
        <div className="flex items-center gap-3">
          <span className="text-mist">status:</span>
          <StatusBadge status={project.status} />
        </div>
        {project.role && (
          <div>
            <span className="text-mist">role:</span> {project.role}
          </div>
        )}
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="text-mist">stack:</span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechChip key={tech} tech={tech} />
            ))}
          </div>
        </div>
        {project.integrations && project.integrations.length > 0 && (
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-mist">integrations:</span>
            <div className="flex flex-wrap gap-2">
              {project.integrations.map((tech) => (
                <TechChip key={tech} tech={tech} />
              ))}
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          aria-controls="project-writeup"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-conduit px-3 py-1 text-mono text-pulse transition-colors hover:border-pulse focus-visible:outline focus-visible:outline-2 focus-visible:outline-pulse"
        >
          {expanded ? "Collapse write-up" : "Expand write-up"}
        </button>
      </div>
      <div id="project-writeup" hidden={!expanded} className="border-t border-conduit px-6 py-8">
        {children}
      </div>
    </div>
  );
}
