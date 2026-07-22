import Card from "@/components/ui/Card";
import Kicker from "@/components/ui/Kicker";

const modules = [
  {
    title: "Portal de privacidad",
    description: (
      <>
        Punto de entrada público{" "}
        <strong className="font-semibold text-white/90">
          con tu marca, bilingüe
        </strong>
        , para que tus clientes gestionen su consentimiento.
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
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 12h24" stroke="currentColor" strokeWidth="2" />
        <circle cx="7" cy="9" r="1" fill="currentColor" />
        <circle cx="10" cy="9" r="1" fill="currentColor" />
        <circle cx="13" cy="9" r="1" fill="currentColor" />
        <path d="M8 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Formulario de consentimiento",
    description: (
      <>
        <strong className="font-semibold text-white/90">
          Captura legal por finalidad
        </strong>
        , con certificado, hash y registro de identidad, fecha e IP.
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
          x="6"
          y="4"
          width="20"
          height="24"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M10 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 15h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M20 22l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Panel del titular",
    description: (
      <>
        Tus clientes revisan sus consentimientos,{" "}
        <strong className="font-semibold text-white/90">
          ejercen derechos
        </strong>{" "}
        y ven la{" "}
        <strong className="font-semibold text-white/90">
          cadena de custodia
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
        <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
        <path
          d="M8 27c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="20"
          y="4"
          width="8"
          height="6"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M22 7h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Panel de administración",
    description: (
      <>
        Tu equipo gestiona solicitudes con{" "}
        <strong className="font-semibold text-white/90">
          alertas de plazos
        </strong>
        , filtros y reportes de cumplimiento.
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
          width="26"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M3 11h26" stroke="currentColor" strokeWidth="2" />
        <path d="M10 6v18" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "App móvil",
    description: (
      <>
        Módulo del titular y módulo administrativo en una{" "}
        <strong className="font-semibold text-white/90">app nativa</strong> para
        iOS y Android.
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
          x="9"
          y="4"
          width="14"
          height="24"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="24" r="1.5" fill="currentColor" />
        <path d="M12 13h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Documentos legales",
    description: (
      <>
        <strong className="font-semibold text-white/90">
          Política de privacidad, contratos DPA
        </strong>{" "}
        y{" "}
        <strong className="font-semibold text-white/90">
          Registro de Actividades de Tratamiento
        </strong>{" "}
        listos para usar.
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
        <path
          d="M8 4h12l6 6v18a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M20 4v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ModulesSection() {
  return (
    <section id="modulos" className="py-24 bg-[#141833]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <Kicker index="04">Un ecosistema completo</Kicker>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-[1.05]">
            Seis módulos que trabajan juntos
          </h2>
          <p className="text-[#9aa1af] text-lg leading-relaxed">
            Todo lo que tu empresa necesita para cumplir la{" "}
            <strong className="font-semibold text-white/90">Ley 21.719</strong>,
            integrado en una sola plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Card key={module.title}>
              <div className="text-[#169d75] mb-4">{module.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {module.title}
              </h3>
              <p className="text-[#9aa1af] text-sm">{module.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
