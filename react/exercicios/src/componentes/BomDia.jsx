import React from 'react'

//lembrando que pra ler mais de um componente, precisa colocalos juntos dentro de uma div, se não daria erro
export default props =>
<div>
 <h1>Bom dia {props.nome} </h1>
 <h2>Até breve!</h2>
 </div>

//também da pra ler mais de um componente se você colocar dentro de um array, mas pra funcionar, precisa de uma key
//No caso essa é a menos usada
/* 

import React from 'react'

export default props => [
 <h1 key='h1'>Bom dia {props.nome} </h1>
 <h2 key='h2'>Até breve!</h2>
]

 */

 //outra possibilidade é fazendo assim:

 /* 
 
 import React, {Fragment} from 'react' 

 export default props =>
 <Fragment>
 <h1>Bom dia {props.nome} </h1>
 <h2>Até breve!</h2>
 <Fragment>
 
 
 */