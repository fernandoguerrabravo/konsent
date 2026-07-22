import { TabProps } from "@/types";

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-none text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-[#169d75]/10 text-[#169d75] border border-[#169d75]/30"
          : "text-[#9aa1af] hover:text-white/80 border border-transparent"
      }`}
    >
      {label}
    </button>
  );
}
