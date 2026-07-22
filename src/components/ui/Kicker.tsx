interface KickerProps {
  index?: string;
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export default function Kicker({
  index,
  children,
  align = "left",
  className = "",
}: KickerProps) {
  return (
    <div
      className={`flex items-center gap-3 mb-6 ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      {index && (
        <span className="font-mono text-xs text-[#169d75] tabular-nums">
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-[#169d75]" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5f636f]">
        {children}
      </span>
    </div>
  );
}
