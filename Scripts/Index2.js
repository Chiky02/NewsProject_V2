
var continer = document.getElementById("noticias");

onload = async function ajax() {


    let response = await fetch('Php/retornoNew.php', {
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

        if (result.length == 0) {
            const noticiaHTML = `
            <div class="noticia">
            <h2>No hay noticias Disponibles en este momento</h2>
         
            </div>`;
            noticiasContainer.innerHTML += noticiaHTML;
        }
        else {

            result.forEach(element => {
                const noticiaHTML = `
            <div class="noticia">
            <h2>${element.title}</h2>
            ${element.content}
                <h4>${element.dateAcepted}</h4>
            </div>`;
                console.log(element);
                noticiasContainer.innerHTML += noticiaHTML;


            });
        }

        //aca debemos colocar todo en el html
    } else {
        console.log('Error en la respuesta:', response.message);
    }
}





