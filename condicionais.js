const idade = 22

if (idade >= 18) {
    console.log('É maior de idade')
}
else {
    console.log('É menor de idade')
}

idade >= 18 ? console.log('Maior de Idade') : console.log('Menor de Idade') // forma Ternaria 


const notaAluno = 6

if (notaAluno >= 9 && notaAluno <= 10) {
    console.log('A nota é excelente')
}
else if (notaAluno >= 7 && notaAluno <= 8) {
    console.log('A nota é boa')
}
else if (notaAluno >= 4 && notaAluno <= 6) {
    console.log('A nota é médio')
}
else {
    console.log('A nota é ruim')
}
 
notaAluno >= 9 ? console.log('A nota é excelente') :
    notaAluno >= 7 ? console.log('A nota é boa') :
        notaAluno >= 4 ? console.log('A nota é médio') :
            console.log('A nota é ruim') // Forma Ternaria