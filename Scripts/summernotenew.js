import { enviarDatos } from './ajaxConnection.js';


window.onload = enviarDatos(
    'Php/initSession.php', // URL del archivo PHP
    'POST', // Tipo de petición
    {}, // Datos a enviar
    function (response) { // Función de éxito
        if (response.message === 'no hay inciooo') {

            // Redirigir después del login
            window.location.href = response.link;

        } else {
            alert('redireccion' + response.message);
            // window.location.href=response.link;
            // alert("nada");
        }
    },
    function (jqXHR, textStatus, errorThrown) { // Función de error
        console.log('Error en la solicitud: ' + textStatus + ', ' + errorThrown);
    }
);



$(document).ready(function () {
    $('#cuerpo').summernote({
        placeholder: 'Escribe aquí...',
        tabsize: 2,
        height: 300,
        toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['strikethrough', 'superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['forecolor', 'backcolor']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['link', 'picture', 'video', 'table', 'hr']],
            ['misc', ['fullscreen', 'codeview', 'undo', 'redo']]
        ]
    });
});
//********************************************************************** */
let form = document.getElementById("formularioNoticia");
var textarea = document.getElementById("cuerpo");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    //console.log(textarea.value); //extraemos info del menu
    if (textarea.value != "") {
        alert("tenemos una noticia acá");
        let title = document.getElementById("titulo");
     
        try {
            let response = await fetch('Php/createHtml.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contenido: textarea.value,
                    title: title.value,
                    categoryId: 1,
                    stateNew:"Solicitado"
                })
            }).then(response => response.json());
           
            if (response.success) {
                let result = response.message;
                alert(result);
            } else {
                console.log('Error en la respuesta:', response.message);
            }
        } catch (error) {
            console.log('Error en la solicitud:', error);
        }
    }
    else {
        alert("No hay información");
    }
})


