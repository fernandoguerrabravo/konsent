import { ButtonProps } from "@/types";

const variantStyles = {
  primary:
    "bg-[#169d75] hover:bg-[#33B892] text-[#07231E] font-semibold shadow-lg shadow-[#169d75]/25",
  secondary:
    "bg-white/5 border border-white/10 text-white hover:bg-white/10",
  outline:
    "border border-[#169d75]/40 text-[#169d75] hover:border-[#169d75] hover:bg-[#169d75]/10",
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
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[44px] min-h-[44px] rounded-none font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#169d75]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0f] disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
