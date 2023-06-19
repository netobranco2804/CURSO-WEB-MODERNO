let funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}
funcs[0]()
funcs[8]() // pode adicionar qualquer numero, ele vai estar presente, desde que seja menor que 10.
funcs[9]()

//Let imprime certo, respeitando a ordem. Evitar uso de Var