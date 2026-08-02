# duanwalker.dev — Build Spec

**Owner:** Duan Walker
**Builder:** Claude Code (VS Code)
**Repo:** `duanwalker/DuanWalkerDevPortfolio`
**Live:** https://duanwalker.dev

This is the single source of truth for the build. Read it in full before executing any phase.

---

## 1. Purpose

Replace `theduanportfolio.azurewebsites.net` with a site that positions Duan for **Cloud Solution Architect (AI)** roles.

**Primary reader:** a hiring manager or recruiter for a principal-level Azure/AI architecture role, spending 90 seconds before deciding whether to reach out.

**What that reader is evaluating:** system design judgment and tradeoff reasoning. Not code samples. Architecture diagrams and decision write-ups matter more than repo links.

**The job of the homepage:** make it obvious within one screen that this person designs and ships AI systems on Azure — not that this person maintains websites.

---

## 2. Locked decisions

Settled. Do not relitigate during the build.

| Decision | Value |
| --- | --- |
| Framework | Next.js 16.2.12, App Router, TypeScript, `output: 'export'` |
| Styling | Tailwind — **check major version, see §4** |
| Content | MDX files, one per project |
| Host | Azure Static Web Apps, Free tier, personal subscription |
| CI/CD | GitHub Actions (already wired). **Not** Azure DevOps |
| Domain | `duanwalker.dev` — live, cert issued |
| Analytics | None at launch |
| Resume | Committed PDF at `/duan-walker-resume.pdf` |
| Branding | Lead with "Duan Walker." "The Computer Tutor" appears in the footer and one About sentence only |

**Why static export:** no server-side needs, the free tier is genuinely free, nothing to patch or keep awake. Any feature request requiring SSR is rejected or moved to a separate service.

---

## 3. Design direction — "Definition × Orchestration"

### Palette

```
depth      #1B1834   background (deep indigo)
surface    #221E40   cards, raised panels
mist       #EDEAF6   primary text
lilac      #A9A0D4   body/secondary text
muted      #9990C4   metadata, chip labels, timestamps only
conduit    #3A3564   rails, borders, inactive nodes
pulse      #6EE0C8   active node, links, signal
amber      #F2B95C   status: in development
```

Verify every text/background pair at **4.5:1 minimum**. If `lilac` on `depth` falls short, lighten it rather than compromising.

### Type

- **Display:** Sora 700, tracking `-0.03em`
- **Body:** Source Sans 3 400/600, line-height 1.7
- **Utility:** IBM Plex Mono 400/500 — chips, metadata keys, status badges, definition blocks

Load via `next/font/google`, which self-hosts at build time and works correctly with static export.

### Voice

A claim about what he does, not a category label:

> **I design AI systems that run on Azure.**
> Senior Cloud Integrations Engineer at Microsoft. Seven years building orchestration, agent workflows, and integration architecture for enterprise customers.

Placeholder-quality. Final copy written at Phase 3.

### Two signature moments, deliberately separated

Never both on one screen.

| Surface | Signature |
| --- | --- |
| Homepage | The **workflow rail** — vertical connector line, a node per featured project, lines drawing in and nodes lighting on scroll |
| Project detail page | The **definition block** — a collapsed mono summary (stack, integrations, status) that expands into the prose write-up |

Homepage answers *what has he built*. Project page answers *how did he think about it*.

**Rail nodes navigate — they do not expand in place.** Each node card links to `/projects/[slug]`. The card already shows tagline, tech chips, and status.

Separate routes matter here: a shareable per-project URL for applications and recruiter emails, per-project OG previews when links are shared, per-project metadata, and a homepage that doesn't grow unboundedly. Whole card is the click target — not a "read more" link. Hover: border shifts `conduit` → `pulse`, no lift or scale.

**Motion rules:** honor `prefers-reduced-motion` — under it, rails render statically at full opacity and nodes render active, no transitions. Rail draw uses `IntersectionObserver`, not scroll listeners. If the animation can't be smooth on a mid-range laptop, ship it static; a janky rail is worse than no rail.

### Explicitly out of bounds

These are what AI-built portfolios converge on, and a developer audience recognizes them:
- Cream `#F4F1EA` background + high-contrast serif + terracotta `#D97757` accent
- Near-black background + single acid-green or vermilion accent
- Broadsheet layout: hairline rules, zero border-radius, dense newspaper columns

---

## 4. Stack configuration — known gotchas

1. ⚠️ **Check the Tailwind major version before writing any config.** Next 16 scaffolds **Tailwind v4**, which is CSS-first — there is no `tailwind.config.ts`, and tokens go in a `@theme` block inside `app/globals.css`. If you find yourself creating `tailwind.config.js`, stop; you're on the v3 path and it won't apply.
2. **`next/image` requires a server.** With `output: 'export'` it fails or degrades in CI. `images: { unoptimized: true }` is already set — leave it. Hand-optimize assets before commit.
3. **No API routes.** Static export drops them. Backend features go to a separate service, never this repo.
4. **`IS_STATIC_EXPORT: true`** is already in the workflow env block. Do not remove it.
5. **`trailingSlash: true`** is set for predictable static routing.

---

## 5. Site map

```
/                    Hero, featured project rail, "More work" grid, brief about, contact
/projects/[slug]     One page per project
/about               Career narrative, Computer Tutor origin, certs
/duan-walker-resume.pdf
```

No blog — Tech Community and Medium posts are linked out, not rehosted. No contact form; static export has no backend. Email and LinkedIn as links.

**Deleted from the old site:** the skill rating bars. Self-assigned 0–10 scores invite "why did he give himself a 7?" and read as junior. Competence is demonstrated in the write-ups.

---

## 6. Content model and scalability

### Frontmatter

`content/projects/*.mdx`

```yaml
---
slug: alphabot
title: AlphaBot
tagline: AI-assisted trading platform with human-in-the-loop execution
status: active          # active | in-development | internal | archived
year: 2026
role: Sole architect and engineer
stack: [react, nodejs, express, claude-api, azure-tables]
integrations: [alpaca, polygon, alpha-vantage]
repo: null              # null renders nothing — no link, no "private" badge
demo: null
thumbnail: /img/projects/alphabot.png
diagram: /img/diagrams/alphabot-architecture.svg
featured: true
order: 1
---
```

Body sections, in this order every time: **Problem → Constraints → Architecture → Decisions and tradeoffs → What I'd do differently.**

That last section is not optional. It is the strongest available signal of architectural maturity, and almost nobody includes it.

`repo: null` must render *nothing*. Absence is quieter than an explanation.

### The rail's scaling limit

**A vertical scroll-flow degrades past about five nodes.** At three it reads as an orchestration diagram; at ten it's a chore, and the draw-in effect becomes something to scroll past rather than notice.

**Rule: the rail shows `featured: true` projects only, hard-capped at 5.** Everything else renders below in a compact grid — same chips, same badges, no rail, no animation. Section header: "More work."

The rail stays a curated highlight reel that always looks composed; the site grows without bound underneath it. Promoting or demoting is a one-word frontmatter change.

### Adding a project

One MDX file in `content/projects/`. No code changes. The homepage reads the directory, filters `featured`, sorts by `order`, renders the rail; everything else falls to the grid.

### Tech chips

Chips render from the `stack` and `integrations` arrays through a single `<TechChip>` component. Never hand-authored per project.

The component holds a lookup map so casing stays consistent:

```ts
const LABELS: Record<string, string> = {
  'nextjs': 'Next.js',
  'nodejs': 'Node.js',
  'azure-functions': 'Azure Functions',
  'claude-api': 'Claude API',
  // unknown keys fall through to the raw string
};
```

Discipline rules, or chips metastasize:
- **Max 6 per card.** If a project needs more, the write-up covers the rest.
- **Ordered by significance, not alphabetically.** The first two chips are what the project *is*.
- `muted` text on a `conduit` border, no fill. Metadata, not buttons — no hover state, not clickable.

---

## 7. Project content

### 7.1 Internal Escalation Workflow Automation

`status: internal` — **no repo, no demo, no screenshots, no metrics.**

Describes Microsoft-internal tooling touching enterprise customer case data. The write-up covers the *pattern* only. Screenshots are prohibited — any UI capture leaks case context.

> **Draft copy — requires manager review before publishing.**

**Problem.** A time-sensitive internal escalation path was fully manual: a human had to notice the trigger condition, assemble context from the case record, compose an outbound communication, then watch for a response to know whether the path could close. Every step was reliable only as long as someone remembered to do it.

**Constraints.** Had to run entirely within approved internal tooling. Had to keep a human in the approval path. Had to detect closure conditions without polling anything it shouldn't.

**Architecture.** A Copilot Studio agent as the intake and interaction surface, Logic Apps orchestrating state transitions between stages, and an inbox-monitoring trigger for reply detection and automatic closure.

**Decisions.** Copilot Studio over a custom front end because adoption depends on the tool living where users already are. Logic Apps over a function app because the workflow is long-running and stateful, and the visual definition is itself the documentation for the next engineer. Reply detection over manual closure because a workflow that needs a human to remember to close it inherits the original problem.

**What I'd do differently.** Instrument stage transitions from day one. Retrofitting telemetry to answer "where do instances stall?" was harder than building it in.

---

### 7.2 AlphaBot (Barterite)

`status: active`, `repo: null` — private.

Strongest depth signal on the site. Longest write-up, most detailed diagram.

Cover: React + Node/Express, Claude API as the authoritative sentiment scorer with FinBERT handling ranking and curation upstream, a 14-strategy registry spanning income/hedge/growth/passive, Azure Table Storage for persistence, and a human-in-the-loop approval gate on every generated trade idea with paper-trading mode throughout.

Lead **Decisions** with the broker-agnostic adapter layer — `BrokerInterface` with an Alpaca implementation and a Schwab stub. That is the most architecturally legible decision in the project: designing against an interface rather than a vendor, which is exactly the judgment a CSA is hired for. Second: the provider fallback chain (Alpaca live quotes → Polygon fundamentals → Alpha Vantage fallback, rate-limited), which shows designing for third-party degradation.

**Do not** describe it as a trading bot, and do not state or imply returns. It is a research and decision-support tool with a human approval gate. Keep that framing consistent everywhere.

⚠️ The resume currently says **OANDA and forex**. Stale — the real stack is Alpaca, Polygon, Alpha Vantage, covering stocks and options. Site and resume must agree.

---

### 7.3 FlowScribe.AI

`status: in-development`, `repo: null` (going private), `demo: /projects/flowscribe#demo`

Parses Azure Logic App JSON definitions and generates Microsoft-style documentation of structure, triggers, and actions.

**Demo implementation — build on the portfolio, no API calls:**

Run three or four representative Logic App definitions through FlowScribe once, by hand. Commit each input/output pair as a fixture in `content/fixtures/flowscribe/`. The demo component is a sample picker: source JSON on the left, generated documentation on the right, both read from committed files.

Zero API cost. Cannot be rate-limited. Cannot be abused. Renders instantly.

When FlowScribe ships, the same component gains a "paste your own" tab pointed at the real endpoint — hosted on the FlowScribe product site, never here. The fixture version stays as the permanent fallback when the API is down or the daily budget is spent.

⚠️ Resume and repo README both describe **ASP.NET Core Web API + React**. The repo is actually **Razor Pages** — C# 71.7% / HTML 27.6%, no React. Three sources, three answers. Resolve after the FlowScribe scoping session, then align all three.

---

### 7.4 Hunter.AI

`status: in-development`, `repo: null`, `featured: false`

Autonomous job discovery and application agent. Azure VM running an agent runtime, Claude API for reasoning tasks, public ATS APIs for discovery.

**Held back from initial launch.** Of four projects, two are unfinished; shipping with two-of-four marked "in development" reads as a portfolio of intentions. AlphaBot and the escalation automation are real and substantial; FlowScribe has a working demo. That is a strong, complete-feeling three.

Write the MDX file now with `featured: false`. Publish by flipping one field when there's something running.

---

## 8. Earlier work

One `/about` section, no individual pages.

**Two real entries:**
- **Black Political Caucus of Charlotte** — ongoing volunteer technical consulting, live site. Frame as stakeholder-facing consulting for a real client, not "I built a website." Closest thing on the list to CSA work.
- **Triad Data Collection** (2019) — ASP.NET Identity, Entity Framework, Azure SQL. The only earlier project with a genuine backend, auth, and data layer.

**One line item:**
- **Readium** — open-source contribution to the Readium Foundation's test tooling.

**Cut entirely (9):** the four Heroku sites (free dynos ended 2022 — assume dead), Give N Go, Brock & Scott, and all three Photoshop pieces, which currently link to `#`.

---

## 9. Build phases

Execute one phase, then stop and report. Do not proceed without approval.

| Phase | Scope |
| --- | --- |
| **1** | Design tokens, fonts, and a throwaway `/tokens` page. Nothing else. |
| **2** | Layout shell, routing, MDX pipeline, frontmatter parsing. |
| **3** | Homepage: hero, workflow rail, "More work" grid. |
| **4** | Project detail pages + the three publishable MDX files + Hunter.AI unfeatured. |
| **5** | FlowScribe demo component with committed fixtures. |
| **6** | About, resume PDF, footer, metadata, OG images. Delete `/tokens`. |
| **7** | Accessibility and responsive pass. Ship. |

### Phase 1 detail

**Do not** build the homepage, the rail, MDX files, project pages, layouts, or navigation. Those are Phases 2–4.

1. Register Sora (700), Source Sans 3 (400/600), IBM Plex Mono (400/500) via `next/font/google` in the root layout, exposed as CSS variables.
2. Declare the §3 palette and a type scale as design tokens.
3. Set `depth` as page background, `mist` as default text color.
4. Build `/tokens` rendering: every palette swatch with name and hex; the full type scale in all three families and weights with sample text; one example each of a tech chip, a status badge (active / in development / internal), and a card surface.
5. Verify every foreground/background pair at 4.5:1. **Report failures rather than silently adjusting.**
6. Confirm `npm run build` still produces `out/` cleanly.

Deliverable: a working `/tokens` page and a note listing any contrast failures. Stop and wait.

---

## 10. Guardrails

- **No placeholder content.** No lorem ipsum, no invented metrics, no filler testimonials. If content is missing, leave the section out and flag it.
- **No invented specifics.** Never generate performance numbers, user counts, uptime figures, or dollar amounts. Every number on this site must be one Duan supplied.
- **Never add API calls to this repo.** Static export, permanently.
- **No `localStorage`/`sessionStorage`.**
- **Quality floor, unannounced:** responsive to 375px, visible keyboard focus, `prefers-reduced-motion` respected, semantic headings, alt text on every image.
- **Restraint.** The rail and the definition block are the two bold moves, on separate screens. Everything else stays quiet. Cut any decoration that doesn't serve the brief.
- **One phase at a time.** Stop and report. Do not run ahead.

---

## 11. Open items for Duan

| Item | Blocks |
| --- | --- |
| Manager review of §7.1 copy | Publishing that page |
| Confirm FlowScribe's real stack | §7.3 accuracy |
| Run sample Logic App definitions through FlowScribe for fixtures | Phase 5 |
| Updated resume PDF | Phase 6 |
| Headshot | Phase 3 |
| Make FlowScribe repo private + rotate any secrets in `appsettings*.json` | Before any public link |

**On that last one:** the DocuBot repo tracks `appsettings.json` and `appsettings.Development.json`, plus `bin/Debug/net8.0` and `obj/`. Going private caps future exposure but does not undo git history. If a key or connection string was ever committed, rotate it — deleting the line is not sufficient.
