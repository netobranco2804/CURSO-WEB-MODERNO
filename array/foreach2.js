//Implementando o  método forEach para funcionar execução a baixo, pois forEach2 Não existe.
//CRIANDO UM METODO QUE NÃO EXISTE (SIMULANDO)
Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++) { //começar o indice por 0, indice tem que ser menor que o tamanho do array, i++ ir somando de 0 pra 1, 2, 3 e por ai vai seguindo a ordem crescente
        callback(this[i], i, this) //acessando o indice i que vai de 0 em diante, indice de novo, this=array completo
    }
}

const aprovados = ['Aghata', 'Renan', 'Joao', 'Maiki']
aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})