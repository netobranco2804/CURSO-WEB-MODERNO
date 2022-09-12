function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

//laço de repetição usando while
//Enquanto a opção for verdadeira, continue executando o laço até que a expressão fique falsa.

while(opcao != -1) { // // a opção tem que ser diferente de -1
    opcao = getInteiroAleatorioEntre(-1, 200)
    console.log(`Opcão escolhida foi ${opcao}`)
}

console.log('Até a proxima!!!')