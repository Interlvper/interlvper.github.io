<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the data from the POST request
    $data = json_decode(file_get_contents("php://input"), true);

    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Define the recipient's email address
    $recipientEmail = 'tylermyles98@gmail.com'; // Replace with the recipient's email address

    // Send the email
    $subject = 'New message from ' . $name;
    $headers = 'From: ' . $email;

    if (mail($recipientEmail, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
?>