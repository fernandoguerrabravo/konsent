import { CardProps } from "@/types";

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`group relative p-7 rounded-2xl border border-[#E7E9EE] bg-white transition-all duration-300 hover:border-[#169d75]/40 hover:shadow-[0_16px_40px_-16px_rgba(38,44,100,0.18)] ${className}`}
    >
      {children}
    </div>
  );
}
