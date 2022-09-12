// Object.preventExtensions
/*Ele vai previnir, não permitira que seu objeto seja extendido
ou seja, você não vai conseguir aumentar o numero  de atributos nesse objeto
pode ate excluir atributos,editar atributos, porém não é possivel acrescentar outro*/

const produto = Object.preventExtensions({
    nome: 'Caneta', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar Branca'
delete produto.tag
console.log(produto)

// Object.seal
/*Não consegue adicionar novos atributos, não consegue excluir atributos do objeto 
mas consegue modificar os valores dos atributos do objeto*/
//Modo selar

const pessoa = {nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes