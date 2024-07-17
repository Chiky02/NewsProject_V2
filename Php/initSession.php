<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.html'); // Redirigir al login si no está autenticado
    exit();
}

echo "Bienvenido, " . $_SESSION['user_name'];
?>