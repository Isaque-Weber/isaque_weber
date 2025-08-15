export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  avatar: string;
  resumeUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

export interface SectionProps {
  className?: string;
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}