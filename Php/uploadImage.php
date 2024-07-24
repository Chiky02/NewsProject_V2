<?php
session_start();
$target_dir = "../uploads/" . $_SESSION['user_email'] . "/images/"; // Directorio donde se guardará el archivo

// Verificar si se subió algún archivo
if (isset($_FILES["fileToUpload"])) {
    // Verificar si la ruta especificada no existe y crearla si es necesario
    if (!file_exists($target_dir)) {
        mkdir($target_dir, 0777, true); // Crea el directorio recursivamente
    }

    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($_FILES["fileToUpload"]["name"], PATHINFO_EXTENSION));

    // Generar un nombre único para el archivo
    $newFileName = "imagen_" . time() . "." . $imageFileType;
    $target_file = $target_dir . $newFileName; // Ruta completa del archivo

    // Verificar si el archivo ya existe
    if (file_exists($target_file)) {
        echo "Lo siento, el archivo ya existe.";
        $uploadOk = 0;
    }

    // Verificar el tamaño del archivo (por ejemplo, no mayor a 5MB)
    if ($_FILES["fileToUpload"]["size"] > 50000000) {
        echo "Lo siento, tu archivo es demasiado grande.";
        $uploadOk = 0;
    }

    // Permitir solo ciertos formatos de archivo (por ejemplo: JPG, JPEG, PNG, GIF)
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
        echo "Lo siento, solo se permiten archivos JPG, JPEG, PNG y GIF.";
        $uploadOk = 0;
    }

    // Verificar si $uploadOk es 0 por un error
    if ($uploadOk == 0) {
        echo "Lo siento, tu archivo no fue subido.";
    } else {
        // Intentar subir el archivo
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "uploads/" . $_SESSION['user_email'] . "/images/" . htmlspecialchars($newFileName);
        } else {
            echo "Lo siento, hubo un error al subir tu archivo.";
        }
    }
} else {
    echo "Error: No se subió ningún archivo.";
}
