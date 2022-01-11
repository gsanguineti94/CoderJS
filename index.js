class Producto{
    constructor(nombre, peso, precio, masamadre){
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
    this.masamadre = masamadre;
    }
}

const Producto1 = new Producto("Pan de molde integral", 950, 340, "No")
const Producto2 = new Producto("Pan de molde blanco", 950, 265, "No")
const Producto3 = new Producto("Hogaza", 750, 330, "Si")
const Producto4 = new Producto("Hogaza integral", 800, 375, "Si")
const Producto5 = new Producto("Barra rustica", 400, 140, "Si")

let CantidadMint = prompt("Ingrese la cantidad de " + Producto1.nombre + " que desea. " + "Peso por unidad = " + Producto1.peso + "gr. " + "Precio por unidad $" + Producto1.precio + ". Contiene madre? " + Producto1.masamadre)