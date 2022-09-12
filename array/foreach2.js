//Implementando o  método forEach para funcionar execução a baixo, pois forEach2 Não existe.
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Aghata', 'Renan', 'Joao', 'Maiki']
aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})