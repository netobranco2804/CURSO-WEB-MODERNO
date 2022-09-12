//par nome/valor

const saudacao = 'Opa' // contexto léxico 1 = local onde sua variavel foi definida fisicamente no código.

/*Criando uma função, onde podera ser criado
outro const com o mesmo nome sem gerar conflito
Porque você cria dentro de uma função, onde
sera lido somente o que tem dentro do bloco, 
fazendo com que não busque a mesma por fora.*/

function exec() {
    const saudacao = 'Eaeee bro' // contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de chave/valor ou nome/valor
const cliente = {
    nome: 'Neto',
    idade: 24,
    peso: 87,
    endereco: {
        logradouro: 'Rua Capitão Silva Borges',
        numero: 533
    }
}

console.log(saudacao);
console.log(exec()); // puxando somente o que esta dentro do bloco, lembrando que também possui nome igual
console.log(cliente); // puxando const cliente com informações contidas dentro do bloco

