"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Cloud } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { SkillCategory } from "@/lib/types";
import Image from "next/image";

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    color: "from-blue-500 via-cyan-500 to-teal-500",
    icon: Code2,
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"],
    color: "from-green-500 via-emerald-500 to-teal-500",
    icon: Server,
  },
  {
    title: "Tools & Cloud",
    skills: ["Firebase", "Vercel", "Git", "Postman"],
    color: "from-purple-500 via-pink-500 to-rose-500",
    icon: Cloud,
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Skills & Technology"
          subtitle="A comprehensive toolkit for building modern, scalable web applications"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 dark:border rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} shadow-md flex items-center justify-center flex-shrink-0`}
                      aria-hidden="true"
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {(() => {
                          const normalize = (s: string) =>
                            s
                              .toLowerCase()
                              .replace(/\.+/g, "")
                              .replace(/\s+/g, "")
                              .replace(/[^a-z0-9]/g, "");
                          const key = normalize(skill);
                          const skillLogoMap: Record<string, string> = {
                            reactjs: "/skills/React.png",
                            react: "/skills/React.png",
                            nextjs: "/skills/Nextjs.png",
                            typescript: "/skills/Typescript.png", // no logo provided; fallback to text
                            tailwindcss: "/skills/tailwind.png",
                            redux: "/skills/redux.png",
                            nodejs: "/skills/nodejs.png",
                            expressjs: "/skills/Express.png",
                            restfulapis: "/skills/RestApi.png",
                            restapis: "/skills/RestApi.png",
                            mongodb: "/skills/Mongodb.png",
                            firebase: "/skills/firebase.png",
                            vercel: "/skills/vercel.png",
                            git: "/skills/git.png",
                            postman: "/skills/Postman.png",
                          };
                          const src = skillLogoMap[key];
                          if (src) {
                            return (
                              <div
                                className="flex flex-col items-center gap-1 rounded-md px-2 py-1.5"
                                aria-label={`Skill: ${skill}`}
                                title={skill}
                              >
                                <Image
                                  src={src}
                                  alt={skill}
                                  width={40}
                                  height={40}
                                  className="rounded-xl bg-white/95 dark:bg-white p-1"
                                />
                                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                                  {skill}
                                </span>
                              </div>
                            );
                          }
                          return (
                            <Badge
                              className="bg-white/90 dark:bg-slate-700/90 text-slate-700 dark:text-slate-200 px-3 py-1.5 text-sm font-medium hover:text-white shadow-sm"
                              aria-label={`Skill: ${skill}`}
                            >
                              {skill}
                            </Badge>
                          );
                        })()}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
