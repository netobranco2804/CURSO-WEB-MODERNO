// Estanciando uma função com new, esse é o unico jeito de criar um objeto
console.log(typeof Object);
console.log(typeof new Object());

// criando sua propria funcao
const Cliente = function() {}
    console.log(typeof Cliente);
    console.log(typeof new Cliente());

// Criando classe
class Produto {} // ES 2015 (ES6) Nova versão java
console.log(typeof Produto);
console.log(typeof new Produto());