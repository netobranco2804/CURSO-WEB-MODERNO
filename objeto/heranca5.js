console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//reverse = reverter string
//split = quebrar a string em cada uma das letras, gerar uma array com todas as letas da string
//join = juntar novamente todos os elementos na string
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log('Escola Coder'.reverse())

//retornar primeiro elemento do array
Array.prototype.first = function() {
    return this[0]
}
console.log([1,2,3,4,5].first())
console.log(['a', 'b', 'c'].first())