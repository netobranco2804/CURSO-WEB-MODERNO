//Destructuring em nível array

function rand([min = 0, max = 1000]) {
    /* se o minimo for maior do que o max, inverta as duas variaveis  */
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([800]))
console.log(rand([, 10]))
console.log(rand([]))