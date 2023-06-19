import React, { Component } from 'react'

export default class Saudacao extends Component {

    /* Implementando função para que você consiga editar o input dentro da web, pois se não adicionar isso
    Você podera enchergar o input com seus valores, porem não sera possível apagar o que tem dentro, ou digitar qualquer letra
    Pra isso é preciso adicionar o setTipo(e) = evento(e) + onChange para que isso aconteça
    * LEMBRANDO QUE (State) pode ser alterado qualquer valor dentro do input, então adicionei para conseguir alterar
      JÁ O (Props), não pode ser alterado nada dentro do input*/

    //Pode setar um valor através desse arquivo jsx, e também pode trazer outro valor setado no outro arquivo como por exemplo o index.js
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
        //tipo: "Fala",
        //nome: "Pedro"
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
        /*Feito isso, agora basta alterar na função render de props para state
        que sera possível realizar a edição dentro do input tipo.*/

        // console.log(e.target.value) // Somente captura o evento no f12(console)
        // this.props.tipo = e.target.value
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state //se deixar aqui this.props não da pra alterar, então chamando o state que foi criado logo a cima, sera possível editar seu input
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}



    /*Apresentando uma função construtora, pode servir como o exemplo a cima, mas feita de outra forma
    como por exemplo: */

//     state = {
//         tipo: this.props.tipo,
//         nome: this.props.nome
//     }


//     constructor(props){
//         super(props) //chamar o super pra manter a compatibilidade, se não dara erro sem ele
//         this.setTipo = this.setTipo.bind(this) //fazendo o bind, você ira garantir que a função onchange também chame ele de forma mais simples do que a versão a cima
//         this.setNome = this.setNome.bind(this)
//     }

//     setTipo(e) {
//         this.setState({ tipo: e.target.value })
    
//     }

//     setNome(e) {
//         this.setState({ nome: e.target.value })
//     }

//     render() {
//         const { tipo, nome } = this.state 
//         return (
//             <div>
//                 <h1>{tipo} {nome}!</h1>
//                 <hr />
//                 <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
//                 <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome} />
//             </div>
//         )
//     }
// }