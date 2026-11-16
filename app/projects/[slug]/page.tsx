import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getLiveDemoUrl, getProjectBySlug, getPublishedProjects } from "@/lib/projects";
import { StatusBadge } from "@/components/status-badge";
import { DefinitionBlock } from "@/components/definition-block";
import { mdxComponents } from "@/components/mdx-components";
import { NewTabLink } from "@/components/new-tab-link";

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
    title: project.title,
    description: project.tagline,
    openGraph: {
      type: "website",
      siteName: "Duan Walker",
      url: `https://duanwalker.dev/projects/${slug}`,
      title: project.title,
      description: project.tagline,
      images: ["/og.png"],
    },
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
  const demoUrl = getLiveDemoUrl(project);

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <Link href="/" className="w-fit font-mono text-mono text-muted hover:text-pulse">
        ← Back to projects
      </Link>

      <header className="flex flex-col gap-3">
        <StatusBadge status={project.status} />
        <h1 className="font-display text-h1 text-mist">{project.title}</h1>
        <p className="text-body-lg text-lilac">{project.tagline}</p>
        {demoUrl && (
          <NewTabLink
            href={demoUrl}
            className="mt-2 inline-flex min-h-11 w-fit items-center rounded-lg bg-pulse px-5 py-2.5 font-semibold text-depth transition-colors hover:bg-mist focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pulse"
          >
            Try the live demo →
          </NewTabLink>
        )}
        {/* project.repo stays in frontmatter but is intentionally not linked from the site. */}
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
