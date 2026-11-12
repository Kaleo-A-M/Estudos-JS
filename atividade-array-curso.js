/* atividade do Curso alura */
/* Lista de nomes */

let nomes = ['kaleo', 'larissa', 'gustavo', 'agnes', 'maria']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log('Antes da mudança!')

nomes.push('Ton Ton')

console.log(nomes)

console.log('Depois da mudança!')

nomes.shift(0, 1)

console.log(nomes)

console.log('Depois da mudança!')


console.log(nomes.length)

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma = soma + numeros[i]
}
console.log('A soma dos numero é', soma)
