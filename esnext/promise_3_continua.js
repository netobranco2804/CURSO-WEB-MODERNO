// você vai ter uma promessa de algo que sera executado no futuro e algo que tbm sera devolvido no futuro
//CHAMANDO DE UMA FORMA DIFERENTE
let o = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Joao', 'Mario', 'Jose'])
})

o
    .then(valor => valor[0]) // puxou ANA
    .then(primeiro => primeiro[0]) //Puxou A de Ana
    .then(letra => letra.toLowerCase()) // Puxa letras Minusculas
    .then(letraMinuscula => console.log(letraMinuscula))