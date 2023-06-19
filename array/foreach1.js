//Percorrer array só com forEach, simplesmente vai receber os elementos
//OBS: NÃO EXISTE UM QUARTO PARAMETRO DENTRO DE UMA CALLBACK por isso apenas TRÊS PARAMETROS

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice, Array) { // depois de indice pode por o , Array se quiser, da certo, mostra em lista
    console.log(`${indice + 1}) ${nome}`) // indice + 1 para começar contando do 1 e não do 0
    console.log(Array)
})
/* Exemplo de como ficou:
1) Agatha
2) Aldo
3) Daniel
4) Raquel

Se fosse chamar o Array também como passado na terceira função da callback, ficaria assim o resultado:
1) Agatha
['Agatha', 'Aldo', 'Daniel', 'Raquel']
2) Aldo
['Agatha', 'Aldo', 'Daniel', 'Raquel']
3) Daniel
['Agatha', 'Aldo', 'Daniel', 'Raquel']
4) Raquel
['Agatha', 'Aldo', 'Daniel', 'Raquel']

*/

//outro exemplo só puxando o nome sem indice
aprovados.forEach(nome => console.log(nome))
/* Exemplo de como ficou:
Agatha
Aldo
Daniel
Raquel
*/

//função armazenada em uma const variavel
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
/* Exemplo de como ficou:
Agatha
Aldo
Daniel
Raquel
*/
