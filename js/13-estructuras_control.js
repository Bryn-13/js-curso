// const puntaje = 1000;

// if (puntaje !== 1000) {
//     console.log("No es igual")
// } else {
//     console.log("Sí, el puntaje es 1000")
// }

// !== Diferente a
// == 
// === revisa valor y tipo de dato

// const efectivo = 800;
// const carrito = 800;

// if(efectivo >= carrito) {
//     console.log("El usuario puede pagar")
// } else {
//     console.log("Fondos insuficientes")
// }


// const rol = "ADMINISTRADOR";

// if(rol === "ADMINISTRADOR") {
//     console.log("Acceso a todo el sistema");
// } else if (rol === "EDITOR") {
//     console.log("Eres editor")
// } else {
//     console.log("No tienes acceso")
// }

// -- ** SWITCH ** --

const metodoPago = "efectivo";

switch(metodoPago) {
    case "tarjeta":
        console.log("Pagaste con tarjeta");
        break;
    case "cheque":
        console.log("Has decidido pagar con cheque. Revisando fondos..");
        break;
    case "efectivo":
        console.log("Pagaste con efectivo");
        break;
    default:
        console.log("Aún no has pagado")
        break;

}