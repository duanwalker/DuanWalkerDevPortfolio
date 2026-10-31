import { NewTabLink } from "@/components/new-tab-link";
import { site } from "@/content/site/site";
import { DocumentIcon } from "./icons";
import { EYEBROW, FOCUS_ON_DARK, GUTTER } from "./styles";

export function Hero() {
  const { hero } = site;

  return (
    <header id="top" className={`tl-top bg-depth text-text-on-dark ${GUTTER}`}>
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-14 pt-14 pb-20 sm:pt-18 sm:pb-24">
        <div className="min-w-0 flex-[1_1_520px]">
          <p className={`${EYEBROW} mb-5 text-pulse`}>{hero.eyebrow}</p>
          <h1 className="mb-6 font-display text-[40px] leading-[1.06] font-semibold tracking-[-0.02em] sm:text-[52px] lg:text-[60px]">
            {hero.heading}
          </h1>
          <p className="mb-8 max-w-[600px] text-[18px] leading-[1.55] text-muted-on-dark sm:text-[20px]">
            {hero.sub}
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#work"
              className={`inline-flex min-h-11 items-center rounded-lg bg-pulse px-6 py-3.5 font-semibold text-depth ${FOCUS_ON_DARK}`}
            >
              See featured work
            </a>
            <NewTabLink
              href={site.resumePath}
              className={`inline-flex min-h-11 items-center gap-3 rounded-lg border border-border-on-dark py-2.5 pr-6 pl-3 font-semibold text-text-on-dark transition-colors hover:border-pulse ${FOCUS_ON_DARK}`}
            >
              <span
                aria-hidden="true"
                className="inline-flex size-8 flex-none items-center justify-center rounded-full bg-pulse text-depth"
              >
                <DocumentIcon size={18} />
              </span>
              <span>Resume (PDF)</span>
            </NewTabLink>
          </div>
        </div>

        <ul className="flex min-w-0 flex-[1_1_380px] flex-wrap gap-4">
          {hero.stats.map((stat) => (
            <li
              key={stat.label}
              className="flex-[1_1_170px] rounded-xl border border-depth-border bg-depth-card p-[22px]"
            >
              <p className="font-display text-[40px] leading-none font-semibold text-text-on-dark">
                {stat.value}
              </p>
              <p className="mt-2.5 text-[15px] leading-[1.4] text-muted-on-dark">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
