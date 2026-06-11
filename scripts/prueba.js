let prueba = [
    {
        nombre: "Matematica",
        duracion: 4
    },
    {
        nombre: "Lengua",
        duracion: 3
    },
    {
        nombre: "Ingles",
        duracion: 2
    },
    {
        nombre: "Ciencias",
        duracion: 4
    },
    {
        nombre: "Arte",
        duracion: 2
    },
    {
        nombre: "Arte",
        duracion: 2
    }
]

let cursosLista = document.querySelector("#cursos")
let input = document.querySelector("#input")

let lista = ""

input.addEventListener("input", filtro)



function filtro() {

    let capturarInput = input.value.toLowerCase()
    let filtrados = prueba

    filtrados = filtrados.filter(curso => curso.nombre.toLowerCase().includes(capturarInput))

    lista = ""

    let fitradoSinDuplicados = filtrados.filter((valor, indice, self) => self.findIndex(item => item.nombre === valor.nombre) === indice);

    console.log(fitradoSinDuplicados)

    crearOpciones(fitradoSinDuplicados)

    let listaBotones = document.querySelectorAll(".botoncito")

    listaBotones.forEach(boton => {
        boton.addEventListener('click', cambiarInput);
    });

}

function crearOpciones(array) {
    for (let i = 0; i < array.length; i++) {
        lista += `
                <button class="botoncito" value="${array[i].nombre}"> ${array[i].nombre}</button>
            `
    }
    cursosLista.innerHTML = lista
}

function cambiarInput(e) {
    let valor = e.target.value
    console.log(e.target.value)
    input.value = valor
}

