import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/5 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-500/20 hover:bg-white/[0.06] ${className}`}>
      {children}
    </div>
  );
}
