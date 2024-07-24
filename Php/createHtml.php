<?php
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
    $directory = 'uploads/';

    // Ruta completa del archivo
    $filepath = $target_dir . $filename;

    //guardamos el archivo
    // Guardar el contenido en el archivo
    if (file_put_contents($filepath, $content) !== false) {
        echo json_encode(['success' => true, 'filename' => $filename]);
    } else {
        echo json_encode(['success' => false, 'error' => 'No se pudo guardar el archivo']);
    }

} else {
    echo json_encode(['success' => false, 'error' => 'Datos no válidos']);
}
