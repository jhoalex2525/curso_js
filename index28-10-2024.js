// // EJERCICIO CINE
// ctePi = Math.PI;
// cilindro = ctePi * (8 / 2) ** 2 * 15;
// texto = "El volúmen de empaque con forma"
// console.log(`${texto} cilíndrica es: ${cilindro} cm3`);
// rectangular = 12 * 8 * 10;
// console.log(`${texto} rectangular es: ${rectangular} cm3`);
// cono = (1 / 3) * ctePi * 6 ** 2 * 12;
// console.log(`${texto} de cono es: ${cono} cm3`);

// mayorCantidad = Math.max(cilindro, rectangular, cono);
// menorCantidad = Math.min(cilindro, rectangular, cono);
// switch (mayorCantidad) {
//     case cilindro:
//         console.log("El de forma de cilindro te dará más cantidad");
//         break;
//     case rectangular:
//         console.log("El de forma rectangular te dará más cantidad");
//         break;
//     case cono:
//         console.log("El de forma de cono te dará más cantidad");
//         break;
//     default:
//         console.log("Vuelve pronto");
// }
// switch (menorCantidad) {
//     case cilindro:
//         console.log("El de forma de cilindro te dará menor cantidad");
//         break;
//     case rectangular:
//         console.log("El de forma rectangular te dará menor cantidad");
//         break;
//     case cono:
//         console.log("El de forma de cono te dará menor cantidad");
//         break;
//     default:
//         console.log("Vuelve pronto");
// }
// if (cilindro !== mayorCantidad && cilindro !== menorCantidad) {
//     console.log("El de forma de cilindro tiene una cantidad intermedia");
// } else if (rectangular !== mayorCantidad && rectangular !== menorCantidad) {
//     console.log("El de forma rectangular tiene una cantidad intermedia");
// } else {
//     console.log("El de forma de cono tiene una cantidad intermedia");
// }

// // EJERCICIO DEFINIR OBJETO PERSONA
// // 1) Definir un objeto persona con datos de ustedes  mismos. 
// // este objeto debe tener los atributos de nombre, apellido, edad, idiomas que hablan, y 3 atributos mas

// persona = {nombres: "Jhonatan Alexis",
//     apellidos: "Ossa Osorio",
//     edad: 35,
//     idiomas: ["Español","Ingles"],
//     pasatiempos: "Cantar en coro, videojuegos y viajar",
//     numeroPaisesVisitados: 8,
//     estatura: 180
// }
// console.log(persona)

// // 2) Definir un ingreso de datos, almacenando el data ingresado en una variable y presentarlo en la consola
// respuesta = prompt("Ingresa qué día de la semana es mañana: ")
// console.log("Mañana es: ", respuesta)

// // 3) crear un programa que solicite al usuario la edad y responda en que año aproximadamente nacio
// const fecha = new Date();
// const anoActual = fecha.getFullYear();
// pregunta = prompt("Ingresa tu edad: ")
// nacimiento = anoActual-pregunta
// console.log("Nació probablemente en: ", nacimiento)