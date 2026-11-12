/* function saudacao(){
    console.log('Ola, seja bem-vindo!')
}
saudacao() */

/* function apresentarPessoa(nome,idade) {
    console.log('Oi meu nome é',nome,'e tenho',idade,'anos')
}
apresentarPessoa('kaleo',22) */

function calcularImc(peso, altura) {
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        return 'O seu peso e (ou) altura não é valido!'
    }
    if (peso <= 0 || altura <= 0) {
        return 'Seu peso e (ou) altura não podem ser menor ou igual a zero!'
    }
    const imc = peso / (altura * altura)
    return imc;
}
const resultado = calcularImc(69, 1.73)
console.log(resultado)

/* function verificarNota(nota1, nota2) {
    media = (nota1 + nota2) / 2
    if (media >= 7) {
        console.log('Sua nota é ', media, 'Aprovado')
    }
    else {
        console.log('Sua nota é ', media, 'Reprovado')
    }
}
verificarNota(8, 8) */

/* function ehPar(numero){
    if(numero % 2 == 0) {
        console.log(true)
    }
    else{
        console.log(false)
    }
}
ehPar(10) */

/* function calculo(a, b) {
    soma = a + b
    console.log('A soma do numero', a, 'mais', b, 'é igual a:', soma)
}
calculo(4, 2) */

/* function calcularTroco(valorCompra, valorPago) {
    valorTroco = valorPago - valorCompra
    if (valorCompra <= valorPago) {
        console.log('o valor da compra deu', valorCompra, 'voltarei', valorTroco, 'de troco.')
    }
    else {
        console.log('Valor insuficiente para pagar a compra!')
    }
}
calcularTroco(20, 20) */

