import Kicker from "@/components/ui/Kicker";

export default function BlockchainSection() {
  const explanations = [
    {
      number: 1,
      title: "Cada evento genera un hash SHA-256",
      description: (
        <>
          Una{" "}
          <strong className="font-semibold text-[#262c64]">
            huella digital única
          </strong>
          . Si el contenido cambia un carácter, el hash es completamente
          distinto.
        </>
      ),
    },
    {
      number: 2,
      title: "Cada bloque encadena el anterior",
      description: (
        <>
          Modificar un evento pasado{" "}
          <strong className="font-semibold text-[#262c64]">
            invalida todos los bloques siguientes
          </strong>
          . La manipulación es detectable al instante.
        </>
      ),
    },
    {
      number: 3,
      title: "Verificación en tiempo real",
      description: (
        <>
          Cualquier alteración se detecta{" "}
          <strong className="font-semibold text-[#262c64]">
            sin necesidad de un auditor externo
          </strong>
          . Tu mejor defensa ante la APDP.
        </>
      ),
    },
  ];

  const verificationItems = [
    {
      title: "Consentimiento",
      detail: "Titular: 76.543.210-K · Política v1.0",
    },
    {
      title: "Modificación",
      detail: "Preferencias opcionales · 10 jun 2025",
    },
    {
      title: "Solicitud ARCO+",
      detail: "Derecho de acceso · resuelto en plazo",
    },
  ];

  return (
    <section id="blockchain" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column — Explanation content */}
          <div className="flex-1">
            <Kicker index="03">Diferenciador clave</Kicker>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#262c64] mb-6 leading-[1.05]">
              Evidencia que no se puede alterar
            </h2>
            <p className="text-[#5f636f] text-lg leading-relaxed mb-8">
              La Ley 21.719 exige{" "}
              <strong className="font-semibold text-[#262c64]">
                responsabilidad proactiva
              </strong>
              : demostrar activamente el cumplimiento. Nuestra{" "}
              <strong className="font-semibold text-[#262c64]">
                cadena de custodia
              </strong>{" "}
              lo hace{" "}
              <strong className="font-semibold text-[#262c64]">
                matemáticamente imposible de falsificar
              </strong>
              .
            </p>

            <div className="space-y-6">
              {explanations.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="bg-[#169d75] text-white w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#262c64] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#5f636f] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Visual integrity checker */}
          <div className="flex-1">
            <div className="bg-[#F7F8FA] border border-[#E7E9EE] rounded-xl p-6 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-[#262c64]">
                  Integridad de la cadena
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#169d75] bg-[#169d75]/10 px-2 py-1 rounded-xl">
                  142/142 OK
                </span>
              </div>

              {/* Verification items */}
              <div className="space-y-0">
                {verificationItems.map((item, index) => (
                  <div key={item.title}>
                    <div className="flex items-start gap-3 py-4">
                      {/* Checkmark icon */}
                      <div className="text-[#169d75] mt-0.5">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 8.5l3 3 7-7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-[#262c64]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#5f636f] mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                      {/* Integrity badge */}
                      <span className="text-xs font-medium text-[#169d75] bg-[#169d75]/10 px-2 py-0.5 rounded-xl">
                        Íntegro
                      </span>
                    </div>
                    {/* Dashed connector between items */}
                    {index < verificationItems.length - 1 && (
                      <div className="ml-2 border-l-2 border-dashed border-white/[0.1] h-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
