//criar um objeto para representar uma sequencia para que possa pegar os id dos objetos

let id = 0;

const produtos = {}


/*! = Se o id do produto não estiver setado, vou fazer produto.id recebe = sequence.id
na linha 15, se o produto estiver setado ele substitui pela versão mais atual, caso nao estiver setado ele add um novo id */
function salvarProduto(produto){
    produtos[id] = produto
    id++
    return produto //aqui ja vai retornar produto com id setado
}

//criar função para pegar produto por id
function getProduto(id) {
        return produtos[id] || {} //caso seja nulo ele retornara um objeto vazio
}

//criar função para retornar todos os produtos
function getProdutos() {
    console.log(produtos)
    return Object.values(produtos)
}

//Como tornar essas funções que estão visiveis apenas dentro desse modulo, deixando visivel para fora

module.exports = {salvarProduto, getProduto, getProdutos}