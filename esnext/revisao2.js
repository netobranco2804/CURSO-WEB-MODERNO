//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))



//Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()



// paramentro default = capacidade
function log(texto = 'Node') {
    console.log(texto)
}
log() //assumiu valor padrao
log('Eu sou mais forte') //chamada usando parametro e trocando valor



//operador rest = agrupar todos os valores que estao dentro de um parametro
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n) 
        return total
    }
console.log(total(1,2,3,4,5,6,7,8,9,10))




