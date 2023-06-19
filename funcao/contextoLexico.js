const valor = 'Global'
function minhaFuncao(){
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

/* Uma função carrega consigo o local em que ela foi definida
fazendo com que ela procure dentro do scropo lexico na qual ela foi definida
Então no exemplo ai, ela não achou 'LOCAL', porque ela vai procurar no scropo mais abrangente
e não no local de execução da linha 10, e sim no local onde foi definida na linha 1
resultado: GLOBAL */