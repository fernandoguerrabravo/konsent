import Card from "@/components/ui/Card";
import Kicker from "@/components/ui/Kicker";

export default function ChallengeSection() {
  return (
    <section id="desafio" className="py-24 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <Kicker index="01">El desafío</Kicker>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#262c64] mb-6 leading-[1.05]">
            La <span className="text-[#33B892]">Ley 21.719</span> llega en 2026.
            El incumplimiento cuesta caro.
          </h2>
          <p className="text-[#5f636f] text-lg leading-relaxed">
            Toda empresa que trate{" "}
            <strong className="font-semibold text-[#262c64]">
              datos personales
            </strong>{" "}
            deberá cumplir{" "}
            <strong className="font-semibold text-[#262c64]">
              obligaciones estrictas
            </strong>
            . Sin un sistema, el{" "}
            <strong className="font-semibold text-[#262c64]">
              riesgo legal y operativo
            </strong>{" "}
            es alto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#0F7357] to-[#33B892] bg-clip-text text-transparent mb-2">
              20.000
            </p>
            <p className="text-[#5f636f]">
              UTM de multa máxima por infracción gravísima (~USD 1,5M)
            </p>
          </Card>

          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#0F7357] to-[#33B892] bg-clip-text text-transparent mb-2">
              30
            </p>
            <p className="text-[#5f636f]">
              días corridos para responder cada solicitud de derechos
            </p>
          </Card>

          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#0F7357] to-[#33B892] bg-clip-text text-transparent mb-2">
              8
            </p>
            <p className="text-[#5f636f]">
              principios legales obligatorios de tratamiento de datos
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
