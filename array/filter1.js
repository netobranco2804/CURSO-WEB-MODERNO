const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true },
    {nome: 'iPad Pro', preco: 5000, fragil: true },
    {nome: 'Copo de Vidro', preco: 15.00, fragil: true },
    {nome: 'Copo de Plastico', preco: 10.00, fragil: false }
]

console.log(produtos.filter(function(p) {
    return p.preco > 2500 // tipo de filtro, preço maior do que 2500
    //return false = nenhum elemento passa, nenhum elemento vai pro array resultante
    //return true = todos eles ira aparecer, pois estão no array resultante
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))