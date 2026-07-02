import { ButtonProps } from "@/types";

const variantStyles = {
  primary:
    "bg-[#6366f1] hover:bg-[#5558e6] text-white shadow-lg shadow-indigo-500/20",
  secondary:
    "bg-white/5 border border-white/10 text-white hover:bg-white/10",
  outline:
    "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
};

const sizeStyles = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  onClick,
  children,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`min-w-[44px] min-h-[44px] rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
