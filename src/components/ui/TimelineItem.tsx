import type { ReactNode } from "react";
import Badge from "./Badge";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  children: ReactNode;
  tags?: string[];
  logo?: string;
}

export default function TimelineItem({
  title,
  subtitle,
  date,
  children,
  tags,
  logo,
}: TimelineItemProps) {
  return (
    <div className="group relative pl-8 pb-10 last:pb-0">
      {/* timeline line */}
      <div className="absolute top-2 left-0 h-full w-px bg-white/10 group-last:hidden" />
      {/* timeline dot */}
      <div className="absolute top-2 -left-[4.5px] h-[9px] w-[9px] rounded-full border-2 border-cyan-400 bg-gray-950" />

      <p className="mb-1 text-sm text-gray-400">{date}</p>
      <div className="mb-3 flex items-center gap-3">
        {logo && (
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-7 w-7 shrink-0 rounded object-contain"
          />
        )}
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-cyan-400">{subtitle}</p>
        </div>
      </div>
      <div className="space-y-2 text-sm leading-relaxed text-gray-300">
        {children}
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} text={tag} />
          ))}
        </div>
      )}
    </div>
  );
}
