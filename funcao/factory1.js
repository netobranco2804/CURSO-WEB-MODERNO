//SEM opção factory, adicionar varios produtos iria ficar muito extenso na lista
const prod1 = {
    nome: `...`,
    preco: 45
}
const prod2 = {
    nome: `....`,
    preco: 455
}

//Com função factory, retorna um objeto

function criarpessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 54
    }
}

console.log(criarpessoa())