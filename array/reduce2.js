const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Neto', nota: 8.5, bolsista: true},
    {nome: 'Maria', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 10.00, bolsista: true}
]

//Desafio 1: Todos os alunos são Bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Desafio 2: Algum aluno é bosista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
