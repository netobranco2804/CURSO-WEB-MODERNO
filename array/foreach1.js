//Percorrer array só com forEach, simplesmente vai receber os elementos

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach(function(nome, indice, Array) { // depois de indice pode por o , Array se quiser, da certo, mostra em lista
    console.log(`${indice + 1}) ${nome}`) // indice + 1 para começar contando do 1 e não do 0
})

//outro exemplo só puxando o nome sem indice
aprovados.forEach(nome => console.log(nome))

//função armazenada em uma const variavel
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)