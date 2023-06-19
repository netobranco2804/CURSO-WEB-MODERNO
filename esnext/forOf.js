//Equando (for in) opera em cima de indices, o (for Of) opera sem cima de valores
for (let letra of 'Cod3r') {
    console.log(letra) // resultado     C, o, d, 3, r
}


//for in através do (i = indice)
const assuntoEcma = ['map', 'set', 'promise']
for (let i in assuntoEcma) {
    console.log(i) //resultado     0, 1 e 2
}

//for of através do (valor = string)
for (let assunto of assuntoEcma) {
    console.log(assunto) // resultado    map, set e promise
}



//Fazendo com Map
const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: false }],
    ['Promise', { aborado: false }]
])

//percorrer esse map de algumas formas diferentes
//Forma que você vai receber tanto a chave como valor
for (let assunto of assuntosMap) {
    console.log(assunto) // resultado = imprimiu os arrays com chave e valor
}

//percorrendo somente a chave
for (let chave of assuntosMap.keys()) {
    console.log(chave) //resultado = map, set e promise
}

//percorrendo somente o valor
for (let valor of assuntosMap.values()) {
    console.log(valor) // resultado = true, true e false
}

//percorrendo as entradas, entries
//é possível fazer um destructuring, desestruturando um array ja que as entradas vão ser um  array, pegando pela chave e valor
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl) //resultado = chave e valor sem o array
}


//Você também pode percorrer um Set, como percorrer um map, tanto apartir de entries/values/keys ou diretamente apartir do map
const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra) // resultado a, b , c
}