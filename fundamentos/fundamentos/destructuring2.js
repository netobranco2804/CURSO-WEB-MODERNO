const [a] = [10]
console.log(a)
//pode fazer pulando casas, ele busca conforme a ordem dos numeros
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] 
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // forma não muito utilizavel, foi soemnte um exemplo
console.log(nota)