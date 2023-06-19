const funcs = [] // criando array vazio

for (var i = 0; i < 10; i++) { // vai de 0 até 9 incrementando de 1 em 1 = 0, 1, 2, 3 etc.. até 9
    funcs.push(function() { // adicionar um novo elemento no array com push, e adicionar uma função anonima
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

//Var imprime para todos o valor de somando 2 + 8 = 10
//Var não foi respeitada