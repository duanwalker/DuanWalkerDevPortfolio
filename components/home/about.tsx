import { site } from "@/content/site/site";
import { Section, SectionHeading } from "./section";
import { CARD } from "./styles";

const CARD_LABEL = "mb-2 font-mono text-[13px] tracking-[0.04em] text-accent-on-light";

export function About() {
  const { about } = site;

  return (
    <Section id="about" className="pt-24 pb-10" innerClassName="flex flex-wrap gap-12">
      <div className="min-w-0 flex-[1_1_280px]">
        <SectionHeading eyebrow="01 · ABOUT" title={about.heading} flush />
      </div>
      <div className="min-w-0 flex-[2_1_520px] text-[18px] leading-[1.7] text-body-copy">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-[18px]">
            {paragraph}
          </p>
        ))}

        <div className="mt-7 mb-[22px] flex flex-wrap gap-4">
          <div className={`min-w-0 flex-[1_1_220px] px-5 py-[18px] ${CARD}`}>
            <p className={CARD_LABEL}>DEPTH</p>
            <h3 className="text-[19px] leading-snug font-semibold text-ink">{about.depth.title}</h3>
            <p className="mt-1.5 text-[15px] leading-[1.5] text-muted-on-light">{about.depth.text}</p>
          </div>
          <div className={`min-w-0 flex-[2_1_320px] px-5 py-[18px] ${CARD}`}>
            <p className={CARD_LABEL}>BREADTH</p>
            <h3 className="text-[19px] leading-snug font-semibold text-ink">{about.breadth.title}</h3>
            <p className="mt-1.5 text-[15px] leading-[1.6] text-muted-on-light">
              <span className="font-semibold text-body-copy">Hands-on:</span>{" "}
              {about.breadth.handsOn.join(" · ")}
            </p>
            <p className="mt-1 text-[15px] leading-[1.6] text-muted-on-light">
              <span className="font-semibold text-body-copy">Architecture-level:</span>{" "}
              {about.breadth.architectureLevel.join(" · ")}
            </p>
          </div>
        </div>

        <p className="text-muted-on-light">{about.location}</p>
      </div>
    </Section>
  );
}
