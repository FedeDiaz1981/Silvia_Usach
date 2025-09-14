import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const message = formData.get('message') as string;

    // Validaciones básicas
    if (!name || !email || !message) {
      return new Response(JSON.stringify({
        ok: false,
        error: 'Datos inválidos. Nombre, email y mensaje son requeridos.'
      }), {
        status: 422,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        ok: false,
        error: 'Email inválido.'
      }), {
        status: 422,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    // Configurar Nodemailer con Gmail
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: 'federicodiaz1981@gmail.com',
        pass: 'huwl zqcy velq ookk' // App Password de Gmail
      }
    });

    // Configurar el email
    const mailOptions = {
      from: 'federicodiaz1981@gmail.com',
      to: 'fediaz3100@gmail.com',
      replyTo: email,
      subject: `Nueva consulta: ${name}`,
      html: `
        <h2>Nueva consulta desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || '-'}</p>
        <p><strong>Ubicación:</strong> ${location || '-'}</p>
        <p><strong>Consulta:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
Nueva consulta desde el sitio web

Nombre: ${name}
Email: ${email}
Teléfono: ${phone || '-'}
Ubicación: ${location || '-'}

Consulta:
${message}
      `
    };

    // Enviar email
    await transporter.sendMail(mailOptions);

    console.log('Email enviado exitosamente:', {
      name,
      email,
      phone,
      location,
      message
    });

    return new Response(JSON.stringify({
      ok: true,
      message: 'Mensaje enviado correctamente'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error procesando formulario:', error);
    return new Response(JSON.stringify({
      ok: false,
      error: 'Error interno del servidor'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
