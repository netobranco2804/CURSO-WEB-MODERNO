function criarproduto(nome, preco) {
return {
    nome,
    preco,
    desconto: 0.1
}
}
console.log(criarproduto('Notebook', 5000.00))
console.log(criarproduto('Computador', 3000.00))
