// Arrow functions

const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = tecnología => console.log(`Aprendiendo ${tecnología}`);
// Se puede eliminar paréntesis sólo si hay un parámetro
// SI hay dos o más, debe llevar paréntesis

aprendiendo("JavaScript");





const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    {nombre: "Monitor HD", precio: 500},
    {nombre: "Televisor 50\"", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audífonos", precio: 200},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 500},
    {nombre: "Bocinas", precio: 300},
    {nombre: "Laptop", precio: 800},
];

// forEach

meses.forEach( mes => {
    if(mes == "Marzo") {
        console.log("Marzo sí existe")
    }

}
);

// Some ideal para arreglo de objetos

resultado = carrito.some(producto => producto.nombre === "Celular "); // Arrow function

console.log(resultado);

// Reduce

resultado = carrito.reduce( (total, producto) => {
    return total + producto.precio
}, 0);

console.log(resultado);

// Filter

resultado = carrito.filter(producto => producto.precio > 400);
console.log(resultado);

resultado = carrito.filter(producto => producto.nombre === "Celular");
console.log(resultado);