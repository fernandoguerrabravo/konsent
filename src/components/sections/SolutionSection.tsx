import Card from "@/components/ui/Card";

const features = [
  {
    title: "Consentimiento granular",
    description: (
      <>
        Captura{" "}
        <strong className="font-semibold text-white/90">
          consentimiento informado por finalidad
        </strong>
        , distinguiendo lo obligatorio de lo opcional. Con{" "}
        <strong className="font-semibold text-white/90">
          timestamp, IP y hash
        </strong>{" "}
        de la política aceptada.
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="24"
          height="20"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 17l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 23h8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Derechos ARCO+",
    description: (
      <>
        Acceso, rectificación, supresión, oposición, portabilidad y limitación.
        Cada solicitud genera un ticket con{" "}
        <strong className="font-semibold text-white/90">
          control automático de plazos
        </strong>
        .
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 26c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M22 10l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Trazabilidad blockchain",
    description: (
      <>
        Cada acción queda en una{" "}
        <strong className="font-semibold text-white/90">
          cadena de custodia inmutable
        </strong>
        .{" "}
        <strong className="font-semibold text-white/90">
          Evidencia matemática
        </strong>{" "}
        ante cualquier fiscalización de la autoridad.
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="4"
          width="10"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="18"
          y="4"
          width="10"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="11"
          y="18"
          width="10"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 9h4" stroke="currentColor" strokeWidth="2" />
        <path d="M9 14v4h7" stroke="currentColor" strokeWidth="2" />
        <path d="M23 14v4h-7" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Titulares extranjeros",
    description: (
      <>
        Identificación por{" "}
        <strong className="font-semibold text-white/90">
          RUT, pasaporte, ID extranjero o Tax ID
        </strong>
        .{" "}
        <strong className="font-semibold text-white/90">
          Formulario bilingüe
        </strong>{" "}
        español/inglés para clientes de cualquier país.
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
        <ellipse
          cx="16"
          cy="16"
          rx="5"
          ry="12"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 16h24" stroke="currentColor" strokeWidth="2" />
        <path d="M6 10h20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 22h20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Alertas de plazos",
    description: (
      <>
        El panel de administración avisa antes de que venza cada solicitud,{" "}
        <strong className="font-semibold text-white/90">
          previniendo sanciones
        </strong>{" "}
        por incumplimiento de plazos legales.
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" />
        <path
          d="M16 9v7l4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 7l2-2M7 7L5 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Portal web + app móvil",
    description: (
      <>
        Tus clientes gestionan su privacidad desde el{" "}
        <strong className="font-semibold text-white/90">portal</strong> o una{" "}
        <strong className="font-semibold text-white/90">app nativa</strong>. Tu
        equipo administra todo desde cualquier dispositivo.
      </>
    ),
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="14"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M7 24h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 20v4" stroke="currentColor" strokeWidth="2" />
        <rect
          x="22"
          y="10"
          width="7"
          height="14"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M24.5 21h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function SolutionSection() {
  return (
    <section id="solucion" className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            La solución
          </h2>
          <p className="text-xl text-white/90 mb-4">
            Todo el ciclo del dato, en una plataforma
          </p>
          <p className="text-white/50">
            Desde la captura del{" "}
            <strong className="font-semibold text-white/90">
              consentimiento informado
            </strong>{" "}
            hasta el{" "}
            <strong className="font-semibold text-white/90">
              ejercicio de derechos
            </strong>
            , con{" "}
            <strong className="font-semibold text-white/90">
              evidencia inalterable
            </strong>{" "}
            en cada paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div className="text-[#56D1B2] mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
