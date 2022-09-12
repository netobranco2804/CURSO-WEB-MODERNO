//extrair com callback apenas as notas menores do que 7
const notas = [7.7, 5.5, 9.0, 10.2, 2.5, 3.5, 5.2]
//sem o callback, opção mais trabalhosa
const notasbaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i])
    }
}
console.log(notasbaixas1)

//Com Callback
/*Filtrar os elementos dentro do array, 
retornar se o elemento verificado é true ou false, caso seja true
o elemento vai entrar no array que sera resultado da opção filter, 
caso seja falso o elemento será excluido do array e não ira estar presente no array
final */

//opção mais simples a se fazer:

const notasbaixas2 = notas.filter(function(nota) {
    return nota < 7
})
console.log(notasbaixas2)

//opção com array, mesmo efeito dos dois exemplos a cima

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)

//Outra opçao mais elegante a se fazer:
const notasMenorQue7 = nota => nota < 7
const notasbaixas4 = notas.filter(notasMenorQue7)
console.log(notasbaixas4)