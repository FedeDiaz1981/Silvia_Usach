<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'federicodiaz1981@gmail.com';
    $mail->Password = 'pzjx dhzn xbfd sowi';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->setFrom('federicodiaz1981@gmail.com', 'Federico Diaz');
    $mail->addAddress('federicodiaz1981@gmail.com');
    $mail->Subject = 'Prueba básica';
    $mail->Body = 'Este es un mensaje de prueba básico';

    $mail->send();
    echo 'Correo enviado correctamente';
} catch (Exception $e) {
    echo 'Error enviando correo: ' . $e->getMessage();
}