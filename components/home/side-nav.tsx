import { site } from "@/content/site/site";

/** Every homepage section in order, including the hero (#top) and contact. */
const SECTIONS = [
  { id: "top", label: "Intro" },
  ...site.nav,
  { id: "contact", label: "Contact" },
];

/**
 * Fixed dot navigation on the left edge (desktop only). Each dot lights up
 * while its section is in view via the sdot-<id> scroll timelines in
 * globals.css; without scroll-timeline support the dots are static links.
 */
export function SideNav() {
  return (
    <nav aria-label="Page sections" className="sidenav">
      {SECTIONS.map((section) => (
        <a key={section.id} href={`#${section.id}`} className={`sdot sdot-${section.id}`}>
          <span className="slabel">{section.label}</span>
        </a>
      ))}
    </nav>
  );
}
