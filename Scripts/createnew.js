
//addDoc,collection 
const formularioNoticia = document.getElementById('formularioNoticia');
const out = document.getElementById('Signout');


const imageInput = document.getElementById('imagen'); // Assuming 'imagen' is the ID of your image input element

const imagePreview = document.getElementById('imagenNoticia'); // Assuming 'imagePreview' is the ID of your image preview element

let uid = 1; //uid sera el id del usuario logueado
formularioNoticia.addEventListener('submit', (event) => crearNoticia(event, uid));

imageInput.addEventListener('change', function () {
  if (imageInput.files.length > 0) {
    const selectedFile = imageInput.files[0];

    if (selectedFile.type.startsWith('image/')) {
      const fileReader = new FileReader();
      fileReader.onload = function (e) {
        const dataURL = e.target.result; // Data URL representing the image content
        if (selectedFile.size > 2097152) {
          alert('Image size exceeds the maximum limit of 2MB. Please select a smaller file.');
          imageInput.value = ''; // Clear the file selection
          return;
        }
        // Display image preview
        imagePreview.src = dataURL;

        // Alert the data URL (not the direct file path)

      };
      fileReader.readAsDataURL(selectedFile);
    } 
  }
  else {
    alert('Please select an image file');
  }
});


async function crearNoticia(event, uid) {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const imagen = document.getElementById('imagen').files[0];
  const cuerpo = document.getElementById('cuerpo').value;
  const selectedFile = imageInput.files[0];

  //******************************* 
  var linkImage = "/users/" + uid + "/uploads/"+selectedFile.name;

  var formData = new FormData();
  formData.append('fileToUpload', selectedFile);


console.log(formData);
//************************************************** */
  if (titulo === '' || imagen === null || cuerpo === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }

  // Aquí se debería subir la imagen y la noticia al servidor
  try {
    const currentDateTimeString = new Date();
 ajax2Image(formData);



    let data = {
      date: currentDateTimeString,
      body: cuerpo,
      stateNew: "Solicitado",
      title: titulo,
      user: 1,
      categoryId: 1,
      photoLink: selectedFile.name
    }
    //estados-- solicitado, aprobado, solicitado
    ajax(data)



    alert("Noticia creada y publicada");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  // (se omite por simplicidad)
  alert('Noticia creada correctamente.');
  formularioNoticia.reset(); // Limpiar el formulario
};


// considerar generar un archivo js para ajax
function ajax(data) {

  alert(data);
  $.ajax({
    // la URL para la petición
    url: 'Php/CreateNew.php',
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
        alert("No se ha podido crear la noticia");
      }

      else {
        alert(json);
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
function ajax2Image(data2) {

  alert(data2);
  $.ajax({
    // la URL para la petición
    url: 'Php/uploadImage.php',
    // la información a enviar
    data: data2,
    // especifica si será una petición POST o GET
    type: 'POST',
    processData: false,
    // el tipo de información que se espera de respuesta
    contentType:false,
    cache: false,
    // código a ejecutar si la petición es satisfactoria;

    beforeSend: function () {
      console.log("cargando... no se desespere");
    },
    success: function (json) {



      if (json.length == 0) {
        alert("No se ha podido subir la imagen");
      }

      else {
        alert(json);
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


