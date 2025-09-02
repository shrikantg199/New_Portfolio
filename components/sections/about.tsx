"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Zap, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable and scalable solutions by following modern coding standards and best practices.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Building fast, optimized applications that deliver smooth user experiences and handle scale effectively.",
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Thriving in team environments by sharing ideas clearly and working closely to deliver impactful products.",
    gradient: "from-green-500 to-emerald-600",
  },
];

export const About = () => {
  return (
    <section id="about" className="relative py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="About Me"
          subtitle="Passionate developer focused on creating seamless and scalable digital experiences"
        />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Card className="border-0 dark:border shadow-lg ">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  I’m a{" "}
                  <span className="font-bold text-blue-600">
                    Full Stack Web Developer
                  </span>{" "}
                  with{" "}
                  <span className="font-bold text-indigo-600">1.2+ years</span>{" "}
                  of experience building modern web applications. I specialize
                  in the{" "}
                  <span className="font-bold text-purple-600">
                    React & Node.js ecosystem
                  </span>{" "}
                  and enjoy turning complex ideas into intuitive, high-quality
                  products. <br /> <br />
                  My focus is on writing clean, maintainable code while
                  delivering{" "}
                  <span className="font-bold text-emerald-600">
                    performance-driven
                  </span>{" "}
                  solutions that scale and provide real value to users.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 dark:border shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center bg-gradient-to-br ${highlight.gradient} shadow-lg`}
                    >
                      <highlight.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-slate-100">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
