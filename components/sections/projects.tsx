"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Modern portfolio built with Next.js, React, and Tailwind CSS showcasing projects and skills.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://shrikant-portfolio-10.vercel.app/",
    githubUrl: "https://github.com/shrikantg199/Portfolio_",
    image: "/projects/web-projects/portfolio.png",
    year: "2024",
    category: "Web",
  },
  {
    id: 2,
    title: "BuzzBasket",
    description:
      "BuzzBasket: Full-stack eCommerce with authentication, products, cart, orders.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Vercel",
      "Render",
      "cloudnary",
    ],
    liveUrl: "https://ecommerce-shop-5ngu.vercel.app/",
    githubUrl: "https://github.com/shrikantg199/ecommerce_shop",
    image: "/projects/web-projects/buzzbasket.png",
    year: "2024",
    category: "Web",
  },
  {
    id: 3,
    title: "Learning Management System (LMS)",
    description:
      "Built a responsive LMS using Next.js, Firebase, ShadCN UI, deployed.",
    technologies: [
      "React.js",
      "Next.js",
      "Firebase",
      "vercel",
      "GitHub",
      "Gemini-AI",
    ],
    liveUrl: "https://www.cyborgrobotics.in/",
    githubUrl:
      "https://github.com/Cyborg-Robotics-Academy-Pvt-Ltd/cyborg-robotics",
    image: "/projects/web-projects/CyborgRobotics.png",
    year: "2024",
    category: "Web",
  },
  {
    id: 4,
    title: "Social Flow",
    description:
      "Built SocialFlow: full-stack Instagram-like app with auth, uploads, posts, likes, comments, follows.",
    technologies: ["React.js", "Next.js", "MongoDB", "vercel", "GitHub"],
    liveUrl: "https://social-flow-pied.vercel.app/",
    githubUrl: "https://github.com/shrikantg199/social-flow",
    image: "/projects/web-projects/SocialFlow.png",
    year: "2024",
    category: "Web",
  },
  {
    id: 5,
    title: "X App UI",
    description: "built X app UI using react native + expo",
    technologies: ["React Native (EXPO)", "Tailwind Css"],
    liveUrl: "",
    githubUrl: "https://github.com/shrikantg199/X-APP-clone-UI.git",
    image: "/projects/app-projects/X-app.png",
    year: "2024",
    category: "App",
  },
  {
    id: 6,
    title: "LinkedIn Clone App",
    description:
      "Created a LinkedIn clone using React Native (Expo) and Firebase with authentication and real-time database.",
    technologies: ["React Native (Expo)", "Firebase", "Tailwind Css"],
    liveUrl: "",
    githubUrl: "https://github.com/shrikantg199/Linkedin_clone",
    image: "/projects/app-projects/Linkedin.png",
    year: "2024",
    category: "App",
  },
  {
    id: 7,
    title: "Coffee Shop App",
    description: "Built Coffee Shop app UI with authentication using Clerk.",
    technologies: ["React Native (Expo)", "Clerk", "Tailwind Css"],
    liveUrl: "",
    githubUrl: "https://github.com/shrikantg199/Coffee_shop",
    image: "/projects/app-projects/Coffee.png",
    year: "2024",
    category: "App",
  },
  {
    id: 8,
    title: "Business Directory App",
    description:
      "React Native app with Firebase integration for business management and reviews.",
    technologies: ["React Native", "Firebase"],
    liveUrl: "",
    githubUrl: "https://github.com/shrikantg199/Business_directory_App.git",
    image: "/projects/app-projects/business_directory.png",
    year: "2024",
    category: "App",
  },
];

const categories = ["All", "Web", "App"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;
  const canShowLess = visibleCount > 3;

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    setVisibleCount(3);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(3);
  };

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="A collection of projects showcasing modern web technologies and innovative solutions"
        />

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 p-1 bg-background/90 backdrop-blur-lg rounded-2xl border border-border/50 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                aria-label={`Filter projects by ${category} category`}
                aria-pressed={selectedCategory === category}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full flex flex-col overflow-hidden border-0 dark:border shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={index === 0}
                  />
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-bold">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Push buttons to bottom */}
                  <div className="flex gap-2 mt-auto">
                    {/* Live Demo (only Web) */}
                    {project.category === "Web" && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                        disabled={!project.liveUrl}
                      >
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View live demo of ${project.title}`}
                          >
                            <ExternalLink
                              className="w-4 h-4 mr-2"
                              aria-hidden="true"
                            />
                            Live Demo
                          </a>
                        ) : (
                          <span className="flex items-center justify-center w-full">
                            <ExternalLink
                              className="w-4 h-4 mr-2"
                              aria-hidden="true"
                            />
                            No Live Demo
                          </span>
                        )}
                      </Button>
                    )}

                    {/* GitHub Button */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                      disabled={!project.githubUrl}
                    >
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View source code of ${project.title} on GitHub`}
                        >
                          <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                          Code
                        </a>
                      ) : (
                        <span className="flex items-center justify-center w-full">
                          <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                          No Code
                        </span>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less */}
        {(hasMoreProjects || canShowLess) && (
          <div className="mt-8 text-center flex gap-4 justify-center">
            {hasMoreProjects && (
              <Button
                onClick={handleShowMore}
                className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg shadow-md bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Show More Projects
              </Button>
            )}
            {canShowLess && (
              <Button
                onClick={handleShowLess}
                variant="outline"
                className="px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg shadow-md"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
