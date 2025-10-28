"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";
import ErrorBoundary from "@/components/error-boundary";
import Footer from "@/components/sections/Footer";
import Chatbot from "@/components/Chatbot";

const About = dynamic(
  () => import("@/components/sections/about").then((m) => m.About),
  { ssr: true }
);
const Skills = dynamic(
  () => import("@/components/sections/skills").then((m) => m.Skills),
  { ssr: true }
);
const Experience = dynamic(
  () => import("@/components/sections/experience").then((m) => m.Experience),
  { ssr: true }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((m) => m.Projects),
  { ssr: true }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((m) => m.Contact),
  { ssr: true }
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
        <Chatbot />
      </main>
    </ErrorBoundary>
  );
}
