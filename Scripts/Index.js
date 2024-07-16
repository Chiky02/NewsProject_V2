
var continer=document.getElementById("noticias");
onload=function ajax() {

    alert("HERE WE GO AGAIN");
        $.ajax({
            // la URL para la petición
            url: 'Php/retorno.php',
    
            // la información a enviar
    
            data: {  },
           
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
      
             
    
                    if ( json.length==0) {
                        alert("No se ha encontrado informacion en la base de datos" );
                    }
                    
                    else{
               
                        const noticiasContainer = document.getElementById('noticias');
console.log(json)
                        json.forEach(json => {
                           /* const noticiaHTML =   `
                            <div class="noticia">
                            <h2>${json}</h2>
                           `;
                           
                           /*
                            `
                                <div class="noticia">
                                <h2>${noticia.title}</h2>
                                    <img src="${noticia.imagen}" alt="${noticia.titulo}">
                                 
                                    <p>${noticia.cuerpo}</p>
                                    <h4>${new Date(noticia.Fecha.seconds * 1000).toLocaleString('es-CO')}</h4>
                                </div>
                            `;*/
                            noticiasContainer.innerHTML += json;
                    
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
    
    
    
    