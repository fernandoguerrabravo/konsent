export default function BlockchainSection() {
  const explanations = [
    {
      number: 1,
      title: "Cada evento genera un hash SHA-256",
      description: (
        <>
          Una{" "}
          <strong className="font-semibold text-white/90">
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
          <strong className="font-semibold text-white/90">
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
          <strong className="font-semibold text-white/90">
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
    <section id="blockchain" className="py-24 bg-[#1b2048]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left column — Explanation content */}
          <div className="flex-1">
            <span className="inline-block text-sm text-[#169d75] mb-4">
              Diferenciador clave
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Evidencia que no se puede alterar
            </h2>
            <p className="text-[#9aa1af] mb-8">
              La Ley 21.719 exige{" "}
              <strong className="font-semibold text-white/90">
                responsabilidad proactiva
              </strong>
              : demostrar activamente el cumplimiento. Nuestra{" "}
              <strong className="font-semibold text-white/90">
                cadena de custodia
              </strong>{" "}
              lo hace{" "}
              <strong className="font-semibold text-white/90">
                matemáticamente imposible de falsificar
              </strong>
              .
            </p>

            <div className="space-y-6">
              {explanations.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="bg-[#169d75] text-white w-8 h-8 rounded-none flex items-center justify-center shrink-0 text-sm font-semibold">
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[#9aa1af] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Visual integrity checker */}
          <div className="flex-1">
            <div className="bg-white/[0.02] border border-[#5f636f]/25 rounded-none p-6 backdrop-blur-sm">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-white">
                  Integridad de la cadena
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#169d75] bg-[#169d75]/10 px-2 py-1 rounded-none">
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
                        <h4 className="text-sm font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#9aa1af] mt-0.5">
                          {item.detail}
                        </p>
                      </div>
                      {/* Integrity badge */}
                      <span className="text-xs font-medium text-[#169d75] bg-[#169d75]/10 px-2 py-0.5 rounded-none">
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
