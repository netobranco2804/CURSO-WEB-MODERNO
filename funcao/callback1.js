const fabricantes = ['Mercedes', 'Audi', 'BMW']
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // indice de uma array começa por 0, mas vamos pegar do 1
}

//forEach é uma funcão de fabricantes, dentro de um array temos a função for Each
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante){
    console.log(fabricante)
})
// com arrow function
fabricantes.forEach(fabricante => console.log(fabricante))