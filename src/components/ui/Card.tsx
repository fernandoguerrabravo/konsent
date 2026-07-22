import { CardProps } from "@/types";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`p-6 rounded-none border border-[#5f636f]/25 bg-white/[0.02] backdrop-blur-sm hover:border-[#169d75]/30 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
