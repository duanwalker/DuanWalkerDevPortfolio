import Image from "next/image";
import { site } from "@/content/site/site";
import { FOCUS_ON_DARK, GUTTER, OUTLINE_TO_PULSE } from "./styles";

/**
 * Sticky site bar. Must render as a direct child of the page-level wrapper,
 * not inside the hero, so it stays pinned for the whole page.
 */
export function TopBar() {
  return (
    <div className="sticky top-0 z-30 border-b border-depth-border bg-depth text-text-on-dark">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-2 py-3 ${GUTTER}`}
      >
        <a
          href="#top"
          className={`flex items-center gap-3 rounded-lg text-[18px] font-semibold text-text-on-dark ${FOCUS_ON_DARK}`}
        >
          <Image
            src={site.avatar.src}
            alt={site.avatar.alt}
            width={44}
            height={44}
            loading="eager"
            className="size-11 shrink-0 rounded-full border-2 border-pulse object-cover"
          />
          <span>{site.name}</span>
        </a>
        <div className="flex flex-wrap items-center gap-x-4 text-[15px] lg:gap-x-[22px]">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`inline-flex min-h-11 items-center rounded text-nav-link-on-dark transition-colors hover:text-white ${FOCUS_ON_DARK}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`inline-flex min-h-11 items-center rounded-lg px-[18px] font-semibold text-nav-link-on-dark ${OUTLINE_TO_PULSE} ${FOCUS_ON_DARK}`}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
