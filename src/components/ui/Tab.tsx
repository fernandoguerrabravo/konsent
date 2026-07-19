import { TabProps } from "@/types";

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-none text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-[#56D1B2]/10 text-[#56D1B2] border border-[#56D1B2]/30"
          : "text-white/50 hover:text-white/80 border border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
