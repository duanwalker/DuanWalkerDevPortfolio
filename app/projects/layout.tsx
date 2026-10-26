import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

/** Project pages keep the original header and footer; the homepage has its own top bar. */
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
