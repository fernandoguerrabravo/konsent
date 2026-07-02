import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, empresa, correo, telefono, industria } = req.body;

  if (!nombre || !empresa || !correo || !industria) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error enviando correo:", error);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
