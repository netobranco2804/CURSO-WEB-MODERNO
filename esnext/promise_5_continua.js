setTimeout(function () {
    console.log('Executando callback..')
    setTimeout(function () {
        console.log('Executando segunda callback..')
        setTimeout(function () {
            console.log('Executando terceira callback..')
        }, 2000)
    }, 2000)
}, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
        console.log('Executando promise..') 
        resolve()
        }, tempo)
    })
}
//fazer assim:
// esperarPor(3000).then(texto => console.log(texto)) //SE FOR USAR ESSE, adicionar dentro de resolve() ('alguma texto')

//Ou fazer assim FORMA MAIS SIMPLIFICADA DE CHAMAR
esperarPor()
.then(() => esperarPor())
.then(esperarPor)
