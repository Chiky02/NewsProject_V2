
var continer = document.getElementById("noticias");

onload = async function ajax() {


    let response = await fetch('Php/aceptNew.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {},
    }).then(response => response.json());

    if (response.success) {
        let result = response.data;
        console.log(result);

        const noticiasContainer = document.getElementById('noticias');

        result.forEach(element => {
            const noticiaHTML = `
            <div class="noticia">
            <h2>${element.title}</h2>
          ${element.content}
                <h4>${element.dateUpload}</h4>
                <h4>${element.userId}</h4>
                <button class="aceptar"  data-id="${element.idNews}">Aceptar </button>
                <button class="denegar"  data-id="${element.idNews}">Denegar </button>
            </div>`;

            console.log(element);
            noticiasContainer.innerHTML += noticiaHTML;

        });
        loadButtons();

        //aca debemos colocar todo en el html
    } else {
        console.log('Error en la respuesta:', response.message);
    }
}

 function loadButtons() {

// Seleccionar todos los botones con la clase 'aceptar'
var botonesAceptar = document.querySelectorAll('.aceptar');
console.log("botones"+botonesAceptar);
alert("button:"+botonesAceptar.length);
// Iterar sobre los botones y agregar el event listener a cada uno
for (var i = 0; i < botonesAceptar.length; i++) {

    botonesAceptar[i].addEventListener('click', function(event) {
        var noticiaId = parseInt(event.target.getAttribute('data-id'),10);
     
        aceptarNoticia(noticiaId, "Aceptada");
    });
}
// Seleccionar todos los botones con la clase 'aceptar'
var botonesDenegar = document.querySelectorAll('.denegar');

// Iterar sobre los botones y agregar el event listener a cada uno
for (var i = 0; i < botonesDenegar.length; i++) {
    botonesDenegar[i].addEventListener('click', function(event) {
        var noticiaId = parseInt(event.target.getAttribute('data-id'),10);

        aceptarNoticia(noticiaId, "Denegada");
    });
}}

async function aceptarNoticia(noticiaId,eleccion) {
    alert(eleccion);
    // Realizar la solicitud AJAX para aceptar la noticia
    fetch('Php/resultAceptNew.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({ id: noticiaId, eleccion:eleccion })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Aquí puedes manejar el éxito, por ejemplo, eliminar la noticia de la vista
            alert('Noticia '+eleccion+" correctamente");
        } else {
            console.log('Error al aceptar la noticia'+data.error);
        }
    }   )

}




