//GERANDO OS NUMEROS DA MEGA SENA
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max] //invertendo min pra max, e max pra min
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) { // se ele incluir um numero aleatório
            reject('Numero repitido!')
        } else {
            resolve(aleatorio)
        }
    })
}


async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if (tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)