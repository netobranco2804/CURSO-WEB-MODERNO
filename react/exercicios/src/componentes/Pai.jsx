import React from 'react'
import Filho from './Filho' // já que aqui é o pai, importou o filho

//Criando componente funcional

export default props =>
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <h2>Filhos</h2>
    <ul>
        <Filho nome="Pedro" sobrenome={props.sobrenome} />
        <Filho {...props} /> {/* usando operador spred, todas as propriedades que veio do pai, esta agora jogando dentro de filho*/}
        <Filho {...props} nome="Carla" />
        </ul>
</div>