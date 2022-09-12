const { min } = require('lodash')

require('./global')
console.log(MinhaApp)
console.log(MinhaApp.saudacao())

//pode ser alterado o objeto dentro de global, ou pode utilizar o Objetc.freeze({}) e estando congelado não sera possível alterar
MinhaApp.nome = 'Eita!!!'
console.log(MinhaApp)