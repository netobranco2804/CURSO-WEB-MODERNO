function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('Final')
}
//teste1(6)
//teste1(8)

/*
cuidado com o ;, não usar com as estruturas de controle
Se usar ; como no exemplo a baixo, o código não ira verificar se o numero é maior ou não
e apresentara como resultado apenas os dois numeros pedidos a baixo, sem saber qual é
maior ou menor
*/
function teste2(num) {
    if(num > 7); { 
        console.log(num)
    }
}
//teste2(6)
//teste2(8)

/*Maneira correta de se fazer o código IF*/
function teste2(num) {
    if(num > 7) { 
        console.log(num)
    }
}
teste2(6)
teste2(8)