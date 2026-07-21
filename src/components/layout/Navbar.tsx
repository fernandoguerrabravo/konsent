import { useState } from "react";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { DEMO_URL } from "@/lib/constants";

const navLinks = [
  { label: "Webinar", href: "#webinar" },
  { label: "El desafío", href: "#desafio" },
  { label: "Solución", href: "#solucion" },
  { label: "Blockchain", href: "#blockchain" },
  { label: "Módulos", href: "#modulos" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed top-0 w-full z-50 bg-[rgba(10,10,15,0.8)] backdrop-blur-xl border-b border-white/[0.06]"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" aria-label="Konsent - Inicio">
          <Logo size="md" />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm">Solicitar demo</Button>
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-[rgba(10,10,15,0.95)] backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="w-full">
                Solicitar demo
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
