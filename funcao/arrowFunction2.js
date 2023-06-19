function pessoa() {
    this.idade = 0

    //this também não varia, essa é a vantagem de utilizar uma função arrow
    //this apontando para a função pessoa, já que ele foi escrito dentro do bloco (Pessoa)
    setInterval(() => {  //arrow function literal dentro de um setInterval
        this.idade++ // acrescentar de 0 pra 1, depois 2, 3, 4 e por ai vai repetindo de 1 em 1 segundo.
        console.log(this.idade)
    }, 1000) // intervalo onde ficara repetindo de 1 em 1 segundo
}

new pessoa // instanciando a function pessoa para funcionar