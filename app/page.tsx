import { getRailProjects, getGridProjects } from "@/lib/projects";
import { WorkflowRail } from "@/components/workflow-rail";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const railProjects = getRailProjects();
  const gridProjects = getGridProjects();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-24 px-6 py-20">
      <section className="flex flex-col gap-4">
        <p className="font-mono text-mono text-muted">Duan Walker</p>
        <h1 className="font-display text-display text-mist">
          I design AI systems that run on Azure.
        </h1>
        <p className="text-body-lg text-lilac">
          Senior Cloud Integrations Engineer at Microsoft. Seven years building
          orchestration, agent workflows, and integration architecture for enterprise
          customers.
        </p>
      </section>

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

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-h2 text-mist">About</h2>
        <p className="text-body-lg text-lilac">
          Seven years at Microsoft building orchestration, agent workflows, and
          integration architecture for enterprise customers — currently focused on
          designing AI systems that run natively on Azure.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="font-display text-h2 text-mist">Contact</h2>
        <a
          href="mailto:duan.walker.dev@gmail.com"
          className="w-fit font-mono text-mono text-pulse hover:text-mist"
        >
          duan.walker.dev@gmail.com
        </a>
      </section>
    </div>
  );
}
