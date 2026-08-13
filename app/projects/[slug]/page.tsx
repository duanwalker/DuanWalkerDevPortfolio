import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getProjectBySlug, getPublishedProjects } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";
import { DefinitionBlock } from "@/components/definition-block";
import { mdxComponents } from "@/components/mdx-components";

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Duan Walker`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <Link href="/" className="w-fit font-mono text-mono text-muted hover:text-pulse">
        ← Back to projects
      </Link>

      <header className="flex flex-col gap-3">
        <StatusBadge status={project.status} />
        <h1 className="font-display text-h1 text-mist">{project.title}</h1>
        <p className="text-body-lg text-lilac">{project.tagline}</p>
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="w-fit font-mono text-mono text-pulse hover:underline"
          >
            View repo
          </a>
        )}
      </header>

      <DefinitionBlock project={project}>
        <MDXRemote
          source={project.content}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </DefinitionBlock>
    </article>
  );
}
