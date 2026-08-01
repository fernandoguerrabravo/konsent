const WEBINAR_METRICS = [
  { value: "+200", label: "Asistentes en vivo" },
  { value: "98%", label: "Satisfacción de participantes" },
];

export default function WebinarSection() {
  return (
    <section
      id="webinar"
      className="pt-28 pb-16 md:pt-32 md:pb-20 bg-[#F0FAF6] border-b border-[#E7E9EE]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Métricas — visible en desktop a la izquierda */}
          <div className="hidden lg:flex flex-col gap-6 w-full max-w-sm shrink-0">
            {WEBINAR_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl bg-white border border-[#E7E9EE] shadow-[0_24px_60px_-24px_rgba(38,44,100,0.25)] p-8 text-center"
              >
                <p className="text-4xl font-semibold text-[#169d75]">
                  {metric.value}
                </p>
                <p className="text-sm text-[#5f636f] mt-2">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Contenido */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white border border-[#169d75]/30 text-[#169d75] px-4 py-1.5 rounded-full text-sm font-medium">
              ✓ Webinar realizado
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#262c64] mt-5 mb-4 leading-[1.1]">
              ¡Gracias a quienes nos acompañaron en nuestro webinar sobre la
              Ley 21.719!
            </h2>

            <p className="text-[#5f636f] text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Más de 200 profesionales se unieron para conocer cómo prepararse
              ante la nueva normativa de protección de datos personales. En
              Konsent estamos comprometidos con acompañar a las PYMEs chilenas en
              cada paso hacia el cumplimiento — con tecnología accesible,
              implementación guiada y soporte experto.
            </p>

            {/* Métricas — visible en mobile debajo del contenido */}
            <div className="grid grid-cols-2 gap-4 lg:hidden">
              {WEBINAR_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl bg-white border border-[#E7E9EE] shadow-[0_24px_60px_-24px_rgba(38,44,100,0.25)] p-6 text-center"
                >
                  <p className="text-4xl font-semibold text-[#169d75]">
                    {metric.value}
                  </p>
                  <p className="text-sm text-[#5f636f] mt-2">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
