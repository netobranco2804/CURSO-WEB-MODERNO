// você vai ter uma promessa de algo que sera executado no futuro e algo que tbm sera devolvido no futuro
//Outra Maneira de se Entender melhor e que também pode ser utilizada
let h = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['João', 'Joaquim', 'Maria', 'Roberta'])
})

function primeiroElemento(array) {
    return array[0]
}

function primeraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

h   
    .then(primeiroElemento)
    .then(primeraLetra)
    .then(letraMinuscula)
    .then(console.log)