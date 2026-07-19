import { BadgeProps } from "@/types";

export default function Badge({ icon, label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 rounded-none text-sm ${className}`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </span>
  );
}
