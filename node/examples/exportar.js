// Visiveis pra fora

console.log(module.exports === this)
console.log(module.exports === exports)

/*Como deixar visivel para fora, três formas*/
this.a = 1
exports.b = 2
module.exports.c = 3

//Sempre utilizar 'module.exports' quando for puchar o resultado, pois ele aponta também para this/exports
exports = null
console.log(module.exports)//puxa os 3 setados a cima, pois são iguais



//FORMA ERRADA DE SE FAZER
exports = {
    nome: 'Teste' //forma errada de se fazer - DA ERRO
}
console.log(module.exports)

//FORMA CORRETA DE SE FAZER SE FOR CRIAR UM OBJETO DENTRO
module.exports = {nome: 'Joao'}
console.log(module.exports)