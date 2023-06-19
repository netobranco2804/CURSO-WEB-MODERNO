import { divide } from 'lodash'
import React from 'react'
import ReactDOM from 'react-dom' // renderiza o primeiro elemento dentro da nossa página



import Pai from './componentes/Pai'
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" />
    </div>
,document.getElementById('root'))


// import Saudacao from './componentes/Saudacao'

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João" />
//     </div>
// ,document.getElementById('root'))


// import {BoaTarde, BoaNoite} from './componentes/Multiplos'
// ReactDOM.render(
//    <div>
//        <BoaTarde nome="Ana" />
//        <BoaNoite nome="Neto" />
//    </div>
// , document.getElementById('root')
// )

//import BomDia from './componentes/BomDia'
//ReactDOM.render(<BomDia nome="Neto"/>, document.getElementById('root'))


// const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// pode ser feito assim também:
// ReactDOM.render(<h1>React</h1>, document.getElementById('root'))