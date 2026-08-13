import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");
const RAIL_CAP = 5;

export type ProjectStatus = "active" | "in-development" | "internal" | "archived";

export interface ProjectFrontmatter {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  year?: number;
  role?: string;
  stack: string[];
  integrations?: string[];
  repo: string | null;
  demo?: string | null;
  thumbnail?: string | null;
  diagram?: string | null;
  featured: boolean;
  order?: number;
}

export interface Project extends ProjectFrontmatter {
  content: string;
}

function readProjectFile(filename: string): Project {
  const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return { ...(data as ProjectFrontmatter), content };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map(readProjectFile);
}

/** featured: true projects, sorted by `order` ascending. This is the site's published set. */
export function getPublishedProjects(): Project[] {
  return getAllProjects()
    .filter((project) => project.featured)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}

export function getRailProjects(): Project[] {
  return getPublishedProjects().slice(0, RAIL_CAP);
}

export function getGridProjects(): Project[] {
  return getPublishedProjects().slice(RAIL_CAP);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}
