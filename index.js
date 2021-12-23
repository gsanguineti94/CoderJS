let cantidadHog = prompt("Ingrese la cantidad de Hogazas que desea")
let cantidadMint = prompt("Ingrese la cantidad de Panes de molde integrales que desea")
let cantidadMbl = prompt("Ingrese la cantidad de Panes de molde blancos que desea")

let totalHog = cantidadHog * 300
let totalMint = cantidadMint * 310
let totalMbl = cantidadMbl * 240

let total = totalHog + totalMint + totalMbl

alert("Su total es " + total + " " + "pesos")

alert("Muchas gracias!")
location.reload()