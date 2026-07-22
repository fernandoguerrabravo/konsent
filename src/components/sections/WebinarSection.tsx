import Image from "next/image";
import Button from "@/components/ui/Button";

const WEBINAR_URL = "https://app.konsent.cl/webinar";

export default function WebinarSection() {
  return (
    <section
      id="webinar"
      className="pt-28 pb-16 md:pt-32 md:pb-20 bg-[#F0FAF6] border-b border-[#E7E9EE]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Banner */}
          <a
            href={WEBINAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Registrarse al webinar de Konsent"
            className="block w-full max-w-sm shrink-0 rounded-2xl overflow-hidden border border-[#E7E9EE] shadow-[0_24px_60px_-24px_rgba(38,44,100,0.25)] transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#169d75]"
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
            <span className="inline-flex items-center gap-2 bg-white border border-[#169d75]/30 text-[#169d75] px-4 py-1.5 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#169d75] rounded-full inline-block animate-pulse" />
              Webinar en vivo
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#262c64] mt-5 mb-4 leading-[1.1]">
              Prepárate para la Ley 21.719 en nuestro próximo webinar
            </h2>

            <p className="text-[#5f636f] text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Únete a nuestros expertos y descubre, paso a paso, cómo{" "}
              <strong className="font-semibold text-[#262c64]">
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
