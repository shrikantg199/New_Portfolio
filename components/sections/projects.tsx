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
    problem: "Needed one professional place to showcase work and skills.",
    role: "Built and deployed the portfolio solo from scratch.",
    result: "Launched a fast site that improved recruiter visibility.",
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
    problem: "Needed a complete eCommerce flow from login to checkout.",
    role: "Developed the full-stack app and deployed it end-to-end.",
    result: "Shipped a production-ready store with cart and orders.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Vercel",
      "Render",
      "Cloudinary",
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
    problem: "Needed secure course delivery and learner progress tracking.",
    role: "Led full-stack development and core architecture decisions.",
    result: "Delivered a scalable LMS with better reliability.",
    technologies: [
      "React.js",
      "Next.js",
      "Firebase",
      "Vercel",
      "GitHub",
      "Gemini-AI",
    ],
    liveUrl: "https://www.cyborgrobotics.in/",
    githubUrl:
      "https://github.com/Cyborg-Robotics-Academy-Pvt-Ltd/cyborg-robotics",
    image: "/projects/web-projects/CyborgRobotics.jpg",
    year: "2024",
    category: "Web",
  },
  {
    id: 4,
    title: "Social Flow",
    problem: "Needed to validate key social engagement workflows quickly.",
    role: "Built the full-stack prototype with auth and feed features.",
    result: "Released a working social app for UX validation.",
    technologies: ["React.js", "Next.js", "MongoDB", "Vercel", "GitHub"],
    liveUrl: "https://social-flow-pied.vercel.app/",
    githubUrl: "https://github.com/shrikantg199/social-flow",
    image: "/projects/web-projects/SocialFlow.png",
    year: "2024",
    category: "Web",
  },
  {
    id: 5,
    title: "X App UI",
    problem: "Needed hands-on practice with scalable React Native UI patterns.",
    role: "Implemented the full X-style interface in Expo.",
    result: "Delivered a polished UI ready for backend integration.",
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
    problem: "Needed a networking clone with auth and real-time data.",
    role: "Built core mobile flows using Expo and Firebase.",
    result: "Shipped a LinkedIn-style prototype with feed interactions.",
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
    problem: "Needed a smooth mobile coffee browsing experience.",
    role: "Built the UI and integrated Clerk auth in Expo.",
    result: "Delivered a clean app flow with secure sign-in.",
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
    problem: "Needed one app for business discovery and reviews.",
    role: "Built the React Native app with Firebase integration.",
    result: "Launched a usable directory prototype for local discovery.",
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
          subtitle="Outcome-driven case studies with problem context, ownership, stack and measurable results"
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={72}
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
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground space-y-2">
                    <p>
                      <span className="font-semibold text-foreground">
                        Problem:{" "}
                      </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Role:{" "}
                      </span>
                      {project.role}
                    </p>
                    <p>
                      <span className="font-semibold text-foreground">
                        Result:{" "}
                      </span>
                      {project.result}
                    </p>
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 flex flex-col flex-1">
                  {/* Technologies */}
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    Tech Stack
                  </p>
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
                          aria-label={`View live project for ${project.title}`}
                        >
                          <ExternalLink
                            className="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          Live Link
                        </a>
                      ) : (
                        <span className="flex items-center justify-center w-full">
                          <ExternalLink
                            className="w-4 h-4 mr-2"
                            aria-hidden="true"
                          />
                          No Live Link
                        </span>
                      )}
                    </Button>

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

export default Projects;
