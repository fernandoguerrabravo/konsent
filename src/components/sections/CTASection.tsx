import Button from "@/components/ui/Button";
import Kicker from "@/components/ui/Kicker";
import { DEMO_URL } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#141833] border-t border-[#169d75]/40">
      <div className="bg-grid absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="max-w-4xl">
          <Kicker index="05">Ventana de cumplimiento</Kicker>
          <h2 className="text-4xl md:text-6xl font-semibold text-white leading-[1.02] mb-6">
            Prepárate antes de{" "}
            <span className="text-[#169d75]">diciembre de 2026.</span>
          </h2>
          <p className="text-[#9aa1af] text-lg max-w-2xl leading-relaxed mb-10">
            <strong className="font-semibold text-white">
              El plazo es justo, no holgado.
            </strong>{" "}
            Las empresas que{" "}
            <strong className="font-semibold text-white">empiecen ahora</strong>{" "}
            llegarán preparadas; las que esperen, improvisarán bajo presión.
          </p>

          <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Solicitar una demostración</Button>
          </a>

          <div className="mt-12 pt-8 border-t border-[#5f636f]/30 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5f636f] mb-1">
                Correo
              </p>
              <p className="text-white font-mono text-sm">gabriela@konsent.cl</p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5f636f] mb-1">
                Teléfono
              </p>
              <p className="text-white font-mono text-sm">+56 9 7779 4532</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
