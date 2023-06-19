/* não aceita repetição e não é indexido, por exemplo me de um elemnto de indice 2, não é possivel pelo set,
 só tem como ser feito por um array */
 const times = new Set()
 times.add('Vasco')
 times.add('São Paulo').add('Palmeiras').add('Corinthians') // pode ser feito assim, de forma encadeada também!
 times.add('Flamengo')
 times.add('Vasco') //ele não aceita repetição, vai ser apenas ignorado e seguir com o resto.
 
 console.log(times)
 console.log(times.size)
 console.log(times.has('vasco')) // verificar se tem vasco dentro de times = false deu false pois está com o v minusculo
 console.log(times.has('Vasco')) // true
 times.delete('Flamengo')
 console.log(times.has('Flamengo')) //Resultado falso, porque flamengo foi deletado na linha 13


 //Com set também pode criar um array tradicional
 const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
 const nomesSet = new Set(nomes)
 console.log(nomesSet) // 1 Lucas foi ignorado, pois mais uma vez, o set não aceita repetição de elementos