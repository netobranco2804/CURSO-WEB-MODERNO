/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
 Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’*/
function leituraNumeros(ler) {
    switch (ler) {
        case 1:
            return 'Numero um'
        case 2:
            return 'Numero dois'
        case 3:
            return 'Numero três'
        case 4:
            return 'Numero quatro'
        case 5:
            return 'Numero cinco'
        case 6:
            return 'Numero seis'
        case 7:
            return 'Numero sete'
        case 8:
            return 'Numero oito'
        case 9:
            return 'Numero nove'
        case 10:
            return 'Numero dez'
        default:
            return 'Numero não existente na lista'
    }
}

console.log(leituraNumeros(1))
console.log(leituraNumeros(2))
console.log(leituraNumeros(3))
console.log(leituraNumeros(4))
console.log(leituraNumeros(5))
console.log(leituraNumeros(6))
console.log(leituraNumeros(7))
console.log(leituraNumeros(8))
console.log(leituraNumeros(9))
console.log(leituraNumeros(10))
console.log(leituraNumeros(100))

