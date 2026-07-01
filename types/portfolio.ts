export interface ProjectItem {
  title: string;
  summary: string;
  stack: string[];
  href: string;
  status: "Live" | "In Progress" | "Case Study";
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  skills: string[];
  highlights: string[];
  featuredProjects: ProjectItem[];
  experience: ExperienceItem[];
}
