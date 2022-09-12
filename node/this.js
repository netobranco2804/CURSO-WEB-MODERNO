console.log(this === global) //false
console.log(this === module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

//Dentro de uma função o this não aponta para exports = false
//Mas this dentro de uma função aponta para Global
function logThis() {
    console.log('Dentro de uma função..')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true
}

logThis()