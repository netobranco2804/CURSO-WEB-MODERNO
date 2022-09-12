const sequencia = {
    _valor: 1, //convenção
    get valor() {return this._valor++},
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //se tentar trazer uma sequencia menor do que ja tem, simplesmente vai ignorar
console.log(sequencia.valor, sequencia._valor)