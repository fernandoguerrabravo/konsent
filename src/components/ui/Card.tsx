import { CardProps } from "@/types";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[#6366f1]/30 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
