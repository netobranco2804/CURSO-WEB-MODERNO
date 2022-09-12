// Operador ternario=  nota >= 7 ? 'Aprovado' : 'Reprovado'

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(7.1))
console.log(resultado(5.0))

/*
PODE SER FEITO ASSIM TBM

const resultado = nota => { 
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado(7.1))
console.log(resultado(5.0))
*/