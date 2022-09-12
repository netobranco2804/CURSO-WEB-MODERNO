//exemplo com while, simulando uma quantidade determinada de repetições
let contador = 1 // variavel que controla o laço
while(contador <= 10) { // expressão que ve se vai continuar ou não
    console.log(`contador = ${contador}`)
    contador++ // incremento
}

//Exemplo com for
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

//exemplo com array
const notas = [1.0, 4.2, 6.3, 10.2, 17.2, 20.2, 30.6]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}