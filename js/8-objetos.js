"use strict" // Correr JS en modo estricto

// Objetos

// const nombreProducto = "Monitor 20 Pulgadas";
// const precio = 300;
// const disponible = true;

// const producto = {
//     nombreProducto : "Monitor 20 Pulgadas",
//     precio : 300,
//     disponible : true,
// }

// console.log(producto.precio)
// console.log(producto.nombreProducto)
// console.log(producto.disponible)


// console.log(producto["precio"]) // Menos utilizado

// ** -- Agregar elementos de objeto -- **

// producto.imagen = "imagen.jpg"

// console.log(producto)

// ** -- Eliminar elementos de objeto -- **

// delete producto.disponible

// console.log(producto)

// const producto = {
//     nombreProducto : "Monitor 20 Pulgadas",
//     precio : 300,
//     disponible : true,
// }

// Forma anterior 
// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


// Destructuring

// const {precio, nombreProducto} = producto;

// console.log(nombreProducto)
// console.log(precio)

// const producto = {
//     nombreProducto : "Monitor 20 Pulgadas",
//     precio : 300,
//     disponible : true,
// }

// Object.freeze(producto); // No permite agregar, eliminar o cambiar valor
// producto.imagen = "imagen.jpg"

// console.log(Object.isFrozen(producto));

// Object.isSealed(producto); // No permite eliminar ni agregar, pero permite modificar
// producto.imagen = "imagen.jpg"

// console.log(Object.isSealed(producto));

// console.log(producto);



// ** -- Unir Objetos ** --


// const producto = {
//     nombreProducto : "Monitor 20 Pulgadas",
//     precio : 300,
//     disponible : true,
// }

// const medidas = {
//     peso: "1kg",
//     medida: "1m",
// }

// const nuevoProducto = { ...producto, ...medidas }

// console.log(producto);
// console.log(nuevoProducto);