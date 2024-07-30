
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
                <button type="submit">Aceptar </button>
                <button type="submit">Denegar </button>
            </div>`;

            console.log(element);
            noticiasContainer.innerHTML += noticiaHTML;


        });

        //aca debemos colocar todo en el html
    } else {
        console.log('Error en la respuesta:', response.message);
    }
}





