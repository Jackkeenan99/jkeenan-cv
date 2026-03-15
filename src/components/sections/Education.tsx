import { education } from "../../data/education";
import Section from "../layout/Section";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <AnimatedSection key={edu.id} delay={i * 0.1}>
            <Card>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="mb-1 text-sm text-gray-400">
                    {edu.startDate} — {edu.endDate}
                  </p>
                  <h3 className="text-lg font-semibold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-cyan-400">{edu.degree}</p>
                  <p className="mt-1 text-sm font-medium text-cyan-300/70">
                    {edu.grade}
                  </p>
                </div>
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="h-10 w-10 shrink-0 rounded-md object-contain"
                  />
                )}
              </div>
              {edu.description && (
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {edu.description}
                </p>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
