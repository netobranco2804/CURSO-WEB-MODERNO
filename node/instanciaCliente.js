const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC= require('./instanciaNova')() //Envocando a função fatory, quando for função não esquecer de chamar no final '()'
const contadorD = require('./instanciaNova')() // contadorD pra ver que de fato eles são independentes 

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor ,contadorB.valor) //valor era 1, mas coloco 2x contadorA, somou mais dois resultado é 3, pegou o contadorB só pra ver que salva cache e somou por conta disso

//contadorD não soma o mesmo valor se posto 2 vezes, pois evita o cache do sistema utilizando função factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
//Usando factory não caiu em alguma pegadinha, pois após criado o objeto, ele retornara o valor do mesmo sem acrescentar como no exemplo acima sem a função factory