let a = 3 // quando cria com let, fica local, não é exportada e nao fica no global

global.b = 123

this.c = 456
this.d = false
this.e = 'Teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca, sem o uso de var e let
abc = 3 // nao faça isso em casa!!
console.log(global.abc)

// module.exports = {e: 456, f: false, g: 'teste'}


