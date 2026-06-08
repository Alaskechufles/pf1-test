let lugares = document.querySelector("#lugares")

async function traerDatos() {
    try {
        let response = await fetch("./stays.json")
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
}
