import { BadgeProps } from "@/types";

export default function Badge({ icon, label, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-[#F7F8FA] border border-[#E7E9EE] text-[#5f636f] px-3 py-1.5 rounded-full text-sm ${className}`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span>{label}</span>
    </span>
  );
}
