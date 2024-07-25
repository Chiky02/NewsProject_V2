<?php
include("conexion.php");
session_start();
$con = conect();

if ($con) {


    // Obtener los datos de la solicitud POST
    $data = json_decode(file_get_contents("php://input"), true);

    if (!empty($data['date']) && !empty($data['body']) && !empty($data['stateNew']) && !empty($data['title'])  && isset($data['categoryId'])) {
        // Preparar la consulta SQL
        $sql = "INSERT INTO news (date, body, stateNew, title, userId, categoryId, photoLink) VALUES (?, ?, ?, ?, ?, ?, ?)";
        $stmt = $con->prepare($sql);

        // Vincular parámetros y ejecutar la consulta
        $stmt->bind_param('ssssdds', $data['date'], $data['body'], $data['stateNew'], $data['title'], $_SESSION['user_id'], $data['categoryId'], $data['photoLink']);

        if ($stmt->execute()) {
            echo "success"; // Envía una respuesta al cliente indicando éxito
        } else {
            echo "Error al crear la noticia: " . $stmt->error;
        }

        // Cerrar declaración y conexión
        $stmt->close();
        $con->close();
    } else {
        echo "Faltan datos requeridos para crear la noticia.";
    }
} else {
    echo "sin encontrar";
}

// es l arespuesta que da el servidor
