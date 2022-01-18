class Producto{
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

for (let Producto of arrayProductos){
    let titulo = document.createElement("header")
    titulo.innerHTML = "<h1>Negro Holandes | Casa de Pan</h1><br><h2>Producimos lo que vendemos</h2>"
    document.body.appendChild(titulo)
}

for (let Producto of arrayProductos){
    let productos = document.createElement("div")
    productos.innerHTML = "<h3>Producto: ${producto.nombre}</h3><h3>Precio: ${producto.precio}</h3>"
    document.body.appendChild(productos)
}

for (let Producto of arrayProductos){
    let detalle = document.createElement("div")
    detalle.innerHTML = "<h3>Contiene masa madre: ${Producto.masaMadre}</h3><h3>Cantidad: ${Producto.cantidad}</h3>"
    document.body.appendChild(detalle)
}