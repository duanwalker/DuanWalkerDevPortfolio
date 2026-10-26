import Image from "next/image";
import { hackathonBadge, hackathonEntries } from "@/content/site/hackathons";
import { Section, SectionHeading } from "./section";
import { CARD } from "./styles";

export function Hackathons() {
  const entries = hackathonEntries.filter((entry) => entry.visible);

  return (
    <Section id="hackathons">
      <SectionHeading
        eyebrow="06 · HACKATHONS"
        title="I like building under a deadline"
        intro="Microsoft’s company-wide hackathon has been a yearly outlet for the tooling and agents I wished existed on the support floor."
      />

      <div className="flex flex-wrap items-stretch gap-5">
        <ol className="flex min-w-0 flex-[3_1_560px] flex-col gap-4">
          {entries.map((entry) => (
            <li key={entry.title} className={`flex flex-wrap gap-5 px-6 py-6 sm:px-7 ${CARD}`}>
              <p className="flex-[0_0_80px] font-mono text-[22px] font-medium text-accent-on-light">
                {entry.year}
              </p>
              <div className="min-w-0 flex-[1_1_360px]">
                <h3 className="mb-1.5 text-[18px] font-semibold">{entry.title}</h3>
                <p className="text-[16px] leading-[1.6] text-body-copy">{entry.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="flex min-w-0 flex-[1_1_260px] flex-col items-center justify-center gap-4 rounded-card bg-depth p-7 text-center">
          <Image
            src={hackathonBadge.src}
            alt={hackathonBadge.alt}
            width={180}
            height={180}
            className="size-[180px]"
          />
          <figcaption className="text-[16px] leading-[1.5] text-text-on-dark">
            {hackathonBadge.caption[0]}
            <br />
            {hackathonBadge.caption[1]}
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
