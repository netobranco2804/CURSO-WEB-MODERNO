function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //math.random trás um valor de 0 a 10
    return Math.floor(valor)
}

let opcao = 0

//laço de repetição usando while
// while= Enquanto a opção for verdadeira, continue executando o laço até que a expressão fique falsa.

while(opcao != -1) { // // a opção tem que ser diferente de -1 para para o laço de repetição
    opcao = getInteiroAleatorioEntre(-1, 200)
    console.log(`Opcão escolhida foi ${opcao}`)
}

console.log('Até a proxima!!!')