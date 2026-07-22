import { CardProps } from "@/types";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group relative p-7 border border-[#5f636f]/30 bg-[#20255a]/40 transition-colors duration-300 hover:border-[#169d75]/70 ${className}`}
    >
      {/* Acento superior que aparece en hover */}
      <span className="absolute left-0 top-0 h-px w-0 bg-[#169d75] transition-all duration-300 group-hover:w-full" />
      {children}
    </div>
  );
}
