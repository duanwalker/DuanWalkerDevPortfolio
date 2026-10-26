import { SideNav } from "@/components/home/side-nav";
import { TopBar } from "@/components/home/top-bar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Skills } from "@/components/home/skills";
import { FeaturedWork } from "@/components/home/featured-work";
import { Writing } from "@/components/home/writing";
import { Hackathons } from "@/components/home/hackathons";
import { Credentials } from "@/components/home/credentials";
import { Contact, HomeFooter } from "@/components/home/contact";

export default function Home() {
  // page-timelines scopes the section view-timelines so the side nav (a sibling
  // of the sections) can read them. TopBar must stay a direct child for sticky.
  return (
    <div className="page-timelines flex-1 bg-ground text-ink">
      <SideNav />
      <TopBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <FeaturedWork />
        <Writing />
        <Hackathons />
        <Credentials />
        <Contact />
      </main>
      <HomeFooter />
    </div>
  );
}
