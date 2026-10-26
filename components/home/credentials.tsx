import Image from "next/image";
import { badges, credentials } from "@/content/site/credentials";
import { Section, SectionHeading } from "./section";
import { CARD, CARD_HOVER } from "./styles";

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading eyebrow="07 · CREDENTIALS" title="Badges, certifications, and learning" />

      <div className="flex flex-wrap gap-5">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className={`flex min-w-0 flex-[1_1_240px] flex-col items-center gap-3.5 p-7 text-center ${CARD} ${CARD_HOVER}`}
          >
            <Image src={badge.src} alt={badge.alt} width={132} height={132} className="size-[132px]" />
            <h3 className="text-[17px] font-semibold">{badge.title}</h3>
            <p className="text-[15px] text-muted-on-light">{badge.issuer}</p>
          </div>
        ))}

        <ul className="flex min-w-0 flex-[1_1_240px] flex-col gap-4">
          {credentials.map((credential) => (
            <li
              key={credential.title}
              className={`rounded-card border px-6 py-[22px] ${
                credential.highlight ? "border-[#A6DCCF] bg-tint" : "border-line bg-card"
              }`}
            >
              <h3 className="text-[17px] font-semibold">{credential.title}</h3>
              <p
                className={`mt-1 text-[15px] ${
                  credential.highlight ? "text-body-copy" : "text-muted-on-light"
                }`}
              >
                {credential.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
