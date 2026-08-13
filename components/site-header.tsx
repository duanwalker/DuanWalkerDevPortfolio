import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-conduit">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-h3 text-mist">
          Duan Walker
        </Link>
      </div>
    </header>
  );
}
