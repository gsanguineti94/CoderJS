var cantidadHog = 0
var cantidadMint = 0
var cantidadMbl = 0
var totalHog = 0
var totalMint = 0
var totalMbl = 0
var check = "Si"

function hogaza() {
    var cantidadHog = prompt("Cuantas hogazas desea?")
    return totalHog = cantidadHog * 300
}

function mBl() {
    var cantidadMbl = prompt("Cuantos Moldes de pan blanco desea?")
    return totalMbl = cantidadMbl * 240
}

function mInt() {
    var cantidadMint = prompt("Cuantos molde de pan integral desea?")
    return totalMint = cantidadMint * 310
}
alert("Bienvenido al cotizador del Negro Holandes!")

while (check === "Si") {
    hogaza()
    mBl()
    mInt()
    var check = prompt("Si desea corregir alguna cantidad ingrese Si")
}

let total = totalHog + totalMbl + totalMint

alert("Su total es  $" + total)

alert("Muchas gracias!")