 const soma = function (x, y) { //função anonima é uma função sem nome, simplesmente isso! 
    return x + y
 }

 const imprimirResultado = function (a, b, operacao = soma) { //agora para chamar a função no console por soma não ira mais precisar, tera que chamar por operacao pois passou a ser esse agora
    console.log(operacao(a, b))
 }

 imprimirResultado(3, 4) //resultado 7
 imprimirResultado(3, 4, soma) // passando função soma explicitamente, que no caso daria a msm coisa = 7
 imprimirResultado(3, 4, function (x, y) { //passando outra função dentro de resultado (temos 3 parametros agora com a nova function)
    return x - y // resultado : -1     (3-4) pois não utilizou a função soma a cima e sim diretamente a nova criada aqui
 })

 imprimirResultado(3, 4, (x, y) => x * y) // resultado = 12

 //Funcão anonima dentro de objeto
 const pessoa = {
    falar: function () {
        console.log('Opa')
    }
 }
 pessoa.falar() //acessando a função anon ima apartir de um atributo do objeto que você definiu, objeto + valor