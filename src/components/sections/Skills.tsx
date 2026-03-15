import { skillCategories } from "../../data/skills";
import Section from "../layout/Section";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <AnimatedSection key={cat.id} delay={i * 0.1}>
            <div>
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-400 uppercase">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} text={skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
}
