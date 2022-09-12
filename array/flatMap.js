//criar um array de objeto [{}]
//extrair a nota de todos os alunos, o nome de todos também
const escola = [{
    nome: 'Turma A',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Luiz',
        nota: 10
    }]
}, {
    nome: 'Turma B',
    alunos: [{
        nome: 'Rogerio',
        nota: 5.6
    } , { 
        nome: 'Luana',
        nota: 7.2
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const getNomeAluno1 = aluno => aluno.nome
const getNomeAluno2 = nomealuno => nomealuno.alunos.map(getNomeAluno1)
const notas1 = escola.map(getNotasDaTurma)
const notas2 = escola.map(getNomeAluno2)
console.log(notas1,notas2)

//Criando um flatMap para deixar os resultados dentro de um array apenas
Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas3 = escola.flatMap(getNomeAluno2)
const notas4 = escola.flatMap(getNotasDaTurma)
console.log(notas3, notas4)
