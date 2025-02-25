import { enviarDatos } from './ajaxConnection.js';
window.onload = enviarDatos(
    '../Php/initSession.php', // URL del archivo PHP
    'POST', // Tipo de petición
    {}, // Datos a enviar
    function (response) { // Función de éxito
      if (response.message === 'no hay inciooo') {
        //alert('..');
        // Redirigir después del login
        // window.location.href = '/pagina_principal.php';
      } else {
        alert('redireccion' + response.message);
        window.location.href = response.link;
      }
    },
    function (jqXHR, textStatus, errorThrown) { // Función de error
      console.log('Error en la solicitud: ' + textStatus + ', ' + errorThrown);
    }
  );
formularioRegistro.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const repetirContrasena = document.getElementById('repetirContrasena').value;

    if (nombre === '' || correo === '' || contrasena === '' || repetirContrasena === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    if (contrasena !== repetirContrasena) {
        alert('Las contraseñas no coinciden.');
        return;
    }
    else {

        try {
            alert(correo);
            alert(contrasena);
            let data = {
                userName: nombre,
                email: correo,
                pass: contrasena,
                Rol: "Editor",
                state: "Activo"
            }

            ajax(data);

        } catch (error) {
            alert(error);
        }


    }

    // Aquí se debería realizar la validación del usuario y el registro en la base de datos
    // (se omite por simplicidad)
});

// considerar generar un archivo js para ajax
function ajax(data) {

    alert(data);
    $.ajax({
        // la URL para la petición
        url: 'Php/Registro.php',

        // la información a enviar

        data: JSON.stringify(data),

        // especifica si será una petición POST o GET
        type: 'POST',

        // el tipo de información que se espera de respuesta
        dataType: 'json',
        cache: false,
        // código a ejecutar si la petición es satisfactoria;

        beforeSend: function () {
            console.log("cargando... no se desespere");
        },
        success: function (json) {



            if (json.length == 0) {
                alert("No se ha podido crear el perfil");
            }

            else {
                alert(json.message);
                if (json.message == "Datos guardados exitosamente") {
                    window.location.href = "Login.html";
                }
                else {
                    alert(json.message);
                }

            }
        },
        // código a ejecutar si la petición falla;
        error: function (xhr, status) {
            alert("Ha ocurrido un error inesperado");
            alert(status);
        },
        /*
                // código a ejecutar sin importar si la petición falló o no
                complete : function(xhr, status) {
                    alert('Petición realizada');
                }*/
    });
}


