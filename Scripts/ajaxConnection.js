  // Import the functions you need from the SDKs you need
 export function enviarDatos(url, tipo, datos, exitoCallback, errorCallback) {
    $.ajax({
        url: url,
        type: tipo,
        data: JSON.stringify(datos), // Convertir datos a JSON si es necesario
        dataType: 'json', // Tipo de datos que se espera recibir
        cache: false,
        beforeSend: function () {
            console.log("Cargando... No se desespere");
        },
        success: function (response) {
            if (response.length === 0) {
                alert("No se ha recibido ninguna respuesta");
            } else {
                if (exitoCallback) {
                    exitoCallback(response); // Llamar al callback de éxito con la respuesta
                }
            }
        },
        error: function (xhr, status) {
            if (errorCallback) {
                errorCallback(xhr, status); // Llamar al callback de error con los detalles de error
            } else {
                alert("Ha ocurrido un error inesperado");
                console.error(status);
            }
        }
    });
}
//usoooooooooooo
/*
$(document).ready(function() {
    // Ejemplo de uso de la función AJAX reutilizable
    $('#miFormulario').on('submit', function(event) {
        event.preventDefault();

        const correo = $('#correo').val();
        const contrasena = $('#contrasena').val();

        // Llamar a la función AJAX reutilizable
        enviarDatos(
            'verificar_login.php', // URL del archivo PHP
            'POST', // Tipo de petición
            { correo: correo, contrasena: contrasena }, // Datos a enviar
            function(response) { // Función de éxito
                if (response === 'success') {
                    alert('Login exitoso');
                    // Redirigir después del login
                    window.location.href = '/pagina_principal.php';
                } else {
                    alert('Correo o contraseña incorrectos');
                }
            },
            function(jqXHR, textStatus, errorThrown) { // Función de error
                console.log('Error en la solicitud: ' + textStatus + ', ' + errorThrown);
            }
        );
    });
});*/