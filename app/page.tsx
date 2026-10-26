import { getRailProjects, getGridProjects } from "@/lib/projects";
import { WorkflowRail } from "@/components/workflow-rail";
import { ProjectCard } from "@/components/project-card";
import { SideNav } from "@/components/home/side-nav";
import { TopBar } from "@/components/home/top-bar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";

export default function Home() {
  const railProjects = getRailProjects();
  const gridProjects = getGridProjects();

  return (
    <div className="page-timelines flex-1 bg-ground text-ink">
      <SideNav />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />

        <div className="mx-auto flex max-w-3xl flex-col gap-24 bg-depth px-6 py-20 text-mist">
          {railProjects.length > 0 && (
            <section className="flex flex-col gap-8">
              <h2 className="font-display text-h2 text-mist">Featured work</h2>
              <WorkflowRail projects={railProjects} />
            </section>
          )}

          {gridProjects.length > 0 && (
            <section className="flex flex-col gap-8">
              <h2 className="font-display text-h2 text-mist">More work</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {gridProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
