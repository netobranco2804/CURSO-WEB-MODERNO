// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'}
//Não é possivel alterar, da erro dessa forma se tentar alterar o valor de uma const

Object.freeze(pessoa) // Dessa forma você congelou o objeto pessoa, não sera mais possivel alterar ele nas linhas abaixo

//Não é possivel alterar, nem deletar ele, por ter dado freeze
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

//Criando um objeto para ser constante e nunca ser alterado
const pessoaConstante = Object.freeze({nome: 'Joao'})
console.log(pessoaConstante)