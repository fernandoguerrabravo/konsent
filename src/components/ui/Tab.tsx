import { TabProps } from "@/types";

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        isActive
          ? "bg-[#169d75] text-white border border-[#169d75]"
          : "text-[#5f636f] hover:text-[#262c64] border border-[#E7E9EE] hover:border-[#169d75]/40"
      }`}
    >
      {label}
    </button>
  );
}
