import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Use the light variant (white wordmark) for dark backgrounds. Default: true */
  light?: boolean;
}

// Aspecto del logo oficial: 377.85 / 143.18 ≈ 2.64
const ASPECT = 2.64;

export default function Logo({
  className = "",
  size = "md",
  light = true,
}: LogoProps) {
  const heights = { sm: 34, md: 52, lg: 68 };
  const height = heights[size];
  const width = Math.round(height * ASPECT);

  return (
    <Image
      src={light ? "/logo-light.svg" : "/logo.svg"}
      alt="Konsent"
      width={width}
      height={height}
      priority
      unoptimized
      className={className}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
