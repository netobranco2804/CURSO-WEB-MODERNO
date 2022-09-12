//toString para poder simular a impressão no console como se fosse de fato um Array
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
    })

    console.log(quaseArray[0])

//Array verdadeiro
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray) //A forma de ler os dois são iguais


