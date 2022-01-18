class Producto {
    constructor(nombre, precio, masaMadre, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.masaMadre = masaMadre;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}
let arrayProductos = [];

do {
    var comprobacion = prompt("Ingresar el nombre del producto o fin para no agregar mas.").toUpperCase();
    if (comprobacion === "FIN" || comprobacion === "F") {
    break;
    }
    else {
        let nombreP = comprobacion;
        let precioP = prompt("Ingresar precio del producto");
        var masaMadreP = prompt("El producto contiene masa madre?");
        let cantidadP = prompt("Cantidad del producto comprada");
        arrayProductos.push(new Producto(nombreP, precioP, masaMadreP, cantidadP));
        }
}
while (comprobacion != "FIN" || comprobacion != "F");

console.log(arrayProductos)