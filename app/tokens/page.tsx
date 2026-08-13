const PALETTE = [
  { name: "depth", hex: "#1B1834", note: "background" },
  { name: "surface", hex: "#221E40", note: "cards, raised panels" },
  { name: "mist", hex: "#EDEAF6", note: "primary text" },
  { name: "lilac", hex: "#A9A0D4", note: "body / secondary text" },
  { name: "muted", hex: "#9990C4", note: "metadata, chip labels, timestamps" },
  { name: "conduit", hex: "#3A3564", note: "rails, borders, inactive nodes" },
  { name: "pulse", hex: "#6EE0C8", note: "active node, links, signal" },
  { name: "amber", hex: "#F2B95C", note: "status: in development" },
] as const;

const SCALE = [
  { token: "text-display", sizeClass: "text-display", label: "Display", sample: "Design AI systems" },
  { token: "text-h1", sizeClass: "text-h1", label: "H1", sample: "Design AI systems" },
  { token: "text-h2", sizeClass: "text-h2", label: "H2", sample: "Design AI systems" },
  { token: "text-h3", sizeClass: "text-h3", label: "H3", sample: "Design AI systems" },
  { token: "text-body-lg", sizeClass: "text-body-lg", label: "Body Large", sample: "Senior Cloud Integrations Engineer at Microsoft." },
  { token: "text-body", sizeClass: "text-body", label: "Body", sample: "Senior Cloud Integrations Engineer at Microsoft." },
  { token: "text-small", sizeClass: "text-small", label: "Small", sample: "Senior Cloud Integrations Engineer at Microsoft." },
  { token: "text-mono", sizeClass: "text-mono", label: "Mono", sample: "stack: claude-api, azure-tables" },
] as const;

function Swatch({ name, hex, note }: { name: string; hex: string; note: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-20 rounded-lg border border-conduit"
        style={{ backgroundColor: hex }}
      />
      <div className="font-mono text-mono text-mist">{name}</div>
      <div className="font-mono text-mono text-muted">{hex}</div>
      <div className="text-small text-lilac">{note}</div>
    </div>
  );
}

function TechChip({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-conduit px-3 py-1 font-mono text-mono text-muted">
      {label}
    </span>
  );
}

function StatusBadge({
  label,
  color,
}: {
  label: string;
  color: "pulse" | "amber" | "muted";
}) {
  const colorClass = {
    pulse: "border-pulse text-pulse",
    amber: "border-amber text-amber",
    muted: "border-muted text-muted",
  }[color];
  const dotClass = {
    pulse: "bg-pulse",
    amber: "bg-amber",
    muted: "bg-muted",
  }[color];
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-mono ${colorClass}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
      {label}
    </span>
  );
}

export default function TokensPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-display text-h1 text-mist">Design tokens</h1>
        <p className="text-body text-lilac">
          Phase 1 reference page. Not part of the shipped site — deleted in Phase 6.
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-h2 text-mist">Palette</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {PALETTE.map((color) => (
            <Swatch key={color.name} {...color} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8">
        <h2 className="font-display text-h2 text-mist">Type scale</h2>

        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-mono text-muted">Display — Sora 700</h3>
          <div className="flex flex-col gap-4">
            {SCALE.slice(0, 4).map((step) => (
              <div key={step.token} className="flex flex-col gap-1">
                <div className="font-mono text-mono text-muted">
                  {step.token} · {step.label}
                </div>
                <div className={`font-display ${step.sizeClass} text-mist`}>
                  {step.sample}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-mono text-muted">
            Body — Source Sans 3, 400 / 600
          </h3>
          <div className="flex flex-col gap-4">
            {SCALE.slice(4, 7).map((step) => (
              <div key={step.token} className="flex flex-col gap-1">
                <div className="font-mono text-mono text-muted">
                  {step.token} · {step.label}
                </div>
                <div
                  className={`font-body font-normal ${step.sizeClass} text-mist`}
                >
                  {step.sample} (400)
                </div>
                <div
                  className={`font-body font-semibold ${step.sizeClass} text-mist`}
                >
                  {step.sample} (600)
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-mono text-mono text-muted">
            Utility — IBM Plex Mono, 400 / 500
          </h3>
          <div className="flex flex-col gap-2">
            <div className="font-mono font-normal text-mono text-mist">
              {SCALE[7].sample} (400)
            </div>
            <div className="font-mono font-medium text-mono text-mist">
              {SCALE[7].sample} (500)
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-h2 text-mist">Tech chip</h2>
        <div className="flex flex-wrap gap-3">
          <TechChip label="Claude API" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-h2 text-mist">Status badges</h2>
        <div className="flex flex-wrap gap-3">
          <StatusBadge label="active" color="pulse" />
          <StatusBadge label="in development" color="amber" />
          <StatusBadge label="internal" color="muted" />
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-h2 text-mist">Card surface</h2>
        <div className="max-w-sm rounded-xl border border-conduit bg-surface p-6">
          <div className="font-mono text-mono text-muted">2026 · active</div>
          <h3 className="mt-2 font-display text-h3 text-mist">AlphaBot</h3>
          <p className="mt-2 text-body text-lilac">
            AI-assisted trading platform with human-in-the-loop execution.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <TechChip label="React" />
            <TechChip label="Claude API" />
          </div>
        </div>
      </section>
    </div>
  );
}
