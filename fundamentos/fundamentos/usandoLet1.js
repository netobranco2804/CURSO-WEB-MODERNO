let numero = 1;
{
    let numero = 2;
    console.log("Dentro = ", numero);
}
console.log("Fora = ", numero);

/*
Usando o let, ele lê o numero e não substitui pelo mesmo, cada um com seu valor.
Let dentro de um bloco, ficara visivel somente dentro do bloco, mas se estiver fora ficara no escopro global tbm

*/