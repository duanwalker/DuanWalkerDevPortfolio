import type { ComponentPropsWithoutRef } from "react";

type AnchorProps = ComponentPropsWithoutRef<"a">;

/** Same-page anchors and mailto: links stay in the current tab; everything else opens a new one. */
export function opensInNewTab(href: string | undefined): boolean {
  return !!href && !href.startsWith("#") && !href.startsWith("mailto:");
}

/** A link that opens in a new tab and says so to screen readers. */
export function NewTabLink({ children, ...props }: AnchorProps) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/** Picks NewTabLink or a plain anchor from the href, for links whose destination varies (MDX, data lists). */
export function AutoLink(props: AnchorProps) {
  return opensInNewTab(props.href) ? <NewTabLink {...props} /> : <a {...props} />;
}
