function Carro(VelocidadeMaxima = 200, delta = 5) { //delta quando for acelerar de 5 em 5
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    //lembrando que adicionar o this, deixa o conteudo visivel fora do scopro dessa função, da pra retornar o resultado estando fora do bloco inteiro aqui, exemplo la em baixo

    this.acelerar = function () {
        if (velocidadeatual + delta <= VelocidadeMaxima) { //Se velocidadeAtual+Delta for menor ou igual a velocidadeMaxima
        velocidadeatual += delta // pode acrescentar a velocidade atual e o valor de delta
    } else { //caso contrário seja maior
        velocidadeatual = VelocidadeMaxima
     }
    }

    //metodo publico
    this.getvelocidadeatual = function () {
        return velocidadeatual
    }
}

const uno = new Carro
uno.acelerar() 
console.log(uno.getvelocidadeatual()) //como chamou só uma vez, o valor sera = 5

const ferrari = new Carro(400, 50)
ferrari.acelerar()
ferrari.acelerar() // chamando duas vezes, soma o valor de aceleragem = 50 + 50 = 100 km/h 
console.log(ferrari.getvelocidadeatual())

console.log(typeof Carro) // função
console.log(typeof ferrari) // objeto