 // retornar um numero aleatório
//passando dois atributos dentro de um operador destructuring {min, max}
function rand({min = 0, max = 1000}) {
const valor = Math.random() * (max - min) + min
return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({})) // objeto vazio! pegando qualquer numero de 0 a 1000
