import Card from "@/components/ui/Card";

export default function ChallengeSection() {
  return (
    <section id="desafio" className="py-24 bg-[#0a0a0f]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            El desafío
          </h2>
          <p className="text-xl text-white/90 mb-4">
            La <strong className="font-semibold text-white">Ley 21.719</strong>{" "}
            llega en <strong className="font-semibold text-white">2026</strong>.
            <br />
            El incumplimiento cuesta caro.
          </p>
          <p className="text-white/50">
            Toda empresa que trate{" "}
            <strong className="font-semibold text-white/90">
              datos personales
            </strong>{" "}
            deberá cumplir{" "}
            <strong className="font-semibold text-white/90">
              obligaciones estrictas
            </strong>
            . Sin un sistema, el{" "}
            <strong className="font-semibold text-white/90">
              riesgo legal y operativo
            </strong>{" "}
            es alto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#2FB597] to-[#7FDFC8] bg-clip-text text-transparent mb-2">
              20.000
            </p>
            <p className="text-white/50">
              UTM de multa máxima por infracción gravísima (~USD 1,5M)
            </p>
          </Card>

          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#2FB597] to-[#7FDFC8] bg-clip-text text-transparent mb-2">
              30
            </p>
            <p className="text-white/50">
              días corridos para responder cada solicitud de derechos
            </p>
          </Card>

          <Card>
            <p className="text-4xl font-bold bg-gradient-to-r from-[#2FB597] to-[#7FDFC8] bg-clip-text text-transparent mb-2">
              8
            </p>
            <p className="text-white/50">
              principios legales obligatorios de tratamiento de datos
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
