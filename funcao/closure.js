// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variavéis externas à função
// Esse conceito tem muito haver com contexto lexico no qual a função foi declarada fisicamente dentro do seu codigo

//Contexto lexico em ação:

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // retorna o x que está dentro da função FORA