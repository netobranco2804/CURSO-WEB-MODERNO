var funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

//Var imprime para todos o valor de somando 2 + 8 = 10
//Var não foi respeitada