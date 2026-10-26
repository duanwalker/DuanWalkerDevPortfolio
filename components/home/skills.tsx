import { skillGroups } from "@/content/site/skills";
import { Chip } from "./chip";
import { SkillGroupIcon } from "./icons";
import { Section, SectionHeading } from "./section";
import { CARD } from "./styles";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="03 · SKILLS" title="What I work with" />

      <div className="flex flex-wrap gap-5">
        {skillGroups.map((group, index) => {
          // Two per row on desktop; an odd last card spans the full width.
          const isLoneLast = index === skillGroups.length - 1 && skillGroups.length % 2 === 1;
          return (
            <div
              key={group.title}
              className={`min-w-0 p-6 sm:p-7 ${CARD} ${isLoneLast ? "flex-[1_1_100%]" : "flex-[1_1_520px]"}`}
            >
              <div className="mb-5 flex flex-wrap items-center gap-3.5">
                <span className="flex size-11 items-center justify-center rounded-[10px] bg-tint text-accent-on-light">
                  <SkillGroupIcon icon={group.icon} />
                </span>
                <h3 className="text-[20px] font-semibold">{group.title}</h3>
                {group.tag && <Chip tone="neutral">{group.tag}</Chip>}
              </div>
              <ul className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[#CBD2DC] px-4 py-2 text-[15px] transition-[border-color,color,transform] duration-150 hover:border-accent-on-light hover:text-accent-on-light motion-safe:hover:-translate-y-0.5"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
