// Objetos

// const nombreProducto = "Monitor 20 Pulgadas";
// const precio = 300;
// const disponible = true;

const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,
}

// console.log(producto.precio)
// console.log(producto.nombreProducto)
// console.log(producto.disponible)


// console.log(producto["precio"]) // Menos utilizado

// ** -- Agregar elementos de objeto -- **

producto.imagen = "imagen.jpg"

console.log(producto)

// ** -- Eliminar elementos de objeto -- **

delete producto.disponible

console.log(producto)


