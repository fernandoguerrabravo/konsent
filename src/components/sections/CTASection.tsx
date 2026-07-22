import Button from "@/components/ui/Button";
import { DEMO_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#262c64]/90 via-[#0f6b55]/80 to-[#0a3f30]/90 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(22,157,117,0.2)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Prepárate antes de diciembre de 2026
        </h2>
        <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
          <strong className="font-semibold text-white">
            El plazo es justo, no holgado.
          </strong>{" "}
          Las empresas que{" "}
          <strong className="font-semibold text-white">empiecen ahora</strong>{" "}
          llegarán preparadas; las que esperen, improvisarán bajo presión.
        </p>
        <div className="mt-8">
          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Solicitar una demostración</Button>
          </a>
        </div>
        <div className="mt-6 space-y-1">
          <p className="text-[#9aa1af]">gabriela@konsent.cl</p>
          <p className="text-[#9aa1af]">+56 9 7779 4532</p>
        </div>
      </div>
    </section>
  );
}
