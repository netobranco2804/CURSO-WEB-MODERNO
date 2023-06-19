const valores = [7.7, 9.9, 9.2, 10.2];
console.log(valores[0], valores[3]);
// console.log(valores[4]); // chamando essa opção, daria valor undefined pois não tem na lista
/*
Mas por outro lado, pode criar um valor caso não tenha.
*/
valores[4] = 500;
console.log(valores) // com o valor 500 adicionado na posição 4 do array

console.log(valores[4]); // resultado 500
console.log(valores.length); //Mostra quantos elementos tem no array = (5)

//Opção de adicionar novos elementos dentro do array
/*Opção de misturar coisas dentro do array, porem não é a melhor forma, 
cada array precisa de um determinado produto para não ter confusão com outros*/
valores.push({id: 3}, false, null, 'teste')
console.log(valores)


console.log(valores.pop()); // pegar ultimo valor do array e remove da lista | resultado = (teste) que ele ira remover
delete valores[0]; // deletar algum valor dentro do array - no caso deletou o primeiro elemento do array
console.log(valores);
