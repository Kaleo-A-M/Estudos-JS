function saudacao() {
    console.log('Eai beleza?')
}

// setTimeout(saudacao, 2000)

let contador = 0

const id = setInterval(() => {
    contador++
    console.log('tempo em segundo:', contador)
    if (contador == 10) {
        clearInterval(id)
        console.log('Fim do tempo!')
    }
}, 1000)