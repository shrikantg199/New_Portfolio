import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { Navigation } from "@/components/navigation";
import ErrorBoundary from "@/components/error-boundary";
import Footer from "@/components/sections/Footer";

const SectionFallback = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="h-24 rounded-xl bg-slate-100 dark:bg-slate-800 animate-pulse" />
  </div>
);

const About = dynamic(() => import("@/components/sections/about"), {
  ssr: false,
  loading: () => <SectionFallback />,
});
const Skills = dynamic(() => import("@/components/sections/skills"), {
  ssr: false,
  loading: () => <SectionFallback />,
});
const Experience = dynamic(() => import("@/components/sections/experience"), {
  ssr: false,
  loading: () => <SectionFallback />,
});
const Projects = dynamic(() => import("@/components/sections/projects"), {
  ssr: false,
  loading: () => <SectionFallback />,
});
const Contact = dynamic(() => import("@/components/sections/contact"), {
  ssr: false,
  loading: () => <SectionFallback />,
});
const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });

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
        {/* <Chatbot /> */}
      </main>
    </ErrorBoundary>
  );
}
