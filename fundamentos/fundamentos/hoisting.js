//Java le de cima pra baixo, mas variavel "var" sempre acrescenta outra em cima de forma invisivel (hoisting=joga pra cima)
//mas o resultado é diferente testando
console.log('a = ', a);
var a = 2;
console.log('a = ', a);


// E se colocasse isso dentro de uma função/function?
// O resultado seria o mesmo!

function testevar () {
    console.log('a = ', a)
    var a = 2;
    console.log('a = ', a)
}
testevar();

//Esse efeito de jogar pra cima, acrescentar var pra cima, não funciona com let, da erro.