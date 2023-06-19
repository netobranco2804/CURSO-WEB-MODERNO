let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);


// ! = negação, se tiver na frente de um valor verdadeiro, ele pessara a ser falso
// !! = volta para o valor original que era, no caso verdadeiro
// ! = não !! = não não
isAtivo = 1
console.log(!isAtivo) // FALSE
console.log(!!isAtivo) // TRUE

//Mostrando todos os verdadeiros
console.log('os verdadeiros...')
console.log(!!3) //true
console.log(!!-1) //true
console.log(!!' ')//true - pois tem um espaço, se não tivesse seria false
console.log(!![])//true
console.log(!!{})//true
console.log(!!Infinity)//true
console.log(!!(isAtivo = true))//true

//Mostrando todos os falsos
console.log('os falsos...')
console.log(!!0)//false
console.log(!!'')//false, pois não tem nada dentro dessa string
console.log(!!null) //false
console.log(!!NaN)//false
console.log(!!undefined)//false
console.log(!!(isAtivo = false))//false pois ira olhar o resultado (=false), nem testara a negação


console.log('pra finalizar....')
// || = Ou
console.log(!!('' || null || 0 || ' ')) //true, porque uma delas é verdadeira, a string com espaço no meio (' ')

/*
se tirar a negação !!, também ira retornar a unica opção verdadeira, que no caso será o resultado "epa"
*/
console.log(('' || null || 0 || 'epa')) // resultado 'epa'


/* 
Um exemplo, você tem uma variavel nome sem estar preenchida com nenhuma informação, você pode fazer esse esquema
do || = ou
Se não tiver algum nome presente, chame a segunda opção 'Desconhecido'
Caso a primeira opção (nome) não seja valida, use a segunda opção como um valor padrão
*/
let nome = ''
console.log(nome || 'Desconhecido') // resultado = Desconhecido