//extrair com callback apenas as notas menores do que 7
const notas = [7.7, 5.5, 9.0, 10.2, 2.5, 3.5, 5.2]


//sem o callback, opção mais trabalhosa
const notasbaixas1 = []
for (let i in notas) {  //for = para cada [i] dentro de notas, ou seja para cada propriedade dentro de notas o (i) assumira as propriedades sequencialmente
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i]) //push = adicionar um elemento no array
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
//.filter vai filtrar os elementros dentro de um array retornando true ou false
//se a opção retornar true, o elemento deve entrar dentro do array, caso seja false ele não entra
const notasbaixas2 = notas.filter(function(nota) {  //function nota = sub array de notas, então pode chamar através de nota o return
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





//Outro exemplo criando OBJETOS 
const animal = {especie:"Gato", nome:"Kiki", idade: 4, peso: 3}
let dados = ""
//for = para cada [i] dentro de animal,  o (i) assumira as propriedades sequencialmente
for (let i in animal) {
    //concatenar dentro da (dados criado na vatiavel vazia logo a cima)
    //dados recebe += o que esta dentro desse animal, porém [i] = que é igual a cada um dos elementos/propriedades
    dados += animal[i] + "<br>"; // podemos concatenar mais uma quebra de linha, isso deixa um item em baixo do outro

}
console.log(dados) // mostra o resultado no f12 do console ou no f8 aqui no vs
//Para adicionar o resultado de dados na web, seria com o uso de document.write
// document.write(dados)



//Exemplo agora com array de strings
const paises = ["Brasil", "Argentina", "EUA", "Espanha", "Chile"];
let lista = "";

for(let i in paises){
    lista += paises[i] + "<br>";
}
console.log(lista)