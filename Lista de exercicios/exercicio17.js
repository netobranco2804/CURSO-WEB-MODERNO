/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário 
e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso 
default que indique que o plano é inválido. */

function planoFuncionario (plano, salarioAtual) {
    switch (plano) {
    case 'Plano A':
        return salarioAtual * 1.1
    case 'Plano B':
        return salarioAtual * 1.2
    case 'Plano C':
        return salarioAtual * 1.3
    default:
        return 'Plano Invalido'
}
}

console.log(planoFuncionario('Plano A', 1000))
console.log(planoFuncionario('Plano B', 1000))
console.log(planoFuncionario('Plano C', 1000))
console.log(planoFuncionario('Plano D', 1000))