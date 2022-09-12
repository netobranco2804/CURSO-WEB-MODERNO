const valores = [7.7, 9.9, 9.2, 10.2];
console.log(valores[0], valores[3]);
// console.log(valores[4]); // chamando essa opção, daria valor undefined pois não tem na lista
/*
Mas por outro lado, pode criar um valor caso não tenha.
*/
valores[4] = 500;
console.log(valores[4]);
console.log(valores.length); //Mostra quantos elementos tem no array.

console.log(valores.pop()); // pegar ultimo valor do array e remove da lista
delete valores[0]; // deletar algum valor dentro do array
console.log(valores);
