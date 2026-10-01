const idade = 18

console.log('Sua idade é: ', idade)

if (idade < 18) {
    console.log('Venda proibida para menores de 18 anos.')
}
else {
    console.log('Pode comprar bebida alcoólica.')
}


const horaAtual = 19
console.log('A hora atual é: ', horaAtual)

if (horaAtual >= 6 && horaAtual <= 11) {
    console.log('Bom dia!')
}
else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log('Boa Tarde!')
}
else {
    console.log('Boa noite!')
}

const numero = -1

numero > 0 ? console.log('O número', numero, 'é positivo!') :
    numero < 0 ? console.log('O número ', numero, ' é negativo!') :
        console.log('O número é igual a zero!')


const nota = 3.9

if (nota <= 10 && nota >= 9) {
    console.log('Sua nota é: A')
}
else if (nota < 9 && nota > 8) {
    console.log('Sua nota é: B')
}
else if (nota < 8 && nota >= 7) {
    console.log('Sua nota é: C')
}
else if (nota < 7 && nota >= 4) {
    console.log('Sua nota é: D')
}
else if (nota < 4 && nota >= 0) {
    console.log('Sua nota é: E')
}
else {
    console.log('Sua nota não é valida')
}


const number = 3

number % 2 === 0 ? console.log('O número ', number, 'é par') :
    console.log('O número ', number, 'é impar')


const opcao = 3

switch (opcao) {
    case 1:
        console.log('Cadastrar')
        break
    case 2:
        console.log('Listar')
        break
    case 3:
        console.log('Sair')
        break
}

const email = ''

if (email === '') {
    console.log('Preencha o campo de e-mail.')
}
else {
    console.log('E-mail válido.')
}

const senha = 123
const senhaValida = true

if (senhaValida) {
    console.log('Senha valida!')
}
else {
    console.log('Senha muito Curta!')
}

const saldoDisponivel = 100
const valorCompra = 100

if (saldoDisponivel >= valorCompra){
    console.log('Compra aprovada.')
}
else{
    console.log('Saldo insuficiente.')
}

