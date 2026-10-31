import Image from "next/image";
import { badges, credentials } from "@/content/site/credentials";
import { Section, SectionHeading } from "./section";
import { CARD, CARD_HOVER } from "./styles";

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading eyebrow="07 · CREDENTIALS" title="Badges, certifications, and learning" />

      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {badges.map((badge) => (
          <li
            key={badge.title}
            className={`flex min-w-0 flex-col items-center gap-2.5 p-4 text-center sm:p-5 ${CARD} ${CARD_HOVER}`}
          >
            {/* Fixed square box so the portrait hexagon and round badges read at the same size. */}
            <Image
              src={badge.src}
              alt={badge.alt}
              width={96}
              height={96}
              className="size-24 object-contain"
            />
            <h3 className="text-[15px] leading-snug font-semibold">{badge.title}</h3>
            <p className="text-[13px] leading-[1.4] text-muted-on-light">{badge.issuer}</p>
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-4">
        {credentials.map((credential) => (
          <li
            key={credential.title}
            className={`min-w-0 flex-[1_1_240px] rounded-card border px-5 py-4 ${
              credential.highlight ? "border-[#A6DCCF] bg-tint" : "border-line bg-card"
            }`}
          >
            <h3 className="text-[16px] font-semibold">{credential.title}</h3>
            <p
              className={`mt-1 text-[14px] ${
                credential.highlight ? "text-body-copy" : "text-muted-on-light"
              }`}
            >
              {credential.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
