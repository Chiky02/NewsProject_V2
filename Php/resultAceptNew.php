<?php
session_start(); // Inicia la sesión para manejar la autenticación

include("conexion.php");

$con = conect(); // Asegúrate de que la función conect() devuelve una conexión válida

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

// Obtener datos de la solicitud POST
$data = json_decode(file_get_contents('php://input'), true);

$noticiaId = $data['id'];// Convertir a entero
$noticiaEleccion = isset($data['eleccion']) ? $con->real_escape_string($data['eleccion']) : null; // Sanitizar

$response = array();

// Verificar si los datos son válidos
if ($noticiaId && $noticiaEleccion) {
    // Actualizar el estado de la noticia en la base de datos
    $sql = "UPDATE newsv2 SET stateNew=? WHERE idNews=? ";
    $stmt = $con->prepare($sql);

    if ($stmt === false) {
        $response['success'] = false;
        $response['error'] = $con->error;
    } else {
        $stmt->bind_param("si", $noticiaEleccion, $noticiaId);

        if ($stmt->execute()) {
            $response['success'] = true;
        } else {
            $response['success'] = false;
            $response['error'] = $stmt->error;
        }

        $stmt->close();
    }
} else {
    $response['success'] = false;
    $response['error'] = 'Datos inválidos.';
}

$con->close();

header('Content-Type: application/json');
echo json_encode($response);
?>
