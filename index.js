var cantidadHog = 0
var cantidadMint = 0
var cantidadMbl = 0
var totalHog = 0
var totalMint = 0
var totalMbl = 0
let precioHog = 300
let precioMint = 310
let precioMbl = 240

function ingreso() {
    var cantidadHog = prompt("Cuantas hogazas desea?")
    var cantidadMint = prompt("Cuantos panes de molde integral desea?")
    var cantidadMbl = prompt("Cuantas panes de molde blancos desea?")
}

function totales() {
    let totalHog = cantidadHog * precioHog
    let totalMint = cantidadMint * precioMint
    let totalMbl = cantidadMbl * precioMbls
}

alert("Bienvenido al cotizador del Negro Holandes!")

ingreso()

totales()

let total = totalHog + totalMint + totalMbl

alert("Su total es " + total + " " + "pesos")

alert("Muchas gracias!")
location.reload()