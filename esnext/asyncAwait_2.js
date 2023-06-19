const { functionsIn } = require("lodash")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
       // console.log('Executando promise..') // posso adicionar essa linha la em baixo também
        resolve()
        }, tempo)
    })
}

//esperarPor(2000)
//    .then(() => console.log('Executando promise..'))
//    .then(esperarPor) // não precisa setar dnv, ele puxa os 2 segundos porque ja esta setado em cima 
//    .then(() => console.log('Executando promise..'))
//    .then(esperarPor)
//   .then(() => console.log('Executando promise..'))



//forma asyncrona sem precisar usar o metodo .then
async function executar() {
        await esperarPor(1500) // colocar await, executa essa linha e só vai para a proxima quando terminar essa
        console.log('Async/Await 1..')

        await esperarPor(1500)
        console.log('Async/Await 2..')

        await esperarPor(1500)
        console.log('Async/Await 3..')
    }
    executar()




//Posso também criar um valor e chamar na variavel parecido com o exemplo acima

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500) // colocar await, executa essa linha e só vai para a proxima quando terminar essa
    console.log(`Async/Await ${valor}..`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}..`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}..`)
}
executar()