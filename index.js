const Producto1 = new Producto("Pan de molde integral", 950, 340, "No")
const Producto2 = new Producto("Pan de molde blanco", 950, 265, "No")
const Producto3 = new Producto("Hogaza", 750, 330, "Si")
const Producto4 = new Producto("Hogaza integral", 800, 375, "Si")
const Producto5 = new Producto("Barra rustica", 400, 140, "Si")

var check = "Si"

function mInt(){
    let CantidadMint = prompt("Ingrese la cantidad de " + Producto1.nombre + " que desea. " + "Peso por unidad = " + Producto1.peso + "gr. " + "Precio por unidad $" + Producto1.precio + ". Contiene madre? " + Producto1.masamadre)
    return TotalMint = CantidadMint * Producto1.precio
}

function mBl(){
    let CantidadMbl = prompt("Ingrese la cantidad de " + Producto2.nombre + " que desea. " + "Peso por unidad = " + Producto2.peso + "gr. " + "Precio por unidad $" + Producto2.precio + ". Contiene madre? " + Producto2.masamadre)
    return TotalMbl = CantidadMbl * Producto2.precio
}

function hog(){
    let CantidadHog = prompt("Ingrese la cantidad de " + Producto3.nombre + " que desea. " + "Peso por unidad = " + Producto3.peso + "gr. " + "Precio por unidad $" + Producto3.precio + ". Contiene madre? " + Producto3.masamadre)
    return TotalHog = CantidadHog * Producto3.precio
}

function hogInt(){
    let CantidadHogInt = prompt("Ingrese la cantidad de " + Producto4.nombre + " que desea. " + "Peso por unidad = " + Producto4.peso + "gr. " + "Precio por unidad $" + Producto4.precio + ". Contiene madre? " + Producto4.masamadre)
    return TotalHogInt = CantidadHogInt * Producto4.precio
}

function barra(){
    let CantidadBarra = prompt("Ingrese la cantidad de " + Producto5.nombre + " que desea. " + "Peso por unidad = " + Producto5.peso + "gr. " + "Precio por unidad $" + Producto5.precio + ". Contiene madre? " + Producto5.masamadre)
    return TotalBarra = CantidadBarra * Producto5.precio
}

function cotizar(){
    alert("Bienvenido al cotizador del Negro Holandés!")
    mInt()
    mBl()
    hog()
    hogInt()
    barra()

    let total = TotalHog + TotalMbl + TotalMint + TotalHogInt + TotalBarra

    alert("Su total es $" + total)

    alert("Muchas gracias!")
}