// Escrever uma função normal
let dobro = function (a) {
    return 2 * a
}

//Sobrescrevendo o dobro com a função arrow
dobro = (a) => {
    return 2 * a
}

//Forma mais reduzida, tirando os parenteses caso tenha apenas um parametro
dobro = a => 2 * a // return implicito - INCLUI O RETURN automaticamente
console.log(dobro(Math.PI)) // trará o dobro de PI - 6.283185307179586

//Outro exemplo de funções sem paramentro

let ola = function () { 
    return 'Olá'
}

ola = () => 'Olá' // forma padrão
ola = _ => 'Olá' // possui um parametro, mas pode ser ignorado se eu quiser
console.log(ola())