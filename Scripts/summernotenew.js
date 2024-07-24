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
        try {
            let response = await fetch('Php/createHtml.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    contenido: textarea.value
                })
            });

            if (response.success) {
                let result =  response.success;
                alert(result);
            } else {
                console.error('Error en la respuesta:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    }
    else {
        alert("No hay información");
    }
})


