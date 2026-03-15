import type { ReactNode } from "react";
import AnimatedSection from "../ui/AnimatedSection";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <h2 className="mb-12 text-3xl font-bold text-white">
            {title}
            <span className="text-cyan-400">.</span>
          </h2>
        </AnimatedSection>
        {children}
      </div>
    </section>
  );
}
