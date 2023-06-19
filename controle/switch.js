const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { // math.floor = arredondar a nota dos alunos para baixo.
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: // sempre adicionar no final do código, pra nao ter problema com os break
            console.log('Nota Invalida')
    }
}
imprimirResultado(8.9) //arredondara para 8.0, pois esta com math.floor , se fosse math.ceil iria para 9.0 a nota
//imprimirResultado(8.9)
//imprimirResultado(6.55)
//imprimirResultado(2.3)
//imprimirResultado(-1)
//imprimirResultado(11)