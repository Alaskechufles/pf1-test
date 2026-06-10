/* let lugares = document.querySelector("#lugares")

async function traerDatos() {
    try {
        let response = await fetch("/stays.json")
        let data = await response.json()
        return data
    } catch (error) {
        console.error("ups", error)
    }
}

let datosLugares = await traerDatos()

console.log(datosLugares)

for (let i = 0; i < datosLugares.length; i++) {
    const element = datosLugares[i];
    lugares.innerHTML += `
    <img src=${element.photo} alt="" width="400">
    `
} */

let ocultar = document.querySelector("#ocultar")
let mostrar = document.querySelector("#mostrar")
let menu = document.querySelector("#menu")

ocultar.addEventListener("click", () => {
    menu.classList.add("hidden")
    /* menu.classList.remove("top-0")
    menu.classList.add("-top-30") */
})

mostrar.addEventListener("click", () => {
    menu.classList.remove("hidden")
    /* menu.classList.remove("-top-30")
    menu.classList.add("top-0") */
})

/* let input1 = document.querySelector("#input1")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")

input1.value = 0

btn1.addEventListener("click", () => {
    if (input1.value >= 1) {
        input1.value--
    }
    console.log(input1.value)
})
btn2.addEventListener("click", () => {
    input1.value++
    console.log(input1.value)
})
btn3.addEventListener("click", () => {
    if (input1.value >= 1) {
        input1.value--
    }
    console.log(input1.value)
})
btn4.addEventListener("click", () => {
    input1.value++
    console.log(input1.value)
}) */

/* import { stays } from "./stays.js";
import { sumar } from "./utils.js";

console.log(stays)
console.log(sumar(12, 23)) */

async function traerImgs(params) {
    try {
        let response = await fetch("/stays.json")
        let data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

let datos = await traerImgs()
console.log(datos)

let divImagenes = document.querySelector("#imagenes")

console.log(divImagenes)

divImagenes.innerHTML = `
    <img src=${datos[0].photo} alt="imagen">
    <img src=${datos[1].photo} alt="imagen">
    <img src=${datos[2].photo} alt="imagen">
    <img src=${datos[3].photo} alt="imagen">
`
let divIcono = document.querySelector("#icono")

console.log(divIcono)

divIcono.innerHTML = `
    <img src="/favicon.svg" alt="imagen">
`