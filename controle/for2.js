const nota = [6.7, 7.4, 8.1, 10.2, 23.5]
for (let i in nota) {
    console.log(i, nota[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Rosa',
    idade: 20,
    peso: 24
}
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}