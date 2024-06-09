<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    $to = "webslava92@gmail.com";
    $subject = "Message from webslava92.ru";
    $body = "Имя: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: webslava92@gmail.com";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "the email has been sent successfully. i will try to answer as soon as possible"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Не удалось отправить сообщение. Попробуйте позже."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["message" => "something went wrong. try again later"]);
}
?>