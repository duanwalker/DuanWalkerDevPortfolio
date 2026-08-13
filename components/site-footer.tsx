export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-conduit">
      <div className="mx-auto max-w-3xl px-6 py-8 font-mono text-mono text-muted">
        © {year} Duan Walker
      </div>
    </footer>
  );
}
