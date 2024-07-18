const listaPatrocinadores = [
    {
        nombre: "Mira esto",
        imagen: "https://cdn.forbes.co/2020/07/Claro-1280x720-1.jpg"
    },
    {
        nombre: "Claro",
        imagen: "https://cdn.forbes.co/2020/07/Claro-1280x720-1.jpg"
    },
    {
        nombre: "Movistar",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDWv5bLOfowaeA-VE6jGQ9rzWNAw5d8ieLBg6I0E0mw&s"
    }
    //  patrocinadores aquí respecto al codigo php de conexion
];

let indiceActual = 0;
let intervaloCambio = 5000; // Tiempo en milisegundos entre cambios de patrocinador

const imagenPatrocinador = document.querySelector(".patrocinador-actual img");
const nombrePatrocinador = document.querySelector(".nombre-patrocinador");

const mostrarPatrocinador = () => {
    const patrocinador = listaPatrocinadores[indiceActual];
    imagenPatrocinador.src = patrocinador.imagen;
   // nombrePatrocinador.textContent = patrocinador.nombre;
};

mostrarPatrocinador();

const cambiarPatrocinadorAuto = () => {
    indiceActual++;
    if (indiceActual >= listaPatrocinadores.length) {
        indiceActual = 0;
    }
    mostrarPatrocinador();
};

setInterval(cambiarPatrocinadorAuto, intervaloCambio);
