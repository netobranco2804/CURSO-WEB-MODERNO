// coleção dinamica de pares chave/valor

const produto = new Object // Lembrando que aqui esta estanciando um objeto com new, e objeto é uma função
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)

/*Você também consegue excluir os atributos de um objeto apartir do delete  */
delete produto.preco
delete produto['Marca do produto']
console.log(produto)

/*Criando um objeto mais complexo 
Um objeto dentro de outro, temos o objeto carro, que tem o objeto proprietario,
que tem o objeto endereço que tem seus proprios atributos como logradouro, tem o numero e etc..*/
/*Então você tem o carro que é um conjunto de pares, chave e valor*/

const Carro = {
    modelo: 'A4',
    valor: 120000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        },
        condutores: [{ //posso criar um array de objetos
            nome: 'Junior',
            idade: 19
        }, {
            nome: 'Rodrigo',
            idade: 50
        }],
        calcularValorSeguro: function(){ //também poderia ter uma função dentro para calcular o seguro
            //.. Ai iria analisar
            /*Quem são os condutores, a idade dos condutores, se tem bônus por ter muito tempo de seguro
            sem ser usado, coisas do tipo.. */
        }

    }
    
}
// Então vi que um objeto pode conter todas essas coisas que foram mencionadas no curso

//acessando os atributos apartir da anotação ponto:
Carro.proprietario.endereco.numero = 1000 

/*Acessar apartir da anotação conchetes, 
mesmo não tendo definida elas apartir dos conchetes*/
Carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(Carro)

/*Você também pode deletar objetos e tudo o que tiver de baixo daquele atributo*/

delete Carro.condutores
delete Carro.proprietario.endereco
delete Carro.calcularValorSeguro

console.log(Carro)
console.log(Carro.condutores)