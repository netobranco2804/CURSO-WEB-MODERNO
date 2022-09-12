const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) // criou o obj filha, apontando para o prototipo obj pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome='Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

/*for in = possibilidade de verificar se uma determinada propriedade 
pertence ou não ao objeto em que você esta percorrendo naquele momento */
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key):console.log(`Por Henraça: ${key}`)
}