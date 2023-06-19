// ou pode ser feito assim para  ler outros valores juntos:
let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x:1,
        y:2
    })
})


p.then(function(valor) {
console.log(valor.x) // pra chamar se caso fosse igual o exemplo comentado acima 
})
