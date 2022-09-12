const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Neto', nota: 8.5, bolsista: true},
    {nome: 'Maria', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 10.00, bolsista: true}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})