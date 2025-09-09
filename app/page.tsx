"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";
import ErrorBoundary from "@/components/error-boundary";
import Footer from "@/components/sections/Footer";

const About = dynamic(
  () => import("@/components/sections/about").then((m) => m.About),
  { ssr: false }
);
const Skills = dynamic(
  () => import("@/components/sections/skills").then((m) => m.Skills),
  { ssr: false }
);
const Experience = dynamic(
  () => import("@/components/sections/experience").then((m) => m.Experience),
  { ssr: false }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((m) => m.Projects),
  { ssr: false }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((m) => m.Contact),
  { ssr: false }
);

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
