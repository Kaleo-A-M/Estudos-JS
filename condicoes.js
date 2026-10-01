const nome = 'Kaleo'

if (nome) {
    console.log('Olá, ', nome)
}
else {
    console.log('Ainda não sei o seu nome')
}

const idade = 22

if (idade != null && idade >= 18) {
    console.log('Maior de Idade')
}
else if (idade != null && idade >= 0 && idade < 18) {
    console.log('Menor de Idade')
}
