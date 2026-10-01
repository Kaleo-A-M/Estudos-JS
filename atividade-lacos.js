// Contar quantos numeros pares e impares tem entre 0 e 100

/* let numeroPares = 0
let numeroImpares = 0

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 2 == 0) {
        numeroPares++
    }
    else {
        numeroImpares++
    }
}
    console.log('A quantidade de numero pares: ', numeroPares)
    console.log('A quantidade de numero impares: ', numeroImpares) */



/* let temperatura = 0
let Fahrenheit = 0

for (let celsius = 0; celsius <= 100; celsius = celsius + 10) {
    Fahrenheit = celsius * 9 / 5 + 32
    temperatura = Fahrenheit

    console.log(celsius, '°C = ', Fahrenheit, '°F')
}
 */


let numero = 5
let fatorial = 0

for (let contador = numero; contador >= 1; contador--) {
    fatorial = numero * (numero - contador)
    console.log(fatorial)
}
console.log(fatorial)