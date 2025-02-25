<?php
include("conexion.php");

session_start(); // Iniciar la sesión



$con = conect();

if ($con) {
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['correo']) && isset($data['contrasena'])) {
        $email = $con->real_escape_string($data['correo']);
        $pass = $con->real_escape_string($data['contrasena']);
        $stmt = $con->prepare('SELECT idUser, userName, pass, Rol, state  FROM users WHERE email = ?');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($idUser, $userName, $hashedPassword, $rol, $state);

        //stm para verificar si hay correo ue coincida
        if (!$stmt->fetch()) {
            echo json_encode(["message" => 'Esta correo no está asociado a ninguna cuenta']);
        } else if ($hashedPassword && password_verify($pass, $hashedPassword)) {
            //Datos de inicio de sesion
            $_SESSION['user_id'] = $idUser;
            $_SESSION['user_name'] = $userName;
            $_SESSION['user_email'] = $email;
            $_SESSION['user_rol'] = $rol;
            $_SESSION['user_state'] = $state;
            echo json_encode(["message" => 'Contrasena correcta', "url" => "../Pages/IndexAdmin.php"]);
        } else {
            echo json_encode(["message" => 'Contrasena incorrecta']);
        }

        $stmt->close();
        $con->close();
    }
} else {
    echo json_encode(["message" => 'Sin encontrar']);
}
