import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { height: 28 },
    md: { height: 36 },
    lg: { height: 44 },
  };

  const { height } = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Konsent"
      width={height * 4}
      height={height}
      className={className}
      style={{ height: `${height}px`, width: "auto" }}
    />
  );
}
