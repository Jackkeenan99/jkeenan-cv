export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  grade: string;
  startDate: string;
  endDate: string;
  description?: string;
  logo?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  institution: string;
  year: string;
  description?: string;
  logo?: string;
}
