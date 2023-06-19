// novo recurso do ES2015
// Esse recurso exibe no console somente as palavras escolhidas
// USANDO O DESTRUCTURING EM OBJETO

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua Capitão Silva Borges",
        numero: 123
    }
}


//Desctructuring tirando algumas informações de dentro da estrutura pessoa
const { nome, idade } = pessoa  //tire de dentro do objeto pessoa, o atributo {nome e idade}
console.log(nome, idade);


//Forma simplificada de chamar o nome e idade, atribuindo um valor a cada um deles 
const {nome: n, idade: i} = pessoa
console.log(n, i)

// Se quiser buscar as informações dentro de endereço {}
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)