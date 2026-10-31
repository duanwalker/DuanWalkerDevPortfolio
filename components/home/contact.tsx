import { AutoLink, NewTabLink } from "@/components/new-tab-link";
import { site } from "@/content/site/site";
import { DocumentIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { Section, SectionHeading } from "./section";
import { FOCUS_ON_DARK, GUTTER, OUTLINE_TO_PULSE } from "./styles";

const LINK = "flex min-h-11 items-center gap-3.5 rounded-[10px] py-2.5 pr-5 pl-3";
const LINK_OUTLINED = `${LINK} border border-border-on-dark text-text-on-dark transition-colors hover:border-pulse ${FOCUS_ON_DARK}`;
const ICON_CIRCLE = "inline-flex size-10 flex-none items-center justify-center rounded-full";

export function Contact() {
  const links = [
    { href: `mailto:${site.email}`, label: site.email, icon: <MailIcon /> },
    { href: site.githubUrl, label: `GitHub · ${site.githubHandle}`, icon: <GitHubIcon /> },
    { href: site.linkedinUrl, label: "LinkedIn", icon: <LinkedInIcon /> },
  ];

  return (
    <Section
      id="contact"
      className="pt-18 pb-0"
      innerClassName="flex flex-wrap items-center justify-between gap-10 rounded-[18px] bg-depth p-7 text-text-on-dark sm:p-14"
    >
      <div className="min-w-0 flex-[1_1_380px]">
        <SectionHeading eyebrow="08 · CONTACT" title={site.contact.heading} onDark flush />
        <p className="mt-3 text-[17px] leading-[1.6] text-muted-on-dark">{site.contact.text}</p>
      </div>
      <ul className="flex min-w-0 flex-[1_1_300px] flex-col gap-3 text-[17px]">
        {links.map((link) => (
          <li key={link.href}>
            <AutoLink href={link.href} className={LINK_OUTLINED}>
              <span aria-hidden="true" className={`${ICON_CIRCLE} bg-pulse text-depth`}>
                {link.icon}
              </span>
              <span className="min-w-0 [overflow-wrap:anywhere]">{link.label}</span>
            </AutoLink>
          </li>
        ))}
        <li>
          <NewTabLink
            href={site.resumePath}
            className={`group ${LINK} text-text-on-dark ${OUTLINE_TO_PULSE} ${FOCUS_ON_DARK}`}
          >
            <span
              aria-hidden="true"
              className={`${ICON_CIRCLE} bg-pulse text-depth group-hover:bg-depth group-hover:text-pulse group-focus-visible:bg-depth group-focus-visible:text-pulse motion-safe:transition-colors motion-safe:duration-150`}
            >
              <DocumentIcon size={20} />
            </span>
            <span>Download resume (PDF)</span>
          </NewTabLink>
        </li>
      </ul>
    </Section>
  );
}

export function HomeFooter() {
  return (
    <footer className={`${GUTTER} pt-8 pb-24`}>
      <p className="mx-auto max-w-content text-[14px] text-muted-on-light">{site.copyright}</p>
    </footer>
  );
}
