import { useState, useCallback } from "react";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";
import Turnstile from "@/components/ui/Turnstile";
import { DemoFormData } from "@/types";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRY_OPTIONS = [
  "Retail / E-commerce",
  "Salud",
  "Finanzas / Seguros",
  "Servicios profesionales",
  "Tecnología",
  "Logística / Aduanas",
  "Educación",
  "Otra",
];

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState<DemoFormData>({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    industria: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof DemoFormData, string>>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken("");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof DemoFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof DemoFormData, string>> = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.empresa.trim()) newErrors.empresa = "La empresa es obligatoria";
    if (!formData.correo.trim()) newErrors.correo = "El correo es obligatorio";
    if (!formData.industria) newErrors.industria = "Selecciona una industria";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (!turnstileToken) {
      alert("Por favor completa la verificación de seguridad.");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.error || "Hubo un error al enviar la solicitud. Intenta de nuevo.");
      }
    } catch {
      alert("Error de conexión. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const inputStyles =
    "w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white placeholder:text-white/30 focus:border-[#56D1B2] focus:ring-1 focus:ring-[#56D1B2]/30 focus:outline-none transition-all";
  const labelStyles = "text-sm text-white/60 mb-1 block";

  if (submitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Agenda tu demostración">
        <div className="text-center py-6">
          <div className="mx-auto w-16 h-16 bg-[#56D1B2]/20 rounded-none flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#56D1B2]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            ¡Solicitud enviada!
          </h3>
          <p className="text-white/50">
            Gracias por tu interés en Konsent. Te contactaremos muy pronto al
            correo que nos dejaste para coordinar tu demostración.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Agenda tu demostración">
      <p className="text-white/50 mb-6">
        Déjanos tus datos y te contactamos en menos de 24 horas para coordinar
        una demo personalizada.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nombre" className={labelStyles}>
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className={inputStyles}
          />
          {errors.nombre && (
            <p className="text-xs text-red-400 mt-1">{errors.nombre}</p>
          )}
        </div>

        <div>
          <label htmlFor="empresa" className={labelStyles}>
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            placeholder="Empresa"
            value={formData.empresa}
            onChange={handleChange}
            className={inputStyles}
          />
          {errors.empresa && (
            <p className="text-xs text-red-400 mt-1">{errors.empresa}</p>
          )}
        </div>

        <div>
          <label htmlFor="correo" className={labelStyles}>
            Correo corporativo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            placeholder="Correo corporativo"
            value={formData.correo}
            onChange={handleChange}
            className={inputStyles}
          />
          {errors.correo && (
            <p className="text-xs text-red-400 mt-1">{errors.correo}</p>
          )}
        </div>

        <div>
          <label htmlFor="telefono" className={labelStyles}>
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>

        <div>
          <label htmlFor="industria" className={labelStyles}>
            Industria
          </label>
          <select
            id="industria"
            name="industria"
            value={formData.industria}
            onChange={handleChange}
            className={inputStyles}
          >
            <option value="" disabled>
              Selecciona...
            </option>
            {INDUSTRY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.industria && (
            <p className="text-xs text-red-400 mt-1">{errors.industria}</p>
          )}
        </div>

        <p className="text-xs text-white/40 mt-4 leading-relaxed">
          Al enviar este formulario, consientes que Konsent SpA trate tus datos personales con la finalidad de contactarte y coordinar una demostración del servicio, conforme a la Ley N° 21.719 de Protección de Datos Personales.
        </p>

        <Turnstile
          onVerify={handleTurnstileVerify}
          onExpire={handleTurnstileExpire}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          disabled={!turnstileToken || sending}
        >
          {sending ? "Enviando..." : "Solicitar demostración"}
        </Button>
      </form>
    </Modal>
  );
}
