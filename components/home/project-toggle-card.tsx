"use client";

import { useId, useState } from "react";
import { ChevronDownIcon } from "./icons";
import { CARD, CARD_HOVER } from "./styles";

/**
 * Expandable featured-work card. Only the open/closed state lives on the
 * client; the header and panel content are rendered on the server and passed in.
 */
export function ProjectToggleCard({
  header,
  defaultOpen = false,
  children,
}: {
  header: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const buttonId = `${id}-button`;
  const panelId = `${id}-panel`;

  return (
    <div className={`overflow-hidden ${CARD} ${CARD_HOVER}`}>
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full cursor-pointer flex-wrap items-center justify-between gap-4 rounded-card px-5 py-[26px] text-left focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-accent-on-light sm:px-7"
      >
        <span className="flex min-w-0 flex-[1_1_420px] flex-col gap-2.5">{header}</span>
        <span className="flex min-h-11 items-center gap-2.5 text-[15px] text-muted-on-light">
          <span>{open ? "Hide details" : "Show details"}</span>
          <ChevronDownIcon
            className={`text-ink motion-safe:transition-transform motion-safe:duration-200 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="border-t border-line bg-[#FAFAF8] px-5 pt-[26px] pb-7 sm:px-7"
      >
        {children}
      </div>
    </div>
  );
}
