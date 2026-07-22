import { ButtonProps } from "@/types";

const variantStyles = {
  primary:
    "bg-[#169d75] hover:bg-[#128268] text-white font-semibold shadow-sm shadow-[#169d75]/20",
  secondary:
    "bg-[#F2F4F6] border border-[#E7E9EE] text-[#262c64] hover:bg-[#E9ECEF]",
  outline: "border border-[#169d75]/50 text-[#169d75] hover:bg-[#169d75]/10",
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
      className={`min-w-[44px] min-h-[44px] rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#169d75]/50 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
