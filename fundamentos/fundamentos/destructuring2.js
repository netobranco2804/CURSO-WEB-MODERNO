// USANDO O DESTRUCTURING EM ARRAY


const [a] = [10]
console.log(a)
//pode fazer pulando casas, ele busca conforme a ordem dos numeros
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
/*
/IGNOROU O n2 e o n4, então não mostrara o resultado deles, apenas de qual ele chamar, 
respeitando a ordem dos elementos do array [0, 1, 2, 3, 4 etc..]
 */
console.log(n1,n3,n5,n6)


/*primeiro elemento ( [, )ignorei, o segundo elemento ( [, nota] )é um array
ignorou o primero elemento e pegou o segundo */
//resultado 6, pois ignorou o primiero e pediu o segundo elemento do array, que é o 6
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // forma não muito utilizavel, foi soemnte um exemplo
console.log(nota)