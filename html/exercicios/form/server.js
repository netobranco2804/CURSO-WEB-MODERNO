const express = require('express') //importar express
const app = express() // instanciar express para uma variavel chamada APP
const bodyParser = require('body-parser') //Importar body parser
/* Uma vez que eu submeto os dados de um formulario, body parser vai fazer um parser no corpo da requisição
Pegando os dados e jogando dentro de request.body*/


//urlencoded = padrão que quando se submete a um formulario é o padrão que vem a partir da submissão, sendo necessario fazer o bodyparser junto.
app.use(bodyParser.urlencoded({extends: true}))


// Uma requisição do tipo POST em cima da url /usuarios
app.post('/usuarios', (req, resp) => {  //requisição e resposta
    console.log(req.body) // pra saber o que de fato chegou no corpo da requisição
    resp.send('Parabéns') // mandando resposta de parabens
})

app.listen(3003) //trazendo a porta em que foi inserido no form.html
