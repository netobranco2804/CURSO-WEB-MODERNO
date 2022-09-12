function Carro(VelocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeatual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeatual + delta <= VelocidadeMaxima) {
        velocidadeatual += delta
    } else {
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
console.log(uno.getvelocidadeatual())

const ferrari = new Carro(400, 50)
ferrari.acelerar()
ferrari.acelerar() // chamando duas vezes, soma o valor de aceleragem
console.log(ferrari.getvelocidadeatual())

console.log(typeof Carro) // função
console.log(typeof ferrari) // objeto