//sempre usar a função map junto com reduce
const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Neto', nota: 8.5, bolsista: true},
    {nome: 'Maria', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 10.00, bolsista: true}
]



console.log(alunos.map(a => a.nota)) //transformar o aluno em nota dentro do map
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})