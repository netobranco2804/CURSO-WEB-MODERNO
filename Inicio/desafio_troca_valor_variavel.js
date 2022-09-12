var a = 7;
var b = 94;

//Trocar valores das variaveis, a=94/b=7

var temp = a; //criar variavel temporaria para substituir valor de A, se não apenas duplica o resultado
a = b;
b = temp;

console.log(a,b);
