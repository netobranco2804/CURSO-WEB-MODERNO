function Pessoa() {
    this.idade = 0
    const self = this // criando uma const para evitar a variação do this
    setInterval(function() { //  dispara outra função apartir de um determinado intervalo no qual você passou
        self.idade++
        console.log(self.idade)

    }/*.bind(self)*/, 1000) // a cada um segundo essa função anonima que foi passada pelo setinterval vai ser disparada. 
} 

// para a função acima funcionar, precisa instanciar com new a função pessoa
new Pessoa