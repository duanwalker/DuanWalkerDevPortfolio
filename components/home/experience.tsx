import { earlierCareer, jobs } from "@/content/site/experience";
import { Section, SectionHeading } from "./section";
import { CARD, CARD_HOVER } from "./styles";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="02 · EXPERIENCE" title="Where I’ve worked" />

      <ol className="flex flex-col gap-5">
        {jobs.map((job) => (
          <li
            key={job.employer}
            className={`flex flex-wrap gap-6 p-6 sm:p-8 ${CARD} ${CARD_HOVER}`}
          >
            <div className="min-w-0 flex-[1_1_200px]">
              <p className="font-mono text-[14px] text-muted-on-light">{job.dates}</p>
              <h3 className="mt-2 text-[22px] leading-snug font-semibold">{job.employer}</h3>
              {job.employerNote && (
                <p className="mt-1 text-[14px] text-muted-on-light">{job.employerNote}</p>
              )}
            </div>
            <div className="min-w-0 flex-[3_1_520px]">
              <p className={`text-[19px] leading-snug font-semibold ${job.subline ? "mb-1" : "mb-4"}`}>
                {job.role}
              </p>
              {job.subline && (
                <p className="mb-4 text-[15px] text-muted-on-light">{job.subline}</p>
              )}
              <ul className="list-disc pl-5 text-[16px] leading-[1.65] text-body-copy">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}

        <li className="flex flex-wrap items-center gap-6 rounded-card border border-dashed border-[#B9C0CC] px-6 py-6 sm:px-8">
          <h3 className="flex-[1_1_200px] font-mono text-[14px] font-normal text-muted-on-light">
            Earlier career
          </h3>
          <p className="min-w-0 flex-[3_1_520px] text-[16px] leading-[1.65] text-body-copy">
            {earlierCareer.join(" · ")}
          </p>
        </li>
      </ol>
    </Section>
  );
}
