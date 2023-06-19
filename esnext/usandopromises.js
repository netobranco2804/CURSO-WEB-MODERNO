// exemplo com promise..
const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })

            res.on('end',() => {
                try {
                    resolve(JSON.parse(resultado))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// let nomes = []
// getTurma('A').then(alunos => {
//   nomes = nomes.concat(alunos.map(a => `Alunos da Turma A: ${a.nome}`))
//    console.log(nomes)
// })
// getTurma('B').then(alunos => {
//    nomes = nomes.concat(alunos.map(a => `Alunos da Turma B: ${a.nome}`))
//    console.log(nomes)
// })
// getTurma('C').then(alunos => {
//    nomes = nomes.concat(alunos.map(a => `Alunos da Turma C: ${a.nome}`))
//    console.log(nomes)
//


Promise.all([getTurma('A'), getTurma('B'), getTurma('C')]) // array de função que retorna um promises. Primese.all espera que as promises sejam resolvidas ou rejeitadas
    .then(turmas => [].concat(...turmas)) // função .then com todos os dados ja populados dentro de uma matriz
    .then(alunos => alunos.map(aluno => aluno.nome)) //lista de todos os alunos e peguei o nome de cada um deles
    .then(nomes => console.log(nomes)) // finalmente chamando o array de nomes e imprimindo no console
    .catch(e => console.log(e.message)) //sempre que tiver trabalhando com promise, sempre adiconar .then e .catch

//Puxando uma turma não existente para ver o reject em ação
getTurma('D').catch(e => console.log(e.message)) //msg: Unexpected token < in JSON at position 0