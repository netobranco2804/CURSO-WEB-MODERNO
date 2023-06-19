const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
// imprimirResultado('Epa!!') // cuidado ao usar string nesse caso, pois esta lendo apenas numeros para ver se é verdade ou falso.

/*
Outra maneira de se fazer que também funciona, apenas tirando os blocos e deixando sem
ele le normal
exemplo:

const imprimirResultado = function(nota) {
    if(nota >= 7)
        console.log('Aprovado!')
    else 
        console.log('Reprovado')
}

*/