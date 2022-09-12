class Lancamento {
    constructor(nome='Generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes,ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
/*A baixo no addLancametos esse (...)receber um ou mais lancamentos 
e no final ele concatena todos esses parametros em um array */
/*forEach foi feito em lancamentos que passei como parametro
e deu push no array que pertence ao objeto acima class CicloFinanceiro */
    addLancamentos(...lancamentos) {  
        lancamentos.forEach(l => this.lancamentos.push(l)) 
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz) // (...)receber um ou mais lancamentos, exemplo a cima
console.log(contas.sumario())