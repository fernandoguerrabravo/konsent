import Image from "next/image";
import Button from "@/components/ui/Button";

const WEBINAR_URL = "https://app.konsent.cl/webinar";

export default function WebinarSection() {
  return (
    <section
      id="webinar"
      className="py-16 md:py-20 bg-gradient-to-br from-[#262c64]/90 via-[#0f6b55]/70 to-[#0a3f30]/90 relative overflow-hidden"
    >
      {/* Glow de marca */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(22,157,117,0.25)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Banner */}
          <a
            href={WEBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Registrarse al webinar de Konsent"
            className="block w-full max-w-sm shrink-0 border border-white/10 shadow-2xl transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#169d75]"
          >
            <Image
              src="/banner.jpeg"
              alt="Webinar Konsent — Cumplimiento de la Ley 21.719"
              width={1600}
              height={1600}
              className="w-full h-auto block"
              priority
            />
          </a>

          {/* Contenido */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-[#169d75]/15 border border-[#169d75]/40 text-[#33B892] px-4 py-1.5 text-sm font-medium">
              <span className="w-2 h-2 bg-[#33B892] inline-block animate-pulse" />
              Webinar en vivo
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-5 mb-4">
              Prepárate para la Ley 21.719 en nuestro próximo webinar
            </h2>

            <p className="text-white/70 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Únete a nuestros expertos y descubre, paso a paso, cómo{" "}
              <strong className="font-semibold text-white">
                cumplir la normativa sin fricción
              </strong>{" "}
              y proteger a tu empresa antes de diciembre de 2026. Cupos
              limitados.
            </p>

            <a href={WEBINAR_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Regístrate gratis
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
