<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración</title>
    <link rel="stylesheet" href="Style/style.css">
    <link rel="stylesheet" href="Style/admin.css">
</head>

<body>
    <div class="admin-container">
        <div class="profile">
            <img src="Images/Logo2.png" alt="Foto del Administrador">
            <div>
                <h2><?php session_start(); // Iniciar la sesión
                    echo $_SESSION['user_name']   ?> </h2>
                <p><?php
                    echo $_SESSION['user_email'] ?></p>
            </div>
        </div>

        <div class="admin-options">
            <a href="index.html">&#128064;Ver Sitio</a>
            <a href="#">manejar usuarios</a>
            <a href="CreateNew-V3.html">Crear Noticia</a>
            <a href="aceptNew.html">Aceptar Noticia</a>

            <a href="borrar-noticia.html">Borrar Noticia</a>
            <a href="CreateNew.html">Agregar Info al Slider</a>
            <a href="eliminar-info-slider.html">Eliminar Info del Slider</a>
        </div>
    </div>
</body>

</html>