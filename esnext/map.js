// Map, pode ter a chave sendo uma função, sendo um numero, a chave sendo como um objeto, maior flexibilidade
// A estrutura chave não aceita repetição, no caso se for 123, a proxima sera outro numero qualquer, menos o mesmo!
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular',{ framework: true })

console.log(tecnologias.react) //forma errada = undefined
console.log(tecnologias.get('react')) // forma correta

//Criando map e atribuindo os elementos, adicionado chave e valor
//Lembrando que usar essa forma no Objeto não é possivel
const chavesVariadas = new Map([
    [function () {}, 'Função'], //no caso Function é chave, 'função' é valor
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})
console.log(chavesVariadas.has(123)) // has verifica se o elemento esta presente dentro desse map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size) // size quantos elementos estão presentes dentro do map