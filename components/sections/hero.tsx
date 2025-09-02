"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  ArrowDown,
  Sparkles,
  Code2,
  Move,
} from "lucide-react";
import { SocialLink } from "@/lib/types";
import { useState, useEffect, useRef } from "react";

// Removed floatingElements as requested

// Subtle floating code symbols
const floatingSymbols = [
  { text: "{}", delay: 1, duration: 16, x: "25%", y: "60%" },
  { text: "</>", delay: 3, duration: 18, x: "70%", y: "15%" },
  { text: "[]", delay: 2.2, duration: 17, x: "12%", y: "35%" },
  { text: "()", delay: 4.1, duration: 19, x: "82%", y: "65%" },
  { text: "=>", delay: 1.8, duration: 20, x: "55%", y: "75%" },
  { text: ";</>", delay: 2.8, duration: 21, x: "40%", y: "18%" },
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

// Skills for typing effect
const skills = [
  { text: "React", className: "text-blue-600 dark:text-blue-400" },
  { text: "Next.js", className: "text-purple-600 dark:text-purple-400" },
  { text: "Node.js", className: "text-green-600 dark:text-green-400" },
  { text: "TypeScript", className: "text-blue-600 dark:text-blue-400" },
  { text: "React Native", className: "text-cyan-600 dark:text-cyan-400" },
];

export function Hero() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const [showDragHint, setShowDragHint] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    const typeText = () => {
      const currentSkill = skills[currentSkillIndex];

      if (isDeleting) {
        setCurrentText(currentSkill.text.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        }
      } else {
        setCurrentText(currentSkill.text.substring(0, currentText.length + 1));
        if (currentText === currentSkill.text) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(
      typeText,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentSkillIndex]);

  // Show one-time drag hint on first visit
  useEffect(() => {
    try {
      const key = "dragHintShown";
      const alreadyShown =
        typeof window !== "undefined" && localStorage.getItem(key);
      if (!alreadyShown) {
        setShowDragHint(true);
        localStorage.setItem(key, "1");
        const t = setTimeout(() => setShowDragHint(false), 4500);
        return () => clearTimeout(t);
      }
    } catch (_) {
      // ignore storage errors
    }
  }, []);

  const handleScrollToAbout = (): void => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-900"
    >
      {/* One-time drag hint */}
      <AnimatePresence>
        {showDragHint && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 z-40 top-20"
          >
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/80 text-white text-sm shadow-lg backdrop-blur-md border border-white/10">
              <Move className="w-4 h-4" aria-hidden="true" />
              <span>Tip: Drag the background symbols</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Enhanced Background Elements */}
      <div ref={bgRef} className="absolute inset-0">
        {/* Gradient Orbs with reduced opacity for solid background */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            rotate: 360,
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: -360,
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
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

        {/* Tech icons removed */}

        {/* Floating text symbols (very subtle, draggable) */}
        {floatingSymbols.map((symbol, index) => (
          <motion.span
            key={`sym-${index}`}
            className="absolute z-20 select-none pointer-events-auto cursor-grab active:cursor-grabbing touch-none text-4xl font-semibold text-slate-400/20 dark:text-slate-200/15"
            style={{ left: symbol.x, top: symbol.y }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 6, -6, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: symbol.duration,
              repeat: Infinity,
              delay: symbol.delay,
              ease: "easeInOut",
            }}
            drag
            whileDrag={{ scale: 1.05 }}
            dragElastic={0.2}
            dragMomentum={false}
            aria-hidden="true"
          >
            {symbol.text}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 py-10 md:py-20 relative z-10  md:mb-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Profile Image with Enhanced Effects */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative inline-block  md:mb-12"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            />
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src="/hero.jpg"
                alt="Shrikant Gaikwad profile photo"
                width={144}
                height={144}
                className="relative w-36 h-36 rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-800"
                priority
              />
            </motion.div>

            {/* Status Indicator */}
            <motion.div
              className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-3 border-white dark:border-slate-800 rounded-full flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-label="Available for opportunities"
            >
              <div className="w-2 h-2 bg-white rounded-full" />
            </motion.div>
          </motion.div>

          {/* Enhanced Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-2"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Available for opportunities
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-2 leading-tight">
              <motion.span
                className="inline-block text-primary"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Shrikant Gaikwad
              </motion.span>
              <br />
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-2 md:mb-2"
          >
            <p className="text-2xl md:text-3xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
              Full Stack Web Developer
            </p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Enhanced Description with Typing Effect */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:mb-6 mb-2 max-w-3xl mx-auto"
          >
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Building scalable web & mobile apps with{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </p>

            {/* Skills List with Fade-in Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap justify-center gap-2 mt-4"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700/50 hover:scale-105 transition-transform cursor-default"
                >
                  {skill.text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons with Prominent Download Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect for download button */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg blur-lg opacity-75 animate-pulse" />
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 shadow-xl hover:shadow-2xl px-8 py-3 text-lg font-bold transform hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a
                  href="/Shrikant_Gaikwad_Resume.pdf"
                  download
                  aria-label="Download Shrikant Gaikwad's resume"
                >
                  <Download
                    className="w-5 h-5 mr-2 group-hover:animate-bounce"
                    aria-hidden="true"
                  />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  <ExternalLink
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center space-x-6 -mt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
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
                whileHover={{
                  scale: 1.1,
                  rotate: index % 2 === 0 ? 5 : -5,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                aria-label={`Visit ${social.label} profile`}
              >
                {social.imageSrc ? (
                  <Image
                    src={social.imageSrc}
                    alt={social.label}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain rounded-full shadow-md group-hover:scale-110 transition-transform"
                  />
                ) : social.icon ? (
                  <social.icon className="w-8 h-8 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                ) : null}
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {social.label}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
