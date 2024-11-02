// 2) Lógica proposicional 
// Lógica proposicional 
p = true
q = true
// p = true
// q = false
// p = false
// q = true
// p = false
// q = false

// Mensajes para respuestas
mensajes = [
    "Resultado de no P:",
    "Resultado de no Q:",
    "Resultado de P y Q:",
    "Resultado de P o Q:",
    "Resultado de no P y no Q:",
    "Resultado de no P o Q:",
    "Resultado de P o (no P y Q):",
    "Resultado de Q y (P y no Q):",
    "Resultado de no (P y no Q):"
];

// Operaciones
equivalencias = {
    // no P
    equivale1: !p,
    // no Q
    equivale2: !q,
    // P and Q
    equivale3: p && q,
    // P or Q
    equivale4: p || q,
    // no P and no Q
    equivale5: !p && !q,
    // no P or Q
    equivale6: !p || q,
    // p or (no p and q)
    equivale7: p || ( !p && q ),
    // q and (p and no q)
    equivale8: q && ( p && !q ),
    // no (p and no q)
    equivale9: ! ( p && !q )
}

// Resultado
equivalenciasTransformadas = Object.values(equivalencias).map((equivalencia, i) =>{
    return equivalencia?1:0
})

// Imprimir resultado
console.log("Resultado para p = 0 y q = 0")
equivalenciasTransformadas.forEach((element, i) => {
    console.log(`${mensajes[i]} ${element}`)    
});

// 3) Ejercicios Prácticos:
// Pide al usuario que ingrese el año de nacimiento, el programa debera estimar que edad 
// tiene el usuario aproximadamente luego muéstralo en pantalla. (el año actual es 2024)
fecha = new Date();
anoActual = fecha.getFullYear();
pregunta = prompt("Ingresa su año de nacimiento: ")
edad = anoActual - pregunta
alert("Su edad aproximada es: "+ edad + " años")

// Solicita al usuario que ingrese su edad y verifica si es elegible para conducir un 
// auto en su país (generalmente a partir de los 16 años). Imprime un mensaje que 
// indique si es elegible o no.
edad = prompt("Ingrese su edad: ")
if(edad>=16){
    alert("Es elegible para conducir un auto")
}
else{
    alert("No es elegible para conducir un auto")
}

// del ejercicio anterior agregar una validación si la persona no esta habilitada para 
// conducir si es mayor de edad 85 años
rangoEdad = prompt("Ingrese su edad: ")
if(rangoEdad>=16 && rangoEdad<=85){
    alert("Es elegible para conducir un auto")
}
else{
    alert("No es elegible para conducir un auto")
}

// Reto: Ejercicio: Cajero Automático
// Descripción: En este ejercicio, vas a implementar un programa en JavaScript que simule
// el funcionamiento básico de un cajero automático.

// Objetivo: El programa debe solicitar al usuario la cantidad de dinero que desea retirar.

// Condiciones:
// El cajero debe entregar la menor cantidad de billetes posible.
// Las denominaciones de billetes disponibles en el cajero son:
// 100 mil
// 50 mil
// 20 mil
// 10 mil

// Salida esperada:
// Imprime en la consola cuántos billetes de cada denominación se necesitan para entregar
// el monto solicitado por el usuario.

// Ejemplo de funcionamiento:
// Si el usuario ingresa 280,000, el programa debería imprimir en consola:
// Copiar código
// Billetes de 100,000: 2
// Billetes de 50,000: 1
// Billetes de 20,000: 1
// Billetes de 10,000: 1
entero = Math.floor
retirar = prompt("Ingrese la cantidad de dinero a retirar, mínimo $10000: ")
if(retirar>=10000){
    cienMil = entero( retirar / 100000 )
    sinCienMil = retirar - ( cienMil * 100000 )
    cincuentaMil = entero ( sinCienMil / 50000 )
    sinCincuentaMil = sinCienMil - ( cincuentaMil * 50000 )
    veinteMil = entero ( sinCincuentaMil / 20000 )
    sinVeinteMil = sinCincuentaMil - ( veinteMil * 20000 )
    diezMil = entero ( sinVeinteMil / 10000)
    saldo = sinVeinteMil - ( diezMil * 10000)    
}
else{
    alert("La cantidad mínima a retirar son $10000, lo invitamos a iniciar de nuevo.")
}
console.log("Billetes de 100,000: ", cienMil)
console.log("Billetes de 50,000: ", cincuentaMil)
console.log("Billetes de 20,000: ", veinteMil)
console.log("Billetes de 10,000: ", diezMil)
console.log("El siguiente saldo no se puede entregar, por tanto será regresado a su cuenta: ", saldo)