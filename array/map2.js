const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Carderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 42.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

//Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) //converte texto para objeto
const apenasPreco = produto => produto.preco 
const resultado = carrinho.map(paraObjeto).map(apenasPreco) // um carrinho com 4 objetos, retornar apenas o preço de cada produto sem o nome.
console.log(resultado)

//resultado = [3.45, 13.9, 41.22, 7.5]