import { enviarDatos } from './ajaxConnection.js';
const formularioLogin = document.getElementById('formularioLogin');

window.onload = enviarDatos(
  'Php/initSession.php', // URL del archivo PHP
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


formularioLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;

  if (correo === '' || contrasena === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }
  else {
    //codigo para verificar datos introducidos
    let data = { correo: correo, contrasena: contrasena };
    console.log(data);
    //ajax(data,"Login");
    enviarDatos(
      'Php/Login.php', // URL del archivo PHP
      'POST', // Tipo de petición
      data, // Datos a enviar
      function (json) { // Función de éxito


        if (json.message.length == 0) {
          alert("No se ha recibido ninguna respuesta");
        }

        else {
          alert(json);
          if (json.message == "Contrasena correcta") {

            window.location.href = json.url;
          }
          else if (json.message == "Contrasena incorrecta") {
            alert(json.message);

          }
          else {
            alert(json.message);
          }


        }
      },
      function (jqXHR, textStatus, errorThrown) { // Función de error
        console.log('Error en la solicitud: ' + textStatus + ', ' + errorThrown);
      }
    );

  }
  // Here you should implement the logic to validate the user credentials against your backend (e.g., database or authentication service)
  // This is omitted for simplicity, you might use AJAX or Fetch API to communicate with the server
});

