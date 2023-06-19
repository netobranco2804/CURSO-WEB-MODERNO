function gerarNumerosEntre(min, max){
    if(min > max) {
        [max, min] = [min, max] //invertendo min pra max, e max pra min
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min 
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 30)
.then(console.log)


//Pode deixar o numero sendo multiplicado na proxima execução e assim vai
gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)