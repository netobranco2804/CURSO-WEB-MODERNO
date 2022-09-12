/*Você pode usar o new dentro de uma função construtora também */
function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('Neto')
p1.falar()