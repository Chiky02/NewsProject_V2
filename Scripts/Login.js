import { enviarDatos } from './ajaxConnection.js';
const formularioLogin = document.getElementById('formularioLogin');

window.onload= enviarDatos(
  'Php/initSession.php', // URL del archivo PHP
  'POST', // Tipo de petición
  { }, // Datos a enviar
  function(response) { // Función de éxito
      if (response.message === 'no hay inciooo') {
          alert('..');
          // Redirigir después del login
         // window.location.href = '/pagina_principal.php';
      } else {
          alert('redireccion'+response.message);
          window.location.href=response.link;
      }
  },
  function(jqXHR, textStatus, errorThrown) { // Función de error
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
let data={correo:correo,contrasena:contrasena};
console.log(data);
//ajax(data,"Login");
enviarDatos(
  'Php/Login.php', // URL del archivo PHP
  'POST', // Tipo de petición
  data, // Datos a enviar
  function(json) { // Función de éxito
     

    if (json.message.length == 0) {
      alert("No se ha recibido ninguna respuesta");
    }

    else {
      alert(json);
      if(json.message=="Contrasena correcta"){

        window.location.href = json.url;
      }
      else if(json.message=="Contrasena incorrecta"){
        alert(json.message);

      }
   
      
    }
  },
  function(jqXHR, textStatus, errorThrown) { // Función de error
      console.log('Error en la solicitud: ' + textStatus + ', ' + errorThrown);
  }
);

  }
  // Here you should implement the logic to validate the user credentials against your backend (e.g., database or authentication service)
  // This is omitted for simplicity, you might use AJAX or Fetch API to communicate with the server
});

function ajax(data,action) {

  alert(data);
  $.ajax({
    // la URL para la petición
    url: 'Php/Login.php',
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



      if (json.message.length == 0) {
        alert("No se ha recibido ninguna respuesta");
      }

      else {
        alert(json);
        if(json.message=="Contrasena correcta"){

          window.location.href = json.url;
        }
        else if(json.message=="Contrasena incorrecta"){
          alert(json.message);

        }
     
        
      }
    },
    // código a ejecutar si la petición falla;
    error: function (xhr, status) {
      alert("Ha ocurrido un error inesperado");
      alert(status);
      alert(xhr);
    },
    /*
            // código a ejecutar sin importar si la petición falló o no
            complete : function(xhr, status) {
                alert('Petición realizada');
            }*/
  });
}