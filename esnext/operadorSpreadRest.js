// operador ... rest(juntar)/spread(espalhar)
//Usar rest com parametro de função

//usar spread com objeto
const funcionario = {nome: 'Maria', salario: 20.000}
const clone = {ativo: true, ...funcionario} // ... pega todos os atributos de funcionario e espalha dentro de outro objeto
console.log(clone)

//usar spread com array
// espalhando dentro de um array, todos os elementos de um outro array
const GrupoA = ['João', 'Pedro', 'Gloria', 'Maria']
const grupoFinal = ['Maria', 'Rafaela', ...GrupoA]
console.log(grupoFinal)