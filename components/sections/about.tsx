"use client";

import { Code2, Zap, Users, CodeXml } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";

const highlights = [
  {
    icon: Code2,
    title: "Scalable Architecture",
    description:
      "Designing modular and maintainable web applications with clear structure, separation of concerns, and long-term scalability in mind.",
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "#6366f1", // indigo-500
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Enhancing application speed and responsiveness through efficient rendering, optimized queries, and thoughtful resource management.",
    gradient: "from-yellow-500 to-orange-600",
    glowColor: "#f59e0b", // amber-500
  },
  {
    icon: Users,
    title: "Production Readiness",
    description:
      "Building secure, reliable systems with proper authentication, deployment workflows, and scalable backend foundations.",
    gradient: "from-green-500 to-emerald-600",
    glowColor: "#10b981", // emerald-500
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-16 z-auto">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="Building scalable, performance-driven web and mobile applications"
        />

        <div className="max-w-6xl mx-auto z-10">
          <div className="mb-12">
            <div className="w-full">
              <GlowingCard className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#111827]/95 dark:bg-[#131A2A]/95 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-sm">
                <div className="relative p-6 sm:p-7 lg:p-9">
                  <div className="mb-5 flex items-center justify-start gap-2 self-start text-left">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/30 to-cyan-500/30">
                      <CodeXml size={28} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Engineering Overview
                    </span>
                  </div>

                  <p className="text-[0.92rem] leading-[1.8] text-slate-200 font-light">
                    I build scalable web and mobile applications using React,
                    Next.js, Node.js, and Firebase.
                  </p>

                  <p className="mt-5 text-[0.92rem] leading-[1.8] text-slate-200 font-light">
                    Delivered a production LMS serving{" "}
                    <span className="font-bold text-white">150+ users</span>,
                    with optimized rendering and queries that improved response
                    time by <span className="font-bold text-white">35%</span>.
                  </p>

                  <div className="my-5 h-px w-16 bg-white/10"></div>

                  <p className="text-[0.92rem] leading-[1.8] text-slate-200 font-light">
                    Focused on clean architecture, authentication systems, and
                    production-ready deployments.
                  </p>

                  <div className="mt-5 border-l-2 border-cyan-400/70 pl-3.5">
                    <p className="text-[0.82rem] leading-[1.75] text-slate-300 italic">
                      Currently deepening backend and DevOps expertise with
                      Redis and Docker to design scalable, cache-optimized
                      systems and structured deployment workflows.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Scalable Architecture",
                      "Accessibility-First UI",
                      "SEO Best Practices",
                    ].map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-200"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  {/* Optional: Tech stack badges */}
                  <div className="mt-5 flex flex-wrap justify-start gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Node.js",
                      "Firebase",
                      "Redis",
                      "Docker",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-medium bg-white/5 text-slate-200 rounded-full border border-white/10 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlowingCard>
            </div>
          </div>

          {/* Highlights section */}
          <div className="mt-6">
            <GlowingCards gap="1rem" responsive={true}>
              {highlights.map((highlight, index) => (
                <GlowingCard
                  key={highlight.title}
                  glowColor={highlight.glowColor}
                  className="h-full"
                >
                  <div className="p-4 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-2 rounded-xl flex items-center justify-center bg-gradient-to-br ${highlight.gradient} shadow-md`}
                    >
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-base font-bold mb-1.5 text-slate-800 dark:text-slate-100">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                      {highlight.description}
                    </p>
                  </div>
                </GlowingCard>
              ))}
            </GlowingCards>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
