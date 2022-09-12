// Criar uma função para retornar todos os chineses da lista
//criar um filtro que busque por todas as pessoas do sexo Feminino
//Achar mulher chinesa com menor salario?
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chineses = f => f.pais === 'China' // funcionarios/pais/extremamente igual a china
const mulheres = f => f.genero === 'F'
const menorSalario = (funcionario, funcionarioatual) => {
/*Retornar funcionario.salario for menor que funcionarioatual.salario
? = Então retorne o funcionario porque o salario dele é menor
: = Caso contrário retorne o funcionario atual*/
    return funcionario.salario < funcionarioatual.salario ? funcionario : funcionarioatual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios) // mostrar todas as listas
    
//mulher chinesa com menor salario
const funcionario = funcionarios
.filter(chineses)
.filter(mulheres)
.reduce(menorSalario)
console.log(funcionario)

})





