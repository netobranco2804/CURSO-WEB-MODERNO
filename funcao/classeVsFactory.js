/*Você pode criar novos objetos a partir de uma classe, usando operador New 
estanciando apartir de uma classe*/

class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar() {    // função
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

/* Você pode criar novos objetos a partir de uma factory
ou seja uma função que retorna como resposta um objeto*/
const criarpessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarpessoa('Joao')
p2.falar()