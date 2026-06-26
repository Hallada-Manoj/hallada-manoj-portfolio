export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  businessImpact: string;
  technologies: string[];
  githubLink?: string;
  problemStatement: string;
  keyResults: string[];
  featured?: boolean;
  image?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Certificate {
  name: string;
  organization: string;
  credentialLink?: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  email: string;
  phone?: string;
  location: string;
  profileImage?: string;
  resumeUrl?: string;
}
