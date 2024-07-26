<?php

include("conexion.php");
$con = conect();
session_start();
header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);
$target_dir = "../uploads/" . $_SESSION['user_email'] . "/news/";
if (isset($input['contenido'])) {
    $content = $input['contenido'];
    // Verificar si la ruta especificada no existe y crearla si es necesario
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0777, true); // Crea el directorio recursivamente
    }
    // Generar un nombre de archivo único
    $filename = uniqid('Noticia_', true) . '.html';

    // Directorio donde se guardarán los archivos (asegúrate de que este directorio tenga permisos de escritura)


    // Ruta completa del archivo
    $filepath = $target_dir . $filename;

    //guardamos el archivo
    if ($con) {
        // Guardar el contenido en el archivo
        if (file_put_contents($filepath, $content) !== false) {
            //echo json_encode(['success' => true, 'filename' => $filename]);
            //uploads/" . $_SESSION['user_email'] . "/news/"
            // Obtener los datos de la solicitud POST
            // Preparar la consulta SQL
            $sql = "INSERT INTO newsv2 (linkNew, title, stateNew, userId,  categoryId) VALUES (?, ?, ?, ?,?)";
            $stmt = $con->prepare($sql);
            $link = "uploads/" . $_SESSION['user_email'] . "/news/" . $filename;
            // Vincular parámetros y ejecutar la consulta

            $stmt->bind_param('sssdd', $link, $input['title'], $input['stateNew'], $_SESSION['user_id'], $input['categoryId']);

            if ($stmt->execute()) {
                //echo "success"; // Envía una respuesta al cliente indicando éxito
                $stmt->close();
                $con->close();
                echo json_encode(['success' => true, 'message' => ' se pudo guardar la base de datos']);
            } else {
                // echo "Error al crear la noticia: " . $stmt->error;
                echo json_encode(['success' => false, 'error' => $stmt->error]);
                $stmt->close();
                $con->close();
            }

            // Cerrar declaración y conexión

        } else {
            // echo "sin encontrar";
            echo json_encode(['success' => false, 'error' => 'No con se pudo guardar el archivo']);
        }
        //echo json_encode(['success' => true, 'filename' => $filename]);

    } else {
        echo json_encode(['success' => false, 'error' => 'No se pudo conectar a la base de datos']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Datos no válidos']);
}
