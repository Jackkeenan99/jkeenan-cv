import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400/50 disabled:opacity-50";
  const variants = {
    primary:
      "bg-cyan-500 text-gray-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/25",
    outline: "border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
