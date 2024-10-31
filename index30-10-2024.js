// Igualdad
8 == 8 // true
8 != 9 // true
8 != 8 // false

// Mayor o menor
5 > 3 // true
5 > 5 // false
5 >= 5 // true
15 > 5 // true
15 > 115 // false

6 < 12 // true
16 < 12 // false
16 <= 16 // true

// Negaciones
!false //true
!true //false

true && false // false
true || false //true


// Ejercicio:
// 1. crea un programa que retorne la opreacion contraria a la que ingrese el usuario
// ejemplo:
// si el usuario ingresa "true" el programa debe imprimir false
// si el usuario ingresa "false" el programa debe imprimir true
contrario = prompt("Dame una de estas opciones: true o false: ")
transformado = contrario ==="true"
console.log(`El contrario de ${contrario} es: ${!transformado}`)
// 2. Crea un progrma en Js que le solicite al usuario la edad
// - el programa debe validar si la persona es mayor de edad o no
edad = prompt("Ingresa tu edad: ")
if(edad>=18){
    alert("Es mayor de edad")
}
else{
    alert("Es menor de edad")   
}

// 3. evalua la siguiente expresion de logica:
// P = true
// Q = False

// a que equivale
// - (p o no q)
p = true
q = false
equivale1 = p || !q
console.log("p o no q: ", equivale1)
// - (no p o no (q y p))
equivale2= !true || !(false && true)
console.log("(no p o no (q y p)): ", equivale2)

// Crear un programa en JavaScript que permita al usuario ingresar datos utilizando la función prompt().

// · Comparar dos números y determinar si son iguales.
alert("Comparar dos números y determinar si son iguales.")
numero1 = prompt("Ingrese un numero: ")
numero2 = prompt("Ingrese otro numero: ")
if(numero1 == numero2){
    alert("Los números son iguales")
}
else{
    alert("Los números son diferentes")
}

// · Identificar cuál de dos números es el mayor.
alert("Identificar cuál de dos números es el mayor.")
numero3 = prompt("Ingrese un numero: ")
numero4 = prompt("Ingrese otro numero: ")
if(numero3 > numero4){
    alert("El número mayor es: "+ numero3)
}
else{
    if(numero4 > numero3){
        alert("El número mayor es: "+ numero4)
    }
    else{
        alert("Los números son iguales")
    }
}

// · Decide si un número es par o impar.
alert("Decide si un número es par o impar.")
numero5 = prompt("Ingrese un numero: ")
if(numero5%2 == 0){
    alert("El numero es par")
}
else{
    alert("El numero es impar")
}

// · Clasificador de triángulos: Clasifica triángulos según sus lados.
alert("Clasificador de triángulos: Clasifica triángulos según sus lados.")
lado1 = prompt("Ingrese medida del lado 1: ")
lado2 = prompt("Ingrese medida del lado 2: ")
lado3 = prompt("Ingrese medida del lado 3: ")
if(lado1==lado2==lado3){
    alert("Es un triángulo Equilátero")
}
else{
    if((lado1==lado2)||(lado2==lado3)||(lado3==lado1)){
        alert("Es un triángulo Isósceles")
    }
    else{
        alert("Es un triángulo Escaleno")
    }
}

// · Edad de jubilación: Determina si una persona puede jubilarse.
alert("Edad de jubilación: Determina si una persona puede jubilarse.")
sexo = prompt("Ingrese su sexo: 1. Masculino o 2. Femenino")
edad = prompt("Ingrese su edad: ")
if(((sexo==1)&&(edad>=62))||((sexo==2)&&(edad>=57))){
    alert("Tienes edad para jubilarte")
}
else{
    alert("No tienes edad para jubilarte")
}

// · Día laboral: Determina si es día laboral o fin de semana.
alert("Día laboral: Determina si es día laboral o fin de semana.")
dia = prompt("Ingrese un día de la semana").toLowerCase()
laborales = {
    "lunes": true,
    "martes": true,
    "miercoles": true,
    "jueves": true,
    "viernes": true,
    "sabado": false,
    "domingo": false
}
if(dia in laborales){
    if(laborales[dia]){
        alert("Día laboral")
    }    
    else{
        alert("No día laboral")
    }
}
else{
    alert("Día ingresado no válido")
}
