"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { SocialLink } from "@/lib/types";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
// Inline icon components to avoid bundling lucide-react
const IconDownload = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);
const IconExternalLink = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    <path d="M21 14v7H3V3h7" />
  </svg>
);
// Removed floatingElements as requested

// Subtle floating code symbols
const floatingSymbols = [
  { text: "{}", delay: 1, duration: 16, x: "25%", y: "60%" },
  { text: "</>", delay: 3, duration: 18, x: "70%", y: "15%" },
  { text: "[]", delay: 2.2, duration: 17, x: "12%", y: "35%" },
  { text: "()", delay: 4.1, duration: 19, x: "82%", y: "65%" },
  { text: "=>", delay: 1.8, duration: 20, x: "55%", y: "75%" },
  { text: ";/>", delay: 2.8, duration: 21, x: "40%", y: "18%" },
  { text: "{/* */}", delay: 3.6, duration: 22, x: "5%", y: "80%" },
  { text: "const", delay: 5.2, duration: 24, x: "90%", y: "40%" },
];

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/shrikantg199",
    imageSrc: "/social-icon/GitHub.png",
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/shrikant11",
    imageSrc: "/social-icon/Linkedin.png",
    label: "LinkedIn",
  },
  {
    href: "https://x.com/its_shri__11",
    imageSrc: "/social-icon/X.png",
    label: "X",
  },
  {
    href: "mailto:shrikantg199@gmail.com",
    imageSrc: "/social-icon/Gmail.png",
    label: "Email",
  },
  {
    href: "https://youtube.com/@expocoder?si=h-MoyFPACBBLewF8",
    imageSrc: "/social-icon/Youtube.png",
    label: "YouTube",
  },
];

const HeroPointerTitle = () => (
  <div className="flex items-center space-x-2 bg-cyan-500 from-green-500 via-emerald-500 to-teal-500 p-2 rounded-full">
    <Image
      src="/Hero.jpeg"
      height={20}
      width={20}
      alt="Shrikant avatar"
      className="rounded-full border-2 border-white"
    />
    <p className="text-xs font-medium">Shrikant Gaikwad</p>
  </div>
);

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Helpers to disable or tone down animations when reduced motion is preferred
  const animated = !prefersReducedMotion;

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900"
      >
        {/* Enhanced Background Elements */}
        <div ref={bgRef} className="absolute inset-0">
          {/* Gradient Orbs with reduced opacity for solid background */}
          <m.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none"
            animate={animated ? { scale: [1, 1.08, 1] } : {}}
            transition={
              animated
                ? {
                    scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }
                : {}
            }
            aria-hidden="true"
          />
          <m.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none"
            animate={animated ? { scale: [1.08, 1, 1.08] } : {}}
            transition={
              animated
                ? {
                    scale: {
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
            aria-hidden="true"
          />

          {/* Center-only grid (light mode) */}
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.5)_1px,transparent_1px)] [background-size:100px_100px] [background-position:center] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,white_60%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] dark:hidden pointer-events-none"
            aria-hidden="true"
          />

          {/* Center-only grid (dark mode) */}
          <div
            className="hidden dark:block absolute inset-0 dark:bg-[linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] dark:[background-size:100px_100px] [background-position:center] [mask-image:radial-gradient(ellipse_55%_55%_at_50%_50%,white_60%,transparent_100%)] [mask-repeat:no-repeat] [mask-size:100%_100%] pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle blue blurs in all four corners */}
          <div
            className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating text symbols */}
          {floatingSymbols.map((symbol, index) => (
            <m.span
              key={`sym-${index}`}
              className="absolute z-20 select-none pointer-events-none text-4xl font-semibold text-slate-400/20 dark:text-slate-200/15"
              style={{ left: symbol.x, top: symbol.y }}
              aria-hidden="true"
            >
              {symbol.text}
            </m.span>
          ))}
        </div>

        <div className="container mx-auto px-4 py-10 md:py-20 relative z-10 md:mb-6">
          <div className="text-center max-w-5xl mx-auto">
            <FollowerPointerCard
              title={<HeroPointerTitle />}
              className="inline-block"
            >
              {/* Profile Image with Enhanced Effects */}
              <m.div
                initial={
                  animated ? { scale: 0, opacity: 0, rotate: -180 } : false
                }
                animate={animated ? { scale: 1, opacity: 1, rotate: 0 } : {}}
                transition={
                  animated
                    ? { duration: 0.8, type: "spring", stiffness: 100 }
                    : {}
                }
                className="relative inline-block md:mb-12"
              >
                <m.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/45 via-indigo-500/40 to-violet-500/35 rounded-full blur-[6px] opacity-40"
                  aria-hidden="true"
                />
                <m.div
                  whileHover={animated ? { scale: 1.03 } : {}}
                  transition={animated ? { duration: 0.3 } : {}}
                  className="relative"
                >
                  <Image
                    src="/Hero.jpeg"
                    alt="Shrikant Gaikwad profile photo"
                    width={144}
                    height={144}
                    sizes="144px"
                    quality={72}
                    className="relative w-36 h-36 rounded-full object-cover border-[3px] border-white dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm"
                    priority
                  />
                </m.div>

                {/* Status Indicator */}
                <m.div
                  className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full flex items-center justify-center"
                  aria-label="Available for opportunities"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </m.div>
              </m.div>

              {/* Enhanced Name and Title */}
              <m.div
                initial={animated ? { y: 50, opacity: 0 } : false}
                animate={animated ? { y: 0, opacity: 1 } : {}}
                transition={animated ? { duration: 0.8, delay: 0.3 } : {}}
                className="mb-2"
              >
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-2 leading-tight">
                  <m.span
                    className="inline-block text-primary"
                    whileHover={animated ? { scale: 1.02 } : {}}
                    transition={animated ? { duration: 0.2 } : {}}
                  >
                    Shrikant Gaikwad
                  </m.span>
                  <br />
                </h1>
              </m.div>

              <m.div
                initial={animated ? { y: 30, opacity: 0 } : false}
                animate={animated ? { y: 0, opacity: 1 } : {}}
                transition={animated ? { duration: 0.6, delay: 0.4 } : {}}
                className="mb-2 md:mb-2"
              >
                <p className="text-base md:text-lg font-medium text-slate-600 dark:text-slate-300 mb-2 max-w-3xl mx-auto leading-relaxed">
                  Full Stack & Mobile Engineer specializing in scalable React,
                  Next.js, and React Native applications.
                </p>
                <p className="text-sm md:text-base font-medium text-blue-700 dark:text-blue-300 mb-3">
                  Open to Full-Time (Pune), Remote & Freelance Opportunities
                </p>
              </m.div>
            </FollowerPointerCard>

            {/* Enhanced CTA Buttons with Prominent Download Button */}
            <m.div
              initial={animated ? { y: 30, opacity: 0 } : false}
              animate={animated ? { y: 0, opacity: 1 } : {}}
              transition={animated ? { duration: 0.6, delay: 0.6 } : {}}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            >
              <m.div
                whileHover={animated ? { scale: 1.05 } : {}}
                whileTap={animated ? { scale: 0.95 } : {}}
                className="relative"
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 shadow-xl hover:shadow-2xl px-8 py-3 text-lg font-bold transition-all duration-300"
                  asChild
                >
                  <a
                    href="/Shrikant_Gaikwad_Resume.pdf"
                    download
                    aria-label="Download Shrikant Gaikwad's resume"
                  >
                    <IconDownload className="w-5 h-5 mr-2" aria-hidden="true" />
                    Download Resume
                  </a>
                </Button>
              </m.div>

              <m.div
                whileHover={animated ? { scale: 1.05 } : {}}
                whileTap={animated ? { scale: 0.95 } : {}}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 px-8 py-3 text-lg font-semibold"
                  asChild
                >
                  <a
                    href="#projects"
                    aria-label="View Shrikant Gaikwad's projects"
                  >
                    View My Work
                    <IconExternalLink
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </a>
                </Button>
              </m.div>
            </m.div>

            {/* Enhanced Social Links */}
            <m.div
              initial={animated ? { y: 30, opacity: 0 } : false}
              animate={animated ? { y: 0, opacity: 1 } : {}}
              transition={animated ? { duration: 0.6, delay: 0.7 } : {}}
              className="flex justify-center space-x-6 -mt-2"
            >
              {socialLinks.map((social, index) => (
                <m.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group relative p-0 bg-transparent border-0 shadow-none hover:scale-110 transition-transform"
                  whileHover={animated ? { scale: 1.08, y: -2 } : {}}
                  whileTap={animated ? { scale: 0.9 } : {}}
                  initial={animated ? { y: 20, opacity: 0 } : false}
                  animate={animated ? { y: 0, opacity: 1 } : {}}
                  transition={
                    animated ? { duration: 0.5, delay: 0.8 + index * 0.1 } : {}
                  }
                  aria-label={`Visit ${social.label} profile`}
                >
                  {social.imageSrc ? (
                    <Image
                      src={social.imageSrc}
                      alt={social.label}
                      width={32}
                      height={32}
                      sizes="32px"
                      loading="lazy"
                      quality={70}
                      decoding="async"
                      className="w-8 h-8 object-contain rounded-full shadow-md group-hover:scale-110 transition-transform"
                    />
                  ) : social.icon ? (
                    <social.icon className="w-8 h-8 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  ) : null}
                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    {social.label}
                  </div>
                </m.a>
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
