const frutas = ['uva', 'banana', 'maça', 'kiwi', 'morango']
console.log(frutas)
console.log('Primeira fruta:', frutas[0]) /* o numero [0] indica a posição que a variavel se encontra dentro do array */
console.log('Utlima fruta:', frutas[4])
console.log('Total de fruta:', frutas.length) /* a propriedade 'length' depois da variavel faz com que o programa conte e nos mostre quantas variaveis há no array */
frutas.push('melancia')
console.log('Total de fruta:', frutas.length)
console.log('Utlima fruta:', frutas[frutas.length - 1]) /* nesta linha se ultiliza do 'length' para que nao precise ficar contando quantos variaveis tem pra poder pegar e buscar a ultima variavel */

/* Separação */

frutas.splice(2, 1) /* aqui ele busca a variavel, dando a posição e informando ao programa quantas variaveis deseja excluir do array */
console.log('Depois de remover:', frutas)

/* Separação */

for (let i = 0; i < frutas.length; i++) {
    console.log('indice: ', i)
    console.log(frutas[i])
}
console.log('Usando forEach:')

frutas.forEach((valor, indice) => {
    console.log('indice:', indice, valor)
}) /* Forma mais simples */

console.log('usando for of : ')
for (const fruta of frutas) {
    console.log('Fruta da vez:', fruta)
}
