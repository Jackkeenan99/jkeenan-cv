import { certifications } from "../../data/certifications";
import Section from "../layout/Section";
import AnimatedSection from "../ui/AnimatedSection";
import Card from "../ui/Card";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <AnimatedSection key={cert.id} delay={i * 0.1}>
            <Card>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="mb-1 text-sm text-gray-400">{cert.year}</p>
                  <h3 className="text-lg font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="text-cyan-400">{cert.institution}</p>
                </div>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={`${cert.institution} logo`}
                    className="h-10 w-10 shrink-0 rounded-md object-contain"
                  />
                )}
              </div>
              {cert.description && (
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {cert.description}
                </p>
              )}
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
