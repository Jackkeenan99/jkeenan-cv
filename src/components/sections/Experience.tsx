import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { experiences } from "../../data/experience";
import Section from "../layout/Section";
import Badge from "../ui/Badge";

const CARD_WIDTH = 340;
const GAP = 24;

export default function Experience() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const total = experiences.length;
  const centerOffset = (containerWidth - CARD_WIDTH) / 2;

  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(index, total - 1));
    setCurrent(clamped);
    animate(x, centerOffset - clamped * (CARD_WIDTH + GAP), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }

  // center the first card once container width is known
  useEffect(() => {
    if (containerWidth > 0) {
      x.set(centerOffset - current * (CARD_WIDTH + GAP));
    }
  }, [containerWidth]);

  function handleDragEnd(
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } },
  ) {
    const threshold = CARD_WIDTH / 4;
    if (info.offset.x < -threshold || info.velocity.x < -200) {
      goTo(current + 1);
    } else if (info.offset.x > threshold || info.velocity.x > 200) {
      goTo(current - 1);
    } else {
      goTo(current);
    }
  }

  // keyboard navigation
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goTo(current + 1);
      if (e.key === "ArrowLeft") goTo(current - 1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <Section id="experience" title="Experience">
      <div className="relative overflow-hidden" ref={containerRef}>
        <motion.div
          className="flex cursor-grab active:cursor-grabbing"
          style={{ x, gap: GAP }}
          drag="x"
          dragConstraints={{
            left: centerOffset - (total - 1) * (CARD_WIDTH + GAP),
            right: centerOffset,
          }}
          dragElastic={0.1}
          onDragEnd={handleDragEnd}>
          {experiences.map((exp, i) => {
            const cardCenter = centerOffset - i * (CARD_WIDTH + GAP);
            const progress = useTransform(
              x,
              [
                cardCenter - (CARD_WIDTH + GAP),
                cardCenter,
                cardCenter + (CARD_WIDTH + GAP),
              ],
              [0.85, 1, 0.85],
            );
            const cardOpacity = useTransform(
              x,
              [
                cardCenter - (CARD_WIDTH + GAP),
                cardCenter,
                cardCenter + (CARD_WIDTH + GAP),
              ],
              [0.5, 1, 0.5],
            );

            return (
              <motion.div
                key={exp.id}
                className="shrink-0 select-none"
                style={{
                  width: CARD_WIDTH,
                  scale: progress,
                  opacity: cardOpacity,
                }}
                onClick={() => goTo(i)}>
                <div className="h-full rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/20 hover:bg-white/[0.06]">
                  {/* Header: logo + company */}
                  <div className="mb-4 flex items-center gap-3">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-10 w-10 shrink-0 rounded-lg object-contain"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.company}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {exp.startDate} — {exp.endDate}
                      </p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm font-medium text-cyan-400">
                    {exp.role}
                  </p>

                  {/* Description */}
                  <ul className="mb-4 space-y-2 text-sm leading-relaxed text-gray-300">
                    {exp.description.map((point, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/60" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tag) => (
                        <Badge key={tag} text={tag} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? "w-6 bg-cyan-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
