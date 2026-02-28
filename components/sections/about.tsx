"use client";

import { Code2, Zap, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable solutions by following modern coding standards and best practices.",
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "#6366f1", // indigo-500
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building fast, optimized applications that deliver smooth user experiences and handle scale effectively.",
    gradient: "from-yellow-500 to-orange-600",
    glowColor: "#f59e0b", // amber-500
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Thriving in team environments by sharing ideas clearly and working closely to deliver impactful products.",
    gradient: "from-green-500 to-emerald-600",
    glowColor: "#10b981", // emerald-500
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-12 z-auto">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer focused on creating seamless and scalable digital experiences"
        />

        <div className="max-w-6xl mx-auto z-10">
          <div className="mb-10">
            <div className="w-full">
              <GlowingCard className="relative border-0 dark:border shadow-md overflow-hidden rounded-lg bg-gradient-to-br from-white/80 to-slate-100/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>

                <div className="relative p-5 sm:p-6 lg:p-7">
                  <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-2xl"></div>

                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                      Developer Profile
                    </span>
                  </div>

                  <p className="text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-200 font-light">
                    I&rsquo;m a Full-Stack Developer with 1.5+ years of hands-on
                    experience building scalable web and mobile applications. I
                    specialize in modern JavaScript ecosystems including React,
                    Next.js, Node.js and Firebase, with strong exposure to
                    performance optimization, authentication systems and
                    real-time data handling.
                  </p>

                  <div className="my-4 h-px w-20 bg-gradient-to-r from-blue-400/70 via-cyan-400/60 to-transparent"></div>

                  <p className="text-[0.95rem] leading-relaxed text-slate-700 dark:text-slate-200 font-light">
                    I focus on writing clean, maintainable and production-ready
                    code. My approach goes beyond just building features; I care
                    about architecture decisions, scalability, accessibility,
                    and SEO best practices. I&rsquo;ve worked on dynamic admin
                    dashboards, authentication-based systems, blog platforms,
                    and interactive UI applications that prioritize both user
                    experience and system reliability.
                  </p>

                  <div className="mt-4 rounded-xl border border-emerald-200/70 bg-gradient-to-r from-emerald-50/50 to-cyan-100/90 p-3.5 shadow-sm dark:border-emerald-900/60 dark:from-emerald-950/35 dark:to-cyan-950/25">
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      Currently, I&rsquo;m expanding my backend and DevOps
                      knowledge by learning Redis and Docker, aiming to build
                      industry-grade, scalable systems with proper caching,
                      containerization and deployment workflows.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {[
                      "Scalable Architecture",
                      "Accessibility-First UI",
                      "SEO Best Practices",
                    ].map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-slate-300/80 bg-white/80 px-2.5 py-1 text-[10px] font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-300"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>

                  {/* Optional: Tech stack badges */}
                  <div className="mt-4 flex flex-wrap justify-start gap-1.5">
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
                        className="px-2.5 py-1 text-[10px] font-medium bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform duration-200 shadow-sm"
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
