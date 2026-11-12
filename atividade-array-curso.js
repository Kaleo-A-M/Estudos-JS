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



let media = 0
somaNota = 0
let notas = [6, 8, 4, 9]

for (let i = 0; i < notas.length; i++) {
    somaNota = somaNota + notas[i]
    media = somaNota / 4
}
if (media < 7) {
    console.log('A sua media é ', media, 'Reprovador')
}
else {
    console.log('A sua media é ', media, 'Aprovado')
}


let nomesUsuarios = ['kaleo', 'larissa', 'gustavo', 'agnes', 'maria']

nomesUsuarios.forEach(nomesUsuarios => {
    console.log('Olá,', nomesUsuarios)
});

let precos = [10, 5, 8, 15]

let precoDesconto = precos.map((preco) => {
    const desconto = preco * 0.10
    return preco - desconto
})
console.log('Os preços menos os descontos:', precoDesconto)

let idades = [18, 20, 15, 10, 8, 25]

const maiorIdade = idades.filter((idade) => {
    return idade >= 18
})
console.log('As idades:', maiorIdade, 'são maiores de idade')



let valorCompras = [22.50, 19.99, 32, 1.50]
let somarCompras = 0
total = 0

for (let i = 0; i < valorCompras.length; i++) {
    somarCompras = somarCompras + valorCompras[i]
    const desconto = somarCompras * (20 / 100)
    total = somarCompras - desconto
}
console.log('Os valor total com desconto:', total)


let tarefas = ['matematica', 'portugues', ' ciencia', 'historia']
let concluidas = [true, true, false, false]

const tarefasConcluidas = tarefas.filter((tarefa, i) => {
    return concluidas[i] === true
})
const tarefasPendentes = tarefas.filter((tarefa, i) => {
    return concluidas[i] === false
})
console.log('As tarefas concluidas são:', tarefasConcluidas)
console.log('As tarefas pendentes são:', tarefasPendentes)
