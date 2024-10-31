// alert("Hola mundo con alert")
// nombre= prompt("Ingresa tu nombree: ")
// // textoSalida = "Hola " + nombre
// textoSalida = `Hola ${nombre}, buenas noches`
// // alert(textoSalida)
// console.log(textoSalida)
// console.log("sumar 56 mas 89")
// suma = 56+89
// console.log(`La suma es ${suma}`)

// console.log("adicionar 55 a 31")
// adicion = 55+31
// console.log(`La adición es ${adicion}`)

// console.log("agregar 11 a 12")
// agregar = 11+12
// console.log(`Al agregar optenemos ${agregar}`)

// console.log("restar 1587 menos 258")
// restar = 1587-258
// console.log(`Al restar obtenemos ${restar}`)

// console.log("disminur 111 a 8888")
// disminuir = 8888-111
// console.log(`Al disminuir obtenemos ${disminuir}`)

// console.log("quitar 8 a 65")
// quitar = 65-8
// console.log(`AL quitar obtenemos ${quitar}`)

// console.log("multiplicar 8 por 53")
// multiplicar = 8*53
// console.log(`Al multiplicar obtenemos ${multiplicar}`)

// console.log("dividir 81 en 3")
// dividir = 81/3
// console.log(`Al dividir obtenemos ${dividir}`)

// console.log("dividir 95 en 3 (con decimales)")
// dividirDecimal = 95/3
// console.log(`Al dividir obtenemos con decimal ${dividirDecimal}`)

// console.log("dividir 95 en 3 (sin decimales, es decir solo la parte entera)")
// dividirSinDecimal = parseInt(95/3)
// console.log(`Al dividir obtenemos sin decimal ${dividirSinDecimal}`)

// console.log("el modulo de 95 en 3")
// modulo = 95%3
// console.log(`El modulo es ${modulo}`)

// console.log("potenciar 5 veces 6")
// potenciar = 6**5
// console.log(`La potencia es ${potenciar}`)

// console.log("cual es el cuadrado de 12")
// cuadrado = 12**2
// console.log(`El cuadrado es ${cuadrado}`)

// empleados = prompt("¿Cuántos empleados calculará?")
// textoPreliminar = ""
// for (var i = 0; i < empleados; i++) {
//     tipoCalculo = prompt("Para calcular solo por horas escriba 1. Para calcular por horas por semanas escriba 2. Para calcular por horas por días escriba 3. Para salir marque otro número.")
//     if (tipoCalculo == 1) {
//         nombre = prompt("Ingresa nombre empleado: ")
//         horas = prompt("Ingresa número de horas laboradas: ")
//         valorHora = prompt("Ingresa valor de 1 hora laborada: ")
//         total = horas * valorHora
//         textoPreliminar = `${nombre} trabajó ${horas} horas, a ${valorHora} COP. Por tanto se le paga ${total}`
//         alert(textoPreliminar)
//     }
//     else {
//         if (tipoCalculo == 2) {
//             nombre = prompt("Ingresa nombre empleado: ")
//             horas = prompt("Ingresa número de horas laboradas: ")
//             semanas = prompt("Ingresa número de semanas laboradas: ")
//             valorHora = prompt("Ingresa valor de 1 hora laborada: ")
//             total = horas * semanas * valorHora
//             textoPreliminar = `${nombre} trabajó ${horas} horas a la semana, durante ${semanas} semanas, a ${valorHora} COP. Por tanto se le paga ${total}`
//             alert(textoPreliminar)
//         }
//         else {
//             if (tipoCalculo == 3) {
//                 nombre = prompt("Ingresa nombre empleado: ")
//                 horas = prompt("Ingresa número de horas laboradas: ")
//                 dias = prompt("Ingresa número de dias laborados: ")
//                 valorHora = prompt("Ingresa valor de 1 hora laborada: ")
//                 total = horas * dias * valorHora
//                 textoPreliminar = `${nombre} trabajó ${horas} horas, durante ${dias} días, a ${valorHora} COP. Por tanto se le paga ${total}`
//                 alert(textoPreliminar)
//             }
//             else {
//                 alert("Hasta la próxima")
//             }
//         }
//     }   
// }
personas = prompt("Número de personas que compartirán: ")
pizzaPequena = prompt("Diámetro pizza pequeña en cm: ")
cantidadPizzaPequena = prompt("¿Cuántas pizzas pequeñas?")
areaPizzaPequena = cantidadPizzaPequena * Math.PI * (pizzaPequena / 2) ** 2
alert(`Area total pizza pequeña ${areaPizzaPequena} cm2`)
pizzaMediana = prompt("Diámetro pizza mediana en cm: ")
cantidadPizzaMediana = prompt("¿Cuántas pizzas medianas?")
areaPizzaMediana = cantidadPizzaMediana * Math.PI * (pizzaMediana / 2) ** 2
alert(`Area total pizza mediana ${areaPizzaMediana} cm2`)
pizzaGrande = prompt("Diámetro pizza grande en cm: ")
cantidadPizzaGrande = prompt("¿Cuántas pizzas grandes?")
areaPizzaGrande = cantidadPizzaGrande * Math.PI * (pizzaGrande / 2) ** 2
alert(`Area total pizza grande ${areaPizzaGrande} cm2`)
mayorCantidad = Math.max(areaPizzaPequena, areaPizzaMediana, areaPizzaGrande)
alert(`En resumen de áreas, Pizza pequeña es ${areaPizzaPequena} cm2, Pizza mediana es ${areaPizzaMediana} cm2 y Pizza grande es ${areaPizzaGrande} cm2.`)
switch(mayorCantidad){
    case(areaPizzaPequena):
    alert("Por tanto, las pizzas pequeñas dan más área");
    break;
    case(areaPizzaMediana):
    alert("Por tanto, las pizzas medianas dan más área");
    break;
    case(areaPizzaGrande):
    alert("Por tanto, las pizzas grandes dan más área");
    break;
    default:
        alert("inicia nuevamente");
}