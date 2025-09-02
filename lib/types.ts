export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  year: string;
  category: 'Web' | 'App' | 'Mobile';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialLink {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  imageSrc?: string;
  label: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
