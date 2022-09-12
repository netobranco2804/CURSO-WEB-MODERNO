const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
// const falar = pessoa.falar // armazenando dentro de falar a variavel pessoa.falar
// falar() // conflito entre paradigmas: funcional e 00

//BIND É Responsavel por amarrar um determinado objeto para ele ser o dono da execução, sempre que esse metedo for chamado
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
