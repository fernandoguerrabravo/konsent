import Logo from "@/components/ui/Logo";

const footerLinks = [
  { label: "Solución", href: "#solucion" },
  { label: "Blockchain", href: "#blockchain" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0f]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 text-center md:text-left">
          <div>
            <Logo size="sm" />
            <p className="text-white/50 text-sm mt-2">
              © 2026 Konsent · Cumplimiento Ley N° 21.719 · Chile
            </p>
          </div>

          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
