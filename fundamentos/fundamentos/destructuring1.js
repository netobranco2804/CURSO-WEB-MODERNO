// novo recurso do ES2015
// Esse recurso exibe no console somente as palavras escolhidas
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua Capitão Silva Borges",
        numero: 123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade);

const {nome: n, idade: i} = pessoa
console.log(n, i)

// Se quiser buscar as informações dentro de endereço {}
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)