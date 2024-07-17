  // Import the functions you need from the SDKs you need
  function ajax(data,action) {

    alert(data);
    $.ajax({
      // la URL para la petición
      url: 'Php/'+action+'.php',
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
          //window.location.href = "/CreateNew.html";
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