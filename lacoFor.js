// Estrutura de laço de repetição FOR

for (let contador = 1; contador <= 5; contador++){
    console.log('O número atual é: ',contador)
}

for (let numero = 0; numero <= 15; numero++) {
    if(numero % 2 == 0) {
        console.log(numero,'par')
    }
    else{
        console.log(numero, 'impar')
    }
}

const palavra = 'Danone'

// palavra.length indica quantos caracteres uma string possui
// palavra[1] pega o caractere na posição indicada

for (let contador = 0; contador < palavra.length; contador ++){
    console.log(palavra[contador])
}
