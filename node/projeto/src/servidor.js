const porta = 3009

const express = require('express')
var cors = require('cors')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser') //importo para que o programa postMan funcione
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

//Trazedo um produto especifico baseado no id, passando um paramentro (:id)
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

//Criar um post para submeter os dados e salvar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({ //salvar produto no pseudo banco de dados
        nome: req.body.nome, // pegando nome apartir do corpo da requisiçao
        preco: req.body.preco
    })
    res.send(produto) //Retornar produto como resposta= CONVERTEU PRA JSON LEVANDO PRA INTERNET 
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})