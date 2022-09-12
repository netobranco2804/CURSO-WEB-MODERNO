// Escrever uma função normal
let dobro = function (a) {
    return 2 * a
}

//Sobrescrevendo o dobro com a função arrow
dobro = (a) => {
    return 2 * a
}

//Forma mais reduzida, tirando os parenteses caso tenha apenas um parametro
dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

//Outro exemplo

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'