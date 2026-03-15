interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 ring-1 ring-cyan-500/20">
      {text}
    </span>
  );
}
