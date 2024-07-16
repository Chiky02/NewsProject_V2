<?php
include("conexion.php");

$con=conect();

if($con){
 
  
// Obtener los datos de la solicitud POST
$data = json_decode(file_get_contents("php://input"), true);

// Verificar si se recibieron datos
if(isset($data['userName']) && isset($data['email']) && isset($data['pass']) && isset($data['Rol']) && isset($data['state'])) {
    $userName = $con->real_escape_string($data['userName']);
    $email = $con->real_escape_string($data['email']);
    $pass = $con->real_escape_string($data['pass']);
    $rol = $con->real_escape_string($data['Rol']);
    $state = $con->real_escape_string($data['state']);
// Encriptar la contraseña
    $hashedPass = password_hash($pass, PASSWORD_DEFAULT);
    // Crear la consulta SQL
    $sql =  "INSERT INTO `users` (`userName`, `email`, `pass`, `Rol`, `state`) VALUES (\"$userName\", \"$email\", \"$hashedPass\", \"$rol\", \"$state\");";
    // Ejecutar la consulta y verificar si fue exitosa
    if ($con->query($sql) === TRUE) {
        echo json_encode(["message" => "Datos guardados exitosamente"]);
    } else {
        echo json_encode(["error" => "Error: " . $sql . "<br>" . $con->error]);
    }
} else {
    echo json_encode(["error" => "Datos incompletos"]);
}

// Cerrar la conexión
$con->close();


    }
else{
    echo "sin encontrar";
}

// es l arespuesta que da el servidor


?>