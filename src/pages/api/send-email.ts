import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const payload = await request.json();

    // Soporta payload único { to, subject, text, html }
    // o { messages: [ { to, subject, ... }, ... ] }
    const messages = Array.isArray(payload?.messages)
      ? payload.messages
      : [payload];

    if (!messages.length) {
      return new Response(JSON.stringify({ error: "Faltan parámetros" }), {
        status: 400,
      });
    }

    // Validar campos mínimos
    const invalid = messages.find((m: any) => !m?.to || !m?.subject);
    if (invalid) {
      return new Response(
        JSON.stringify({ error: "Cada mensaje requiere 'to' y 'subject'" }),
        { status: 400 }
      );
    }

    const SMTP_USER = process.env.SMTP_USER ?? import.meta.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS ?? import.meta.env.SMTP_PASS;

    if (!SMTP_USER || !SMTP_PASS) {
      return new Response(
        JSON.stringify({ error: "Credenciales SMTP no configuradas" }),
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Verificar conexión antes de enviar
    await transporter.verify();

    // Enviar en paralelo
    const sendResults = await Promise.allSettled(
      messages.map((m: any) =>
        transporter.sendMail({
          from: SMTP_USER,
          to: m.to,
          subject: m.subject,
          text: m.text || "",
          html: m.html || undefined,
        })
      )
    );

    const results = sendResults.map((r, idx) =>
      r.status === "fulfilled"
        ? { ok: true, info: (r as PromiseFulfilledResult<any>).value, index: idx }
        : { ok: false, error: (r as PromiseRejectedResult).reason?.message || String((r as PromiseRejectedResult).reason), index: idx }
    );

    return new Response(JSON.stringify({ results }), { status: 200 });
  } catch (err: any) {
    console.error("Mail error:", err);
    return new Response(
      JSON.stringify({ error: "Error enviando mail", details: err?.message || String(err) }),
      { status: 500 }
    );
  }
};