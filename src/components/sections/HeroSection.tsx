import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { DEMO_URL } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#141833]">
      {/* Radial gradient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(22,157,117,0.15)_0%,rgba(22,157,117,0.05)_40%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left content column */}
        <div className="flex-1 space-y-6">
          <span className="inline-flex items-center gap-2 bg-[#169d75]/10 border border-[#169d75]/30 text-[#169d75] px-4 py-1.5 rounded-none text-sm font-medium">
            Conforme a la Ley N° 21.719
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Cumple la Ley 21.719 sin fricción.
          </h1>

          <p className="text-white/70 text-lg max-w-xl">
            El sistema integral de{" "}
            <strong className="font-semibold text-white">
              gestión de consentimiento
            </strong>{" "}
            y{" "}
            <strong className="font-semibold text-white">
              derechos de datos personales
            </strong>{" "}
            para cualquier empresa en Chile. Con{" "}
            <strong className="font-semibold text-white">
              trazabilidad blockchain
            </strong>{" "}
            y{" "}
            <strong className="font-semibold text-white">validez legal</strong>.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Solicitar una demostración
              </Button>
            </a>
            <a href="#solucion">
              <Button variant="outline" size="lg">
                Ver cómo funciona
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Badge
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="3"
                    width="12"
                    height="11"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 6h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 1v3M11 1v3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              }
              label="Vigencia: 1 dic 2026"
            />
            <Badge
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="6"
                    width="10"
                    height="8"
                    rx="1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M5 6V4a3 3 0 0 1 6 0v2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="6"
                    y="2"
                    width="4"
                    height="6"
                    rx="0.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              label="Multi-industria"
            />
            <Badge
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8 2L4 5v3a6 6 0 0 0 4 5.5A6 6 0 0 0 12 8V5L8 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 8l1.5 1.5L10 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              label="Implementación llave en mano"
            />
          </div>
        </div>

        {/* Right visualization column — Blockchain card */}
        <div className="hidden lg:block flex-1 max-w-md w-full">
          <div className="bg-white/[0.02] border border-[#5f636f]/25 rounded-none p-6 backdrop-blur-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#9aa1af] text-sm font-medium">
                Cadena de custodia
              </span>
              <span className="inline-flex items-center gap-1 bg-[#169d75]/10 text-[#169d75] px-2 py-0.5 rounded-none text-xs font-medium">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6l2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Verificado
              </span>
            </div>

            {/* Block #4 */}
            <div className="bg-white/[0.02] border border-[#5f636f]/25 rounded-none p-4 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#9aa1af] text-xs">
                  Bloque #4 — reciente
                </span>
                <span className="inline-flex items-center bg-[#169d75]/10 text-[#169d75] px-2 py-0.5 rounded-none text-xs">
                  Válido
                </span>
              </div>
              <p className="text-white text-sm font-medium mb-1">
                Solicitud de acceso — ARQ-2025-00312
              </p>
              <p className="text-[#9aa1af] text-xs font-mono truncate">
                sha256:F2A91C4E8B37D065A1F8C3E2B9470D6A…
              </p>
            </div>

            {/* Connector */}
            <div className="flex justify-center py-1">
              <div className="h-6 border-l-2 border-dashed border-white/[0.1]"></div>
            </div>

            {/* Block #3 */}
            <div className="bg-white/[0.02] border border-[#5f636f]/25 rounded-none p-4 mb-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#9aa1af] text-xs">Bloque #3</span>
              </div>
              <p className="text-white text-sm font-medium mb-1">
                Preferencias actualizadas
              </p>
              <p className="text-[#9aa1af] text-xs font-mono truncate">
                sha256:B7D3F1A9C2E046B8D5F3A1C9E2B7D4F0…
              </p>
            </div>

            {/* Connector */}
            <div className="flex justify-center py-1">
              <div className="h-6 border-l-2 border-dashed border-white/[0.1]"></div>
            </div>

            {/* Block #1 */}
            <div className="bg-white/[0.02] border border-[#5f636f]/25 rounded-none p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#9aa1af] text-xs">
                  Bloque #1 — génesis
                </span>
              </div>
              <p className="text-white text-sm font-medium mb-1">
                Consentimiento inicial registrado
              </p>
              <p className="text-[#9aa1af] text-xs font-mono truncate">
                sha256:A3F8B2C1D5E9F4A7B2C6D0E3F7A1B5C9…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
