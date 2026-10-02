// HOF => higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao) {
    return operacao(numero1, numero2)
}

function soma(n1, n2) {
    return n1 + n2
}

function divisao(n1, n2) {
    return n1 / n2
}

const resultadoSoma = calcular(5, 2, soma)
console.log('A soma é igual a:', resultadoSoma)
const resultadoDivisao = calcular(5, 2, divisao)
console.log('A divisão é igual a:', resultadoDivisao)