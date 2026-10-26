import { EYEBROW, GUTTER } from "./styles";

/**
 * A homepage section. The id doubles as the anchor target and selects the
 * view-timeline class (tl-<id>) that drives the side-nav dots; the inner
 * container gets the scroll reveal.
 */
export function Section({
  id,
  className = "pt-18 pb-10",
  innerClassName = "",
  children,
}: {
  id: string;
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`tl-${id} ${GUTTER} ${className}`}>
      <div className={`reveal mx-auto max-w-content ${innerClassName}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  onDark = false,
}: {
  /** e.g. "02 · EXPERIENCE" */
  eyebrow: string;
  title: string;
  intro?: string;
  onDark?: boolean;
}) {
  return (
    <>
      <p className={`${EYEBROW} mb-3 ${onDark ? "text-pulse" : "text-accent-on-light"}`}>
        {eyebrow}
      </p>
      <h2
        className={`font-display text-[30px] leading-[1.15] font-semibold tracking-[-0.01em] sm:text-[38px] ${
          intro ? "mb-3" : "mb-10"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className="mb-10 max-w-[720px] text-[17px] leading-[1.6] text-muted-on-light">
          {intro}
        </p>
      )}
    </>
  );
}
