Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 5000, fragil: true },
    { nome: 'Ipad Pro', preco: 6200, fragil: true },
    { nome: 'Copo de Vidro', preco: 15.00, fragil: true },
    { nome: 'Copo plastico', preco: 13.00, fragil: false }
]


const caro = produto => produto.preco >= 10
const fragil = produto => produto.fragil
const resistente = produto => !produto.fragil // ! = é pra ver se é false ou true, também pra fazer a chamada a baixo e puxar os resistentes

console.log("/n/n")
console.log("Produtos frágeis: ", produtos.filter2(caro).filter2(fragil))
console.log("Produtos Resistentes: ", produtos.filter2(caro).filter2(resistente))
console.log("/n/n")

//Utilizando o filtro Nativo e COM as funções auxiliares
console.log("Produtos caros e frágeis: ", produtos.filter(caro).filter(fragil))
console.log("Produtos caros e Resistentes: ", produtos.filter(caro).filter(resistente))
console.log("/n/n")

//Utilizando o filter nativo e sem as funções auxiliares
console.log("Produtos caros e Frágeis: ", produtos.filter(produto => produto.fragil && produto.preco >= 2000))
console.log("Produtos baratos e Resistentes: ", produtos.filter(produto => !produto.fragil && produto.preco >= 10))