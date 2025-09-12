import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true para 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { to, subject, text, html } = await request.json();

    // Validá mínimo aquí: (evitar envío arbitrario)
    if (!to || !subject) {
      return new Response(JSON.stringify({ error: "Faltan parámetros" }), { status: 400 });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text: text || "",
      html: html || undefined,
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: any) {
    console.error("Mail error:", err);
    return new Response(JSON.stringify({ error: "Error enviando mail" }), { status: 500 });
  }
};
