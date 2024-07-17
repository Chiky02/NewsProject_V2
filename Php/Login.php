<?php
include("conexion.php");

$con=conect();

if($con){
    $data = json_decode(file_get_contents("php://input"), true);
    if (isset($data['correo']) && isset($data['contrasena'])) {
        $email = $con->real_escape_string($data['correo']);
        $pass = $con->real_escape_string($data['contrasena']);
        $stmt = $con->prepare('SELECT idUser, userName, pass, Rol, state  FROM users WHERE email = ?');
        $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->bind_result($idUser, $userName, $hashedPassword, $rol, $state);
        $stmt->fetch();
        //stm para verificar si hay correo ue coincida

    if ($hashedPassword && password_verify($pass, $hashedPassword)) {
        $_SESSION['user_id'] = $idUser;
        $_SESSION['user_name'] = $userName;
        $_SESSION['user_email'] = $email;
        $_SESSION['user_rol'] = $rol;
        $_SESSION['user_state'] = $state;
        echo 'Contrasensa correcta';
    } else {
        echo 'Contrasena incorrecta';
    }
        
          $stmt->close();
          $con->close();
    
    
    
    
    }

}
else{
    echo "sin encontrar";
}
?>
