import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { height: 42 },
    md: { height: 54 },
    lg: { height: 66 },
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
