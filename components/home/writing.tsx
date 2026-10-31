import { NewTabLink } from "@/components/new-tab-link";
import { articles } from "@/content/site/writing";
import { Section, SectionHeading } from "./section";
import { CARD, CARD_HOVER, FOCUS_ON_LIGHT } from "./styles";

export function Writing() {
  return (
    <Section id="writing">
      <SectionHeading
        eyebrow="05 · WRITING"
        title="Published on Microsoft Community Hub"
        intro="Walkthroughs from the Integrations on Azure blog, covering Logic Apps authentication, storage, and connectors."
      />

      <ul className="flex flex-wrap gap-5">
        {articles.map((article) => (
          <li key={article.url} className="flex min-w-0 flex-[1_1_340px]">
            <NewTabLink
              href={article.url}
              className={`flex w-full flex-col gap-3 p-6 text-ink sm:p-7 ${CARD} ${CARD_HOVER} ${FOCUS_ON_LIGHT}`}
            >
              {article.date && (
                <span className="font-mono text-[13px] text-muted-on-light uppercase">
                  {article.date}
                </span>
              )}
              <span className="text-[20px] leading-[1.3] font-semibold">{article.title}</span>
              <span className="text-[16px] leading-[1.6] text-body-copy">{article.summary}</span>
              <span className="text-[14px] text-muted-on-light">{article.note}</span>
              <span className="mt-auto text-[15px] font-semibold text-accent-on-light">
                Read the article →
              </span>
            </NewTabLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
