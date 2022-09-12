//cadeia de prototipos (prototype chain)
const avo = {atributo1: 'A'}
const pai = {__proto__: avo, atributo2: 'B'}
const filho = {__proto__: pai, atributo3: 'C'}
console.log(filho.atributo1) // não achou no filho, procurou no pai e tbm não achou, procurou no avo e achou o atributo1

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
        },
        status() {
            return `${this.velAtual}Km/h de ${this.velMax}Km/h`
        }
    }

    const ferrari = {
        modelo: 'F40',
        velMax: 350 //shadowing
    }

    const volvo = {
        modelo: 'v40',
        status(){
            return `${this.modelo}: ${super.status()}` //chamando metodo do prototipo com super
        }
    }

//ESTABELECER A RELAÇAO DE PROTOTIPO usando uma função chamada setPrototypeOf()
Object.setPrototypeOf(ferrari, carro) //ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())