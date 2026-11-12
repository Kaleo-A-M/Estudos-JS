/* METODO FILTER | Onde filtra o Array e cria um outro com os valores filtrados */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 === 1
})
console.log('Numero normais: ', numeros)
console.log('Numero Pares: ', numerosPares)
console.log('Numero Impares: ', numerosImpares)

/* METODO MAP | onde todos os valores são mapeados */

const numeroDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('Numeros dobrados:', numeroDobrados)