let imagenes = [
    {
        "url": "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
        "nombre": "Proyecto 01",
        "descripcion": "El carrusel fué añadido"
    },
    {
        "url": "https://i.pinimg.com/originals/7c/2f/4b/7c2f4bfbaa411a9ef5b45bd0b4214fba.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "El carrusel fué añadido"
    },
    {
        "url": "https://i.blogs.es/0ca9a6/aa/1366_2000.jpeg",
        "nombre": "Proyecto 03",
        "descripcion": "El carrusel fué añadido"
    }, {
        "url": "https://e0.pxfuel.com/wallpapers/976/989/desktop-wallpaper-1280-x-720.jpg",
        "nombre": "El carrusel fué añadido El carrusel fué añadido El carrusel fué añadido El carrusel fué añadido ",
        "descripcion": "El carrusel fué añadido"
    }, {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGcKDNporYglmWAEtJ-7SXvopoO2b7-IOthw&s",
        "nombre": "Proyecto 03",
        "descripcion": "El carrusel fué añadido"
    }
    //  Noticias acá aquí respecto al codigo php de conexion
];


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;

posicionCarrusel()

atras.addEventListener('click', function () {
    actual -= 1

    if (actual == -1) {
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <p>${imagenes[actual].nombre}</p>`
    //<p>${imagenes[actual].descripcion}</p>

    posicionCarrusel();
});


const cambiarNoticiaAuto = () => {
    actual++;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    posicionCarrusel();
};

setInterval(siguienteNoticia, 10000);



adelante.addEventListener('click', siguienteNoticia);


function siguienteNoticia() {
    actual += 1;

    if (actual == imagenes.length) {
        actual = 0;
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <p>${imagenes[actual].nombre}</p>`
    //<p>${imagenes[actual].descripcion}</p>
    posicionCarrusel()
}

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else {
            puntos.innerHTML += '<p>.<p>'
        }
    }
}