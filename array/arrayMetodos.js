const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') //Add um elemento no final de um array
console.log(pilotos)

pilotos.shift() //remove primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') //Acrescenta elemento no primeiro item da lista
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar no indice 2, não vou remover ninguem e vou adicionar o Bottas e o Massa
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover no indice 3, apenas um elemento
pilotos.splice(3, 1) //removeu Massa
console.log(pilotos)

//slice metodo que retorna um novo array, pegando a partir do indice 2 e imprimindo o restante que esta a sua frente
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//slice metodo onde o ultimo indice indicado não entrara na lista, então puchara aparitr do 1 ao 3
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)