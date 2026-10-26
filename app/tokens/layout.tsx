import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function TokensLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
