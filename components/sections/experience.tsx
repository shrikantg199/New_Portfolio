"use client";
import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "Cyborg Robotics",
    location: "Pune, Maharashtra, India",
    type: "Onsite",
    duration: "Jun 2024 - Present",
    description: [
      "Led end-to-end development of a production LMS used by 150+ learners, reducing content publish time by 40% with reusable course workflows.",
      "Designed the application architecture and implemented secure auth, role-based access and real-time course management, cutting manual admin effort by 30%.",
      "Collaborated with stakeholders to prioritize features and improved Core Web Vitals and page response time by 35% through optimized Next.js rendering and Firebase query tuning.",
    ],
    technologies: ["Next.js", "Firebase", "Vercel"],
    current: true,
  },
  {
    title: "Web Development Intern",
    company: "RDA Academy Patamda",
    location: "India",
    type: "Remote",
    duration: "Oct 2023 - Jan 2024",
    description: [
      "Owned delivery of 4 end-to-end web projects during internship, covering frontend, backend and deployment workflows.",
      "Worked closely with mentors and peers to build React.js + Node.js applications with REST APIs, improving average feature delivery speed by 25%.",
      "Drove performance and accessibility improvements, raising Lighthouse scores from ~70 to 90+ across project builds.",
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

export default Experience;
