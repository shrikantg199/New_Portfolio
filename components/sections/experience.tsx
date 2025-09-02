"use client";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Cyborg Robotics",
    location: "India",
    type: "Onsite",
    duration: "Jun 2024 – Present",
    description: [
      "Built an LMS with Next.js + Firebase, improving course delivery speed and reliability",
      "Developed real-time auth and course management, enabling secure, scalable student access",
    ],
    technologies: ["Next.js", "Firebase", "Vercel"],
    current: true,
  },
  {
    title: "Web Development Intern",
    company: "RDA Academy Patamda",
    location: "India",
    type: "Remote",
    duration: "Oct 2023 – Jan 2024",
    description: [
      "Completed intensive full-stack development training with production best practices",
      "Designed and built projects using React.js and Node.js with clean UI and REST APIs",
    ],
    technologies: ["React.js", "Node.js", "JavaScript"],
    current: false,
  },
];

export function Experience() {
  // Convert experiences to Timeline format
  const timelineData = experiences.map((exp) => ({
    title: exp.title,
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={exp.current ? "default" : "secondary"}>
            {exp.current ? "Current" : "Past"}
          </Badge>
          <Badge variant="outline">{exp.type}</Badge>
        </div>
        <div className="text-lg font-semibold text-primary mb-2">
          {exp.company}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {exp.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {exp.duration}
          </div>
        </div>
        <ul className="space-y-2 mb-4">
          {exp.description.map((item, i) => (
            <li
              key={i}
              className="text-muted-foreground flex items-start text-sm leading-relaxed"
            >
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-muted/20">
          {exp.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-16  ">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Experience"
          subtitle="Professional journey and growth in web development"
        />

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
