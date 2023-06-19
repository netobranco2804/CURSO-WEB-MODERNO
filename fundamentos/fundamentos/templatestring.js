const nome = "Neto";
const concatenacao = 'Olá ' + nome + '!'; //Forma feia, porém funcional



const template = `
Olá
${nome}!
`
console.log(concatenacao, template); // forma mais elegante, também funcional

//Expressões

console.log(`1 + 1 = ${1+1}`); // soma o que ta dentro da espressão ($ {})

//Função que converte letras minusculas para Maiusculas
const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up("cuidado")}`);