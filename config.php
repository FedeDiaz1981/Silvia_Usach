<?php
// config.php -- Configuración para el formulario de contacto de Silvia Usach
// IMPORTANTE: rota credenciales si son reales y NO subas esto a un repo público.

return [
  'SMTP_HOST' => 'smtp.gmail.com',
  'SMTP_PORT' => 465, // Cambiado a 587 para STARTTLS (más confiable)
  'SMTP_USER' => 'federicodiaz1981@gmail.com', // Email desde el cual se envían los mails
  'SMTP_PASS' => 'huwl zqcy velq ookk', // App password de Gmail
  'SMTP_TO'   => 'fediaz3100@gmail.com', // Email de destino (Silvia Usach)

  // Opcional: nombre para mostrar
  'FROM_NAME' => 'Sitio Web - Silvia Usach',
];