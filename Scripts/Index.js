
var continer = document.getElementById("noticias");

onload = function ajax() {


    $.ajax({
        // la URL para la petición
        url: 'Php/retorno.php',

        // la información a enviar

        data: {},

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
                alert("No se ha encontrado informacion en la base de datos");
            }

            else {
                const data = JSON.parse(json);
                //hacemos que el tecxto se parsee en formato json para poder manejarlo
                console.log(data);
                const noticiasContainer = document.getElementById('noticias');


                data.forEach((element, index) => {

                    const noticiaHTML = `
                    <div class="noticia">
                    <h2>${element.title}</h2>
                        <img src="${element.photoLink}" alt="${element.titulo}">
                     
                        <p>${element.body}</p>
                        <h4>${element.date}</h4>
                    </div>`;
                    noticiasContainer.innerHTML += noticiaHTML;

                    /*
                    alert(
                        'Noticia ' + index + ':\n' +
                        'ID: ' + element.idNews + '\n' +
                        'Fecha: ' + element.date + '\n' +
                        'Cuerpo: ' + element.body + '\n' +
                        'Estado: ' + element.stateNew + '\n' +
                        'Título: ' + element.title + '\n' +
                        'ID de usuario: ' + element.userId + '\n' +
                        'ID de categoría: ' + element.categoryId + '\n' +
                        'Enlace de foto: ' + (element.photoLink || 'N/A')
                    );*/

                });
               

            }
        },

        // código a ejecutar si la petición falla;
        error: function (xhr, status) {
            alert("Ha ocurrido un error inesperado");


        },


        /*
                // código a ejecutar sin importar si la petición falló o no
                complete : function(xhr, status) {
                    alert('Petición realizada');
                }*/
    });
}



