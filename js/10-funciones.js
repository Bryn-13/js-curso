// FUNCIONES

// Serie de procedimientos o instrucciones que realizan una acción

// Declaración de función

function sumar() {
    console.log(10 + 10);
}

sumar();

//Expresión de la función

const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();

// IIFE
(function() {
   console.log("Esto es una función")
})(); // Previene que no se puedan leer de otros archivos


// -- ** HOISTING ** --

sumar();
function sumar() {
    console.log(10 + 10);
} // Funciona, el hoisting primero reconoce la variable
// y en la segunda lectura la llama


sumar2();
const sumar2 = function() {
    console.log(3 + 3);
} // No funciona. El hoisting toma la función como variable, 
// y en la segunda lectura no encuentra la función a la que llamar