import type { Experience } from "../types";
import microsoftLogo from "../assets/logos/microsoft.png";
import workdayLogo from "../assets/logos/workday.png";
import optumLogo from "../assets/logos/optum.png";

export const experiences: Experience[] = [
  {
    id: "microsoft",
    company: "Microsoft",
    logo: microsoftLogo,
    role: "Software Engineer",
    startDate: "2025",
    endDate: "Present",
    description: [
      "Member of the Azure Resource Notifications (ARN) team, building a unified notification platform for Azure resource lifecycle events.",
      "Developed and maintained high-throughput, event-driven services that process millions of resource change notifications daily across Azure.",
      "Contributed to the design of scalable distributed systems powering real-time resource notifications for Azure customers.",
      "Collaborated with cross-functional teams to improve reliability, latency, and observability of the notification pipeline.",
    ],
    technologies: [
      "C#",
      "Azure",
      "Distributed Systems",
      "Event-Driven Architecture",
    ],
  },
  {
    id: "workday",
    company: "Workday",
    logo: workdayLogo,
    role: "Software Engineer — Graduate → Senior Associate",
    startDate: "2022",
    endDate: "2025",
    description: [
      "Worked on the Object Transporter team, responsible for building and maintaining tools that move configuration and tenant data across Workday environments.",
      "Developed features for the migration framework, enabling seamless tenant configuration transfers between production and sandbox environments.",
      "Progressed from Graduate to Senior Associate through consistent delivery and technical growth.",
      "Participated in on-call rotations, debugging production incidents and improving system resilience.",
    ],
    technologies: ["Java", "Scala", "Jenkins", "Git", "REST APIs"],
  },
  {
    id: "optum",
    company: "Optum",
    logo: optumLogo,
    role: "Software Engineering Intern",
    startDate: "2021",
    endDate: "2021",
    description: [
      "Completed a software engineering internship contributing to healthcare technology solutions.",
      "Gained hands-on experience with professional software development workflows and agile processes.",
    ],
    technologies: ["React", "Jenkins", "AWS", "Git"],
  },
];
