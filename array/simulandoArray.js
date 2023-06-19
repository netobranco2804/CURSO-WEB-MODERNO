//brincadeira, utilizando funções para ocultar os numero setados dentro do objeto, deixando parecido com um array
//também fica legal pra chamar ele pelo indice no console, sabendo que cada elemento do objeto possui seu numero

//toString para poder simular a impressão no console como se fosse de fato um Array
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', { // tostring converter para apenas escrita
    value: function() { return Object.values(this) }, //imprimir os valores do objeto
    enumerable: false // oculta o valor númerico do objeto {}
    })

    console.log(quaseArray[0]) // mostra somente 'Rafael' (sem o 0)

//Array verdadeiro
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) //A forma de ler os dois são iguais


