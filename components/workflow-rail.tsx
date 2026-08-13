"use client";

import { useEffect, useRef, useState } from "react";
import type { Project } from "@/lib/projects";
import { ProjectCard } from "./project-card";

export function WorkflowRail({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<boolean[]>(() => projects.map(() => false));
  const nodeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reduced motion is handled purely via the `motion-reduce:` CSS overrides
    // below, which force the active look regardless of `active` state — so
    // there's no observer to set up here.
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = nodeRefs.current.indexOf(entry.target as HTMLSpanElement);
          if (index === -1) continue;
          setActive((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" }
    );

    for (const node of nodeRefs.current) {
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, [projects]);

  return (
    <ol className="flex flex-col">
      {projects.map((project, index) => {
        const isActive = active[index];
        const isLast = index === projects.length - 1;

        return (
          <li key={project.slug} className="grid grid-cols-[2rem_1fr] gap-4">
            <div className="flex flex-col items-center">
              <span
                ref={(el) => {
                  nodeRefs.current[index] = el;
                }}
                aria-hidden
                className={`mt-1 h-3 w-3 shrink-0 rounded-full border-2 transition-colors duration-500 motion-reduce:border-pulse motion-reduce:bg-pulse motion-reduce:transition-none ${
                  isActive ? "border-pulse bg-pulse" : "border-conduit bg-depth"
                }`}
              />
              {!isLast && (
                <span
                  aria-hidden
                  className="relative mt-1 w-px flex-1 overflow-hidden bg-conduit"
                >
                  <span
                    className={`absolute inset-x-0 top-0 h-full w-px origin-top bg-pulse transition-transform duration-700 ease-out motion-reduce:scale-y-100 motion-reduce:transition-none ${
                      active[index + 1] ? "scale-y-100" : "scale-y-0"
                    }`}
                  />
                </span>
              )}
            </div>
            <div className="pb-10">
              <ProjectCard project={project} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}
