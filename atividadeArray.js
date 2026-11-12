const vendas = [120, 80, 250, 40, 300, 150, 60];

// 1. Usando for
for (let i = 0; i < vendas.length; i++) {
    console.log(vendas[i]);
}

// 2. Usando forEach()
let vendasAcimaDe100 = 0;

vendas.forEach(function(venda) {
    if (venda >= 100) {
        vendasAcimaDe100++;
    }
});

console.log("Vendas acima ou iguais a R$ 100:", vendasAcimaDe100);

// 3. Usando for...of
let faturamento = 0;

for (const venda of vendas) {
    faturamento += venda;
}

console.log("Faturamento total: R$", faturamento);



/*
for: usa um índice (i) para acessar cada posição do array. O loop continua enquanto i for menor que o tamanho do array.
forEach(): executa uma função para cada venda. Se a venda for maior ou igual a 100, incrementamos o contador com ++.
for...of: percorre diretamente os valores do array, sem precisar de índice. O operador += acumula cada venda no faturamento. 
*/
