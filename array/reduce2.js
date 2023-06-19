const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Neto', nota: 8.5, bolsista: true},
    {nome: 'Maria', nota: 9.6, bolsista: false},
    {nome: 'Ana', nota: 10.00, bolsista: true}
]

//Desafio 1: Todos os alunos são Bolsista?
/* todosBolsistas recebe uma função com (resultado,bolsista que é verdadeiro ou falso)
=> resultado && bolsista = no caso: Joao e Bolsista, Neto e Bolsista, pra ver se todos os alunos são realmente bolsista, no caso se tiver um false, resultado = false
 */
const todosBolsistas = (resultado, bolsista) => resultado && bolsista //&& = e
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) //false

//Desafio 2: Algum aluno é bosista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista // || = ou (João, ou Neto, ou Ana = pra ver se é verdade que um deles são bolsistas)
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) // true
