"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Blocks,
  Route,
  ShieldCheck,
  Rocket,
  GitBranch,
  Gauge,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillCategory } from "@/lib/types";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";

const skillIconMap: Record<string, string> = {
  reactjs: "/skills/React.png",
  nextjs: "/skills/Nextjs.png",
  typescript: "/skills/Typescript.png",
  nodejs: "/skills/nodejs.png",
  expressjs: "/skills/Express.png",
  restapis: "/skills/RestApi.png",
  mongodb: "/skills/Mongodb.png",
  postman: "/skills/Postman.png",
  firebaseauth: "/skills/firebase.png",
  clerk: "/skills/firebase.png",
  protectedroutes: "/skills/firebase.png",
  rolebasedaccess: "/skills/firebase.png",
  redux: "/skills/redux.png",
  reactstate: "/skills/React.png",
  contextapi: "/skills/React.png",
  dataflowdesign: "/skills/redux.png",
  corewebvitals: "/skills/Nextjs.png",
  nextjsoptimization: "/skills/Nextjs.png",
  imageoptimization: "/skills/Nextjs.png",
  lazyloading: "/skills/Nextjs.png",
  vercel: "/skills/vercel.png",
  render: "/skills/vercel.png",
  environmentconfig: "/skills/vercel.png",
  productiondebugging: "/skills/vercel.png",
  componentpatterns: "/skills/React.png",
};

const normalizeSkill = (value: string) =>
  value.toLowerCase().replace(/\./g, "").replace(/\s+/g, "");

const skillCategories: SkillCategory[] = [
  {
    title: "Architecture Knowledge",
    highlights: [
      "Feature-based architecture with reusable modules.",
      "Clear UI and business logic boundaries.",
    ],
    projectRef: "Applied in Portfolio and LMS.",
    skills: ["Next.js", "React.js", "TypeScript", "Component Patterns"],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    icon: Blocks,
  },
  {
    title: "API Design",
    highlights: [
      "REST contracts with predictable response models.",
      "Request validation and error handling.",
    ],
    projectRef: "Implemented in BuzzBasket and Social Flow.",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Postman"],
    color: "from-green-500 via-emerald-500 to-teal-500",
    icon: Route,
  },
  {
    title: "Authentication Systems",
    highlights: [
      "Secure sign-in and session management.",
      "Protected routes with role-based access.",
    ],
    projectRef: "Delivered in LMS and Expo apps.",
    skills: ["Firebase Auth", "Clerk", "Protected Routes", "Role-Based Access"],
    color: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: ShieldCheck,
  },
  {
    title: "State Management",
    highlights: [
      "Predictable local and global state updates.",
      "Auth, feed, and form state synchronization.",
    ],
    projectRef: "Used in Social Flow workflows.",
    skills: ["Redux", "React State", "Context API", "Data Flow Design"],
    color: "from-amber-500 via-orange-500 to-rose-500",
    icon: GitBranch,
  },
  {
    title: "Performance Optimization",
    highlights: [
      "Rendering and asset strategy optimization.",
      "Image and query tuning for faster loads.",
    ],
    projectRef: "Improved LMS response speed by 35%.",
    skills: [
      "Core Web Vitals",
      "Next.js Optimization",
      "Image Optimization",
      "Lazy Loading",
    ],
    color: "from-lime-500 via-emerald-500 to-cyan-500",
    icon: Gauge,
  },
  {
    title: "Deployment Experience",
    highlights: [
      "Production deploys on Vercel and Render.",
      "Environment setup and build stabilization.",
    ],
    projectRef: "Shipped portfolio and full-stack projects live.",
    skills: ["Vercel", "Render", "Environment Config", "Production Debugging"],
    color: "from-purple-500 via-pink-500 to-rose-500",
    icon: Rocket,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Competency Map"
          subtitle="Capabilities I apply in production work, with tools as supporting implementation details"
        />

        <GlowingCards gap="1.5rem" responsive={true}>
          {skillCategories.map((category) => (
            <GlowingCard
              key={category.title}
              className="h-full"
              glowColor={(() => {
                // Extract the primary color from the gradient
                const colors = category.color.split(" ");
                if (colors.length >= 2) {
                  // Return the first color in the gradient (e.g., from-blue-500 -> #3b82f6)
                  const firstColor = colors[0].replace("from-", "");
                  const colorMap: Record<string, string> = {
                    "blue-500": "#3b82f6",
                    "cyan-500": "#06b6d4",
                    "teal-500": "#14b8a6",
                    "green-500": "#22c55e",
                    "emerald-500": "#10b981",
                    "purple-500": "#a855f7",
                    "pink-500": "#ec4899",
                    "rose-500": "#f43f5e",
                  };
                  return colorMap[firstColor] || "#3b82f6";
                }
                return "#3b82f6";
              })()}
            >
              <div className="p-1">
                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} shadow-md flex items-center justify-center mb-4 mx-auto`}
                    aria-hidden="true"
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 text-center">
                    {category.title}
                  </h3>
                </div>
                <ul className="mb-3 space-y-1.5">
                  {category.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 dark:bg-slate-400 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-4">
                  <span className="font-semibold">Project:</span>{" "}
                  {category.projectRef}
                </p>

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                  Tools I Use
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-2 py-0.5 text-[11px] font-medium inline-flex items-center gap-1"
                        aria-label={`Skill: ${skill}`}
                      >
                        {skillIconMap[normalizeSkill(skill)] && (
                          <Image
                            src={skillIconMap[normalizeSkill(skill)]}
                            alt=""
                            width={16}
                            height={16}
                            className="rounded-sm bg-white p-[1px] border border-slate-200 dark:border-slate-600"
                            aria-hidden="true"
                          />
                        )}
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlowingCard>
          ))}
        </GlowingCards>
      </div>
    </section>
  );
}

export default Skills;
