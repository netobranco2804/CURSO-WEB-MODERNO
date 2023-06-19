/*BodyParser responsável por fazer o parse do body da requisição, quando fizer 
um request , se mandar dados dentro desse request, ele vai interpretar esses dados
deixando eles prontos para serem manupipulados dentro desse arquivo server.js*/

const bodyParser = require('body-parser')
const express = require('express')
const { reduce } = require('lodash')
/*proximo passo instanciar o express e colocar ele em alguma variavel*/
const app = express()


/* Dizendo que dentro da pasta atual('.') no qual o arquivo server.js esta
sirva os arquvios estaticos */
app.use(express.static('.'))
/* Se vier algum formato a partir de um submite de um formulario, esse codigo
sera responsavel por ler os dados e transformar isso em objeto */
app.use(bodyParser.urlencoded({ extended: true }))
/* Se vier um Json dentro do body da requisição, esse sera o codigo para transformar o json em objeto*/
app.use(bodyParser.json())

/* Quando vier uma requisição do tipo get nessa URL /teste, chame essa função
que recebe request, response, e essa função ira retornar uma mensagem de OK*/
app.get('/teste', (req, res) => res.send('Ok')) //função Middle


// ---------------------------------------------------------------------------------------------------------------
/* A função diskStorage recebe um objeto e esse objeto serve para configurar/personalizar tanto a pasta
que você vai salvar os arquivos, como também serve para personalizar o nome do arquivo no momento de salvar ele */
// FAZENDO UPLOAD DE UM ARQUIVO
const multer = require('multer')

const storage = multer.diskStorage({
 destination: function (req, file, callback) {
    callback(null, '.') //qual a pasta de destino que seja armazenada o arquivo
 },
 filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`) //colocar uma data atual antes do nome original do arquivo
 }
})
//passando objeto storage que foi criado apartir da função diskStorage
//e você diz que vai receber um arquivo com o nome (arquivo)
const upload = multer({ storage }).single('arquivo')
app.post('/upload', (req, rest) => {
    if(err) {
        return res.end('Ocorreu um erro.')
    }
    res.end('Concluido com sucesso.')
})


// ---------------------------------------------------------------------------------------------------------------

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})


app.get('/parOuImpar', (req, res) => {
    //req.body
    //req.query
    //req.params
    const par = parseInt(req.query.numero) % 2 === 0 //qualquer numero divididor por 2 que tem resto 0 é par
    res.send({
       resultado: par ? 'par' : 'impar' //se for par, vou retornar par e se não for par, retornara impar
    })
})

//Startar o servidor
app.listen(8080, () => console.log('Executando...'))