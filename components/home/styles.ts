/** Horizontal page gutter: 48px on desktop, collapsing on smaller screens. */
export const GUTTER = "px-4 sm:px-8 lg:px-12";

export const FOCUS_ON_LIGHT =
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-accent-on-light";

export const FOCUS_ON_DARK =
  "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-pulse";

/** Outlined on dark surfaces; fills with pulse on hover and keyboard focus. */
export const OUTLINE_TO_PULSE =
  "border border-border-on-dark hover:border-pulse hover:bg-pulse hover:text-depth focus-visible:border-pulse focus-visible:bg-pulse focus-visible:text-depth motion-safe:transition-colors motion-safe:duration-150";

export const EYEBROW = "font-mono text-[14px] tracking-[0.04em]";

export const CARD = "rounded-card border border-line bg-card";

/** Cards that respond to hover with the accent border. */
export const CARD_HOVER = "transition-colors hover:border-accent-on-light";
