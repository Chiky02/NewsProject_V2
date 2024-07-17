
const formularioLogin = document.getElementById('formularioLogin');



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
ajax(data,"Login");


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
    dataType: 'text',
    cache: false,
    // código a ejecutar si la petición es satisfactoria;

    beforeSend: function () {
      console.log("cargando... no se desespere");
    },
    success: function (json) {



      if (json.length == 0) {
        alert("No se ha recibido ninguna respuesta");
      }

      else {
        alert(json);
        if(json=="Contrasensa correcta"){

          window.location.href =  "CreateNew.html";
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