const fs = require('fs')
//dirname = diretorio atual
const caminho = __dirname + '/arquivo.json'

//ler de forma sincrono... Nao muito recomendavel
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//ler de forma assincrono.. passando callback que assim que o arquivo for carregado, ser chamado
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//leitura com require de forma mais simples
const config = require('./arquivo.json')
console.log(config.db)

//leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta..')
    console.log(arquivos)
})