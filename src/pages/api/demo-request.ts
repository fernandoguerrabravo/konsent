import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";
import { RateLimiterMemory } from "rate-limiter-flexible";

const resend = new Resend(process.env.RESEND_API_KEY);

// Máximo 3 solicitudes por IP cada 15 minutos
const rateLimiter = new RateLimiterMemory({
  points: 3,
  duration: 900,
});

function getClientIp(req: NextApiRequest): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress || "unknown";
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // Skip if not configured (dev)

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: ip,
    }),
  });

  const data = await res.json();
  return data.success === true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  // Rate limiting
  const clientIp = getClientIp(req);
  try {
    await rateLimiter.consume(clientIp);
  } catch {
    return res.status(429).json({ error: "Demasiadas solicitudes. Intenta en 15 minutos." });
  }

  const { nombre, empresa, correo, telefono, industria, turnstileToken } = req.body;

  if (!nombre || !empresa || !correo || !industria) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  // Verificar Turnstile
  const isHuman = await verifyTurnstile(turnstileToken || "", clientIp);
  if (!isHuman) {
    return res.status(403).json({ error: "Verificación de seguridad fallida" });
  }

  // Validación básica de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return res.status(400).json({ error: "Correo inválido" });
  }

  try {
    // Correo interno al equipo Konsent
    await resend.emails.send({
      from: "Konsent <noreply@konsent.cl>",
      to: ["gabriela@konsent.cl", "andrea@konsent.cl"],
      replyTo: correo,
      subject: `[Konsent] Nueva solicitud de demo — ${empresa}`,
      html: `
        <h2>Nueva solicitud de demostración</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr><td style="padding: 8px; font-weight: bold;">Nombre:</td><td style="padding: 8px;">${nombre}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td style="padding: 8px;">${empresa}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Correo:</td><td style="padding: 8px;">${correo}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Teléfono:</td><td style="padding: 8px;">${telefono || "No proporcionado"}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Industria:</td><td style="padding: 8px;">${industria}</td></tr>
        </table>
      `,
    });

    // Correo de confirmación al solicitante
    await resend.emails.send({
      from: "Konsent <noreply@konsent.cl>",
      to: [correo],
      subject: "Recibimos tu solicitud de demo — Konsent",
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a2e;">Hola ${nombre},</h2>
          <p style="color: #333; line-height: 1.6;">
            Gracias por tu interés en <strong>Konsent</strong>. Recibimos tu solicitud de demostración y te contactaremos en menos de 24 horas para coordinar una sesión personalizada.
          </p>
          <p style="color: #333; line-height: 1.6;">
            Mientras tanto, si tienes alguna pregunta puedes escribirnos directamente a <a href="mailto:gabriela@konsent.cl">gabriela@konsent.cl</a>.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
          <p style="color: #666; font-size: 14px;">
            <strong>Konsent</strong> · Cumplimiento Ley N° 21.719 · Chile
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
