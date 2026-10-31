import { getGridProjects, getRailProjects, type Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { TechChip } from "@/components/tech-chip";
import { NewTabLink } from "@/components/new-tab-link";
import { StatusChip } from "./chip";
import { ProjectToggleCard } from "./project-toggle-card";
import { Section, SectionHeading } from "./section";
import { FOCUS_ON_LIGHT } from "./styles";

const DETAIL_COLUMNS = [
  { key: "what", label: "WHAT IT DOES" },
  { key: "how", label: "HOW IT’S BUILT" },
  { key: "where", label: "WHERE IT STANDS" },
] as const;

function ProjectDetails({ project }: { project: Project }) {
  const chips = [...project.stack, ...(project.integrations ?? [])];

  return (
    <>
      <div className="flex flex-wrap gap-7">
        {DETAIL_COLUMNS.map(({ key, label }) =>
          project[key] ? (
            <div key={key} className="min-w-0 flex-[1_1_220px]">
              <p className="mb-2 font-mono text-[12px] tracking-[0.04em] text-accent-on-light">
                {label}
              </p>
              <p className="text-[16px] leading-[1.6] text-body-copy">{project[key]}</p>
            </div>
          ) : null
        )}
      </div>
      {chips.length > 0 && (
        <div className="mt-[22px] flex flex-wrap gap-2">
          {chips.map((tech) => (
            <TechChip key={tech} tech={tech} tone="light" />
          ))}
        </div>
      )}
      <NewTabLink
        href={`/projects/${project.slug}/`}
        className={`mt-[18px] inline-flex min-h-11 items-center rounded text-[16px] font-semibold text-accent-on-light hover:text-accent-on-light-hover ${FOCUS_ON_LIGHT}`}
      >
        View project page →
      </NewTabLink>
    </>
  );
}

export function FeaturedWork() {
  const featured = getRailProjects();
  const more = getGridProjects();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="04 · FEATURED WORK"
        title="Things I’ve built"
        intro="Select a project to open its details, or go to its project page."
      />

      <ul className="flex flex-col gap-5">
        {featured.map((project, index) => (
          <li key={project.slug}>
            <ProjectToggleCard
              defaultOpen={index === 0}
              header={
                <>
                  <StatusChip status={project.status} />
                  <span className="font-display text-[22px] leading-snug font-semibold text-ink sm:text-[24px]">
                    {project.title}
                  </span>
                  <span className="text-[17px] leading-[1.55] text-body-copy">
                    {project.summary ?? project.tagline}
                  </span>
                </>
              }
            >
              <ProjectDetails project={project} />
            </ProjectToggleCard>
          </li>
        ))}
      </ul>

      {more.length > 0 && (
        <>
          <h3 className="mt-14 mb-6 font-display text-[24px] font-semibold">More work</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {more.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}
