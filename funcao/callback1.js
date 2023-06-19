const fabricantes = ['Mercedes', 'Audi', 'BMW']
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) // indice de uma array começa por 0, mas vamos pegar do 1
} 

//forEach é uma funcão de fabricantes, dentro de um array temos a função for Each
fabricantes.forEach(imprimir) //quero que para cada elemento do array, chame a função imprimir
//resultado então sera = (1. Mercedes) e por ai vai, indice 2. Audi, indice 3. BMW

fabricantes.forEach(function(fabricante){ 
    console.log(fabricante) // imprimir o valor de fabricante que no caso sera: (Mercedes, Audi e BMW)
})
// com arrow function, forma mais simplificada, mas é igual a forma de cima
fabricantes.forEach(fabricante => console.log(fabricante))