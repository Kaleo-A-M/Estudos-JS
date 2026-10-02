const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Olá, seja bem vindo ao meu quiz sobre matemática.\n')

let acerto = 0

rl.question('Quanto é 2 + 2?\n a)4 \n b)3 \n c)5\n>', (resposta1) => {
    if (resposta1 == 'a') {
        acerto++
    }
    rl.question('Quanto é a raiz quadrada de 81?\n a) 8 \n b) 9 \n c) 7\n>', (resposta2) => {
        if (resposta2 == 'b') {
            acerto++
        }
        rl.question('Quanto é 1 terço de 60? \n a) 20 \n b) 30 \n c) 15\n>', (resposta3) => {
            if (resposta3 == 'a') {
                acerto++
            }
            rl.close()
            if (acerto == 3) {
                console.log('Parabens acertou todos!')
            }
            else if (acerto == 2) {
                console.log('Parabens acertou 2 !')
            }
            else if (acerto == 1) {
                console.log('Parabens acertou 1 !')
            }
            else {
                console.log('Você é um animal de teta! :D')
            }
        })
    })
})