let comparaComThis = function(param) {   //fazendo função normal global aponta para o this
console.log(this === param)
}
comparaComThis(global) // true
const obj = {}
comparaComThis = comparaComThis.bind(obj) // agora virou obj
comparaComThis(global)// false
comparaComThis(obj) // true

//teste com arrow function =>
let comparaComThisArrow = param => console.log(this === param) // fazendo em função arrow, global não aponta para o this
comparaComThisArrow(global) // false, função arrow nao aponta this para global
comparaComThisArrow(module.exports) // true

//Teste com bind em uma função arrow, para ver se de fato consegue mudar a referencia do this
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false, de fato nao aponta para o obj onde tentei mudar a ref do this
comparaComThisArrow(module.exports) // true, continua apontando para obj que originalmente foi escrito no this