  let a = 1
  console.log(a)

// você vai ter uma promessa de algo que sera executado no futuro e algo que tbm sera devolvido no futuro
 let p = new Promise(function(cumprirPromessa) {
     cumprirPromessa(3) //uma promessa só pode ser lida se tiver apenas um valor
 }) 
p.then(function(valor) {
    console.log(valor) // valor 3, pois puxa a função (cumprirPromessa(3))
 })

