// exemplo sem promise..
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        res.on('data', dados => { //cada um dos dados que forem chegando vai concatenando dentro da variavel resultado
            resultado += dados // += recebe uma atribuição aditiva para os dados que estão chegando
        })
        res.on('end', () => { //no final quando todos os dados tiverem chegado, ai vai ser disparado um evento de resposta (end = terminou de chegar os dados)
            callback(JSON.parse(resultado))
    })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Alunos da Turma A: ${a.nome}`))
    console.log(nomes)
})
getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `Alunos da Turma B: ${a.nome}`))
    console.log(nomes)
})
getTurma('C', alunos => {
    nomes = nomes.concat(alunos.map(a => `Alunos da Turma C: ${a.nome}`))
    console.log(nomes)
})
