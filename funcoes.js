/* function saudacao(nome) {
    console.log('Ola,', nome)
} */

/* const saudacao = (nome) => {
    console.log('Vida longa e prospera,', nome) // forma arrow function
} */

const saudacao = nome => console.log('Olá,', nome) // forma simplificada do arrow function 

saudacao('Kaleo') // Kaleo é o "argumento"

/* function calcularDobroDeUm(numero) {
    return numero * 2
} */

const calcularDobroDeUm = (numero) => {
    return numero * 2
}

const numeroDobrado = calcularDobroDeUm(4)
console.log('O valor Dobrado de 4 é:', numeroDobrado)