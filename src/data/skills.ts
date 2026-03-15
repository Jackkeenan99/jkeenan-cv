import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: ["Java", "C#", "Scala", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    skills: ["React", "Flutter", ".NET"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    skills: ["Azure", "Jenkins", "Git", "Docker", "Kubernetes"],
  },
];
