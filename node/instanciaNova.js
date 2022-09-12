// Uma factory retorna um novo objeto/função factory
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}