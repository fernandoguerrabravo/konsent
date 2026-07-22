import { useState } from "react";
import Tab from "@/components/ui/Tab";

const industries = [
  {
    id: "Retail",
    description:
      "Gestión de consentimiento para programas de fidelización, e-commerce y puntos de venta con alto volumen de datos de clientes.",
  },
  {
    id: "Salud",
    description:
      "Cumplimiento normativo para datos sensibles de pacientes, fichas clínicas y consentimientos informados en centros de salud.",
  },
  {
    id: "Finanzas",
    description:
      "Control de datos personales en banca, seguros y fintech con trazabilidad completa para auditorías regulatorias.",
  },
  {
    id: "Servicios",
    description:
      "Administración de consentimiento para empresas de servicios profesionales, consultoras y outsourcing con múltiples clientes.",
  },
  {
    id: "Tecnología",
    description:
      "Gestión de privacidad para plataformas SaaS, aplicaciones y servicios digitales con usuarios en Chile y el extranjero.",
  },
  {
    id: "Logística",
    description:
      "Protección de datos en cadenas de suministro, transporte y almacenamiento con trazabilidad de información de terceros.",
  },
];

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState("Retail");

  const activeIndustry = industries.find((ind) => ind.id === activeTab);

  return (
    <section className="pt-8 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#262c64] text-center mb-8">
          Diseñado para cualquier industria
        </h2>

        <div className="flex overflow-x-auto gap-2 justify-center mb-8 pb-2">
          {industries.map((industry) => (
            <Tab
              key={industry.id}
              label={industry.id}
              isActive={activeTab === industry.id}
              onClick={() => setActiveTab(industry.id)}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#5f636f] text-lg">
            {activeIndustry?.description}
          </p>
        </div>
      </div>
    </section>
  );
}
