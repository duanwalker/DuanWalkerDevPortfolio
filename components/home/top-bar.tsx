import Image from "next/image";
import { site } from "@/content/site/site";
import { FOCUS_ON_DARK, GUTTER } from "./styles";

/**
 * Nav links: no border or outline; mouse-over and keyboard focus both fill
 * with pulse. The fill doubles as the keyboard focus indicator.
 */
const NAV_LINK =
  "inline-flex min-h-11 items-center rounded-lg text-nav-link-on-dark outline-none hover:bg-pulse hover:text-depth focus-visible:bg-pulse focus-visible:text-depth motion-safe:transition-colors motion-safe:duration-150";

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
        <div className="flex flex-wrap items-center text-[15px] sm:gap-x-1 lg:gap-x-1.5">
          {site.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`${NAV_LINK} px-2 sm:px-3`}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className={`${NAV_LINK} px-3 font-semibold sm:px-[18px]`}>
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
