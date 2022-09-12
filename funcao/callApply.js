function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //chamando função diretamente
console.log(produto.getPreco()) // chamando função apartir de um objeto

const carro = {
    preco: 3000,
    desc: 0.20
}

/*Qual a diferença entre chamar uma função com aplly ou call
A única diferença é apenas as passagens dos parametros, por isso colocamos dois parametros
imposto/moeda, para que possa perceber que a forma de passar o parametro nas duas funções abaixo
é diferente */

console.log(getPreco.call(carro))
console.log(getPreco.apply(produto))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))