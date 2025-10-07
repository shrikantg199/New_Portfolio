"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Users } from "lucide-react";
import Image from "next/image";
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
          {/* Flex container for image and content */}
          <div className="flex flex-col lg:flex-row gap-6 items-center mb-10">
            {/* Left illustration image - hidden on mobile */}
            <div className="lg:w-2/5 w-full md:flex justify-center lg:justify-start lg:block hidden">
              <div className="relative w-full max-w-xs">
                {/* Actual image using Next.js Image component */}
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/hero.png"
                    alt="Shrikant Gaikwad - Developer"
                    width={350}
                    height={350}
                    className="object-cover"
                  />
                </div>
                {/* Enhanced badge on top-right corner of image */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-lg border-2 border-white dark:border-slate-800 transform rotate-6 hover:rotate-12 transition-transform duration-300">
                  <span className="flex items-center tracking-wider">
                    <Code2 className="w-2.5 h-2.5 mr-1" />
                    DEV
                  </span>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="lg:w-3/5 w-full">
              <GlowingCard className="relative border-0 dark:border shadow-md overflow-hidden rounded-lg bg-gradient-to-br from-white/80 to-slate-100/80 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm">
                {/* Animated gradient orbs */}
                <div className="absolute top-0 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-700"></div>

                <div className="relative p-4 sm:p-5">
                  {/* Icon or badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-md">
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

                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-light">
                    I&#39;m a{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Full Stack Web Developer
                    </span>{" "}
                    with{" "}
                    <span className="relative inline-block">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">
                        1.2+ years
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform scale-x-100"></span>
                    </span>{" "}
                    of experience building modern web applications.
                  </p>

                  <div className="my-3 flex items-center">
                    <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent w-16"></div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 font-light">
                    I specialize in the{" "}
                    <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      React & Node.js ecosystem
                    </span>{" "}
                    and enjoy turning complex ideas into intuitive, high-quality
                    products.
                  </p>

                  <div className="mt-3 p-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm">
                    <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      My focus is on writing{" "}
                      <span className="font-semibold text-slate-800 dark:text-slate-100">
                        clean, maintainable code
                      </span>{" "}
                      while delivering{" "}
                      <span className="relative inline-block group">
                        <span className="font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                          performance-driven
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                      </span>{" "}
                      solutions that scale and provide real value to users.
                    </p>
                  </div>

                  {/* Optional: Tech stack badges */}
                  <div className="mt-3 flex flex-wrap justify-start gap-1.5">
                    {["React", "Node.js", "TypeScript", "Tailwind"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-medium bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-300 dark:border-slate-600 hover:scale-105 transition-transform duration-200 shadow-sm"
                        >
                          {tech}
                        </span>
                      )
                    )}
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
