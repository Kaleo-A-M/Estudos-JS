const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Seja Bem-vindo ao quiz do Kaleo sobre JS')
console.log('Responda as questões com: a, b ou c \n')

let acertos = 0

rl.question('Qual palavra usamos para começar uma função?\n(a)define\n(b)fuction\n(c)create\n>', (resposta1) => {
    if (resposta1 == 'b') {
        acertos++
    }
    rl.question('Qual dessa é uma estrutura de repetição?\n(a)loopar\n(b)repeat\n(c)for\n>', (resposta2) => {
        if (resposta2 == 'c') {
            acertos++
        }
        rl.question('Qual valor é considerado falsy em JS?\n(a)1\n(b)0\n(c)"texto"\n>', (resposta3) => {
            if (resposta3 == 'b') {
                acertos++
            }
            rl.close();

            if (acertos == 3) {
                console.log('Parabens você acertou tudo!')
            }

            else if (acertos == 2) {
                console.log('Você acertou 2, muito bom continue assim!')
            }
            else if (acertos == 1) {
                console.log('Você só acertou 1, pode melhorar.')
            }
            else {
                console.log('Você errou todas as questões! :<')
            }
        });
    });
});