const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento do array
console.log(pilotos) 
/*pilotos = ['Vettel', 'Alonso', 'Raikkonen'] */


pilotos.push('Verstappen') //Add um elemento no final de um array
console.log(pilotos)
/*pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Verstappen'] */


pilotos.shift() //remove primeiro elemento da lista
console.log(pilotos)
/*pilotos = ['Alonso', 'Raikkonen', 'Verstappen'] */


pilotos.unshift('Hamilton') //Acrescenta elemento no primeiro item da lista
console.log(pilotos)
/*pilotos = ['Hamilton', 'Alonso', 'Raikkonen', 'Verstappen'] */


//splice pode adicionar e remover elementos
//adicionar no indice 2, não vou remover ninguem e vou adicionar o Bottas e o Massa
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
/* 
['Hamilton', 'Alonso', 'Raikkonen', 'Verstappen'] -> Antes do indice 2, ira adicionar Bottas e Massa
pilotos = ['Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen'] */



//remover no indice 3, apenas um elemento
pilotos.splice(3, 1) //removeu Massa
console.log(pilotos)
/*pilotos = ['Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen'] */



//slice metodo que retorna um novo array, pegando a partir do indice 2 e imprimindo o restante que esta a sua frente
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
/*pilotos = ['Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen']  -> era isso antes, agora passou a ser
  algunsPilotos1 = ['Bottas', 'Raikkonen', 'Verstappen'] -> segundo array


*/


//slice metodo onde o ultimo indice indicado não entrara na lista, então puchara aparitr do 1 ao 3
const algunsPilotos2 = pilotos.slice(1, 4) // seleciona indice 1, e o indice 4 não entra.
console.log(algunsPilotos2)
/*pilotos = ['Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen'] 
  algunsPilotos2 = ['Alonso', 'Bottas', 'Raikkonen'] 
*/