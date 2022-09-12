function soBoaNoticia(nota){
    if(nota >= 7) {
        console.log('Aprovado ' + nota)
    }
}

soBoaNoticia(8.1) // imprimindo somente essa opção, maior que 7!
soBoaNoticia(6.0)


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É Verdade..' + valor)
    }
}

seForVerdadeEuFalo() //False
seForVerdadeEuFalo(null) // false
seForVerdadeEuFalo(undefined) // false
seForVerdadeEuFalo(NaN) // False
seForVerdadeEuFalo('') // false
seForVerdadeEuFalo(0)// false
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo('?') // true
seForVerdadeEuFalo([])// true
seForVerdadeEuFalo([1,2])//true
seForVerdadeEuFalo({})//true