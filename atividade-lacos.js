// Contar quantos numeros pares e impares tem entre 0 e 100

let numeroPares = 0
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
console.log('A quantidade de numero impares: ', numeroImpares)



let temperatura = 0
let Fahrenheit = 0

for (let celsius = 0; celsius <= 100; celsius = celsius + 10) {
    Fahrenheit = celsius * 9 / 5 + 32
    temperatura = Fahrenheit

    console.log(celsius, '°C = ', Fahrenheit, '°F')
}


let numero = 5
let fatorial = 1
let contador = 1

//Maneira Com For

for (contador = 1; contador <= numero; contador++) {
    fatorial = fatorial * contador
}
console.log('O fatorial de ', numero, 'é ', fatorial)

//Maneira com o While

while (contador <= numero) {
    fatorial = fatorial * contador
    contador++
}
console.log('O fatorial de ', numero, 'é ', fatorial)

let a = 0
let b = 1
let soma = a + b


console.log(a)
console.log(b)
for (contador = 1; contador <= 15; contador++) {
    soma = a + b
    a = b
    b = soma
    console.log(soma)
}

let numero = 2222
let texto = numero.toString()
let soma = 0

for (contador = 0; contador < texto.length; contador++) {
    soma = soma + Number(texto[contador])
}
console.log(soma)

let escada = '*'
let soma
let altura = 5

for (contador = 0; contador <= altura; contador++) {
    console.log(escada)
    soma = escada + '*'
    escada = soma
}


