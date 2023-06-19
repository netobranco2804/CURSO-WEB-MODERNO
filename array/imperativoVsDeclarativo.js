const alunos = [
    {nome: 'Joao', nota: 7.9},
    {nome: 'Rodrigo', nota: 9.2}
]

//Imperativo
let total1 = 0 // variavel onde ira acumular os valores depois, por isso começa por 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota //percorrendo cada um dos alunos e pagando o indice de cada um deles e também pegou a nota, acresncentado ao total1
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
 