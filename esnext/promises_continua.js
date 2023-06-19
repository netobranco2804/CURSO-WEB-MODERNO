/* Promises = promessa
Você usa promises quando vocÊ quer ter um tipo de processamento assincrono
Promise tem dois grandes destinos que é: Ela ser resolvida/atendida = promessa cumprida
 ou então a promessa foi rejeitada*/

//Criei uma função que recebe dois parametros e retorna uma promessa
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { //delay até que essa promessa seja atendida
            resolve(frase) //resolve só aceita um parametro, se tentar por outro ele ignora
        }, segundos * 1000)
    })
}

//função .then pode ser chamada quantas vezes quiser, sendo encadeada uma em baixo da outra
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) //depois de esperar os 3 segundos, ele concatena (Que legal! para Que legal!?!?)
    .then.apply(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // catch para fazer o tratamento do erro, no caso no lugar de resolve seria reject