//CÓDIGO NÃO EXECUTÁVEL

//Procedural

processamento(valor1, valor2, valor3) //aqui temos função que manipulam dados

//OO
/* aqui você tem dados personalizados, dados que você constroi
você tem um objeto que é uma estrutura que envolve/agrupa tanto atributos, como comportamentos */

objeto = {  
    valor1,
    valor2,
    valor3,
    processamento(){
        // ...
    }
}

objeto.processamento() // O foco passou a ser objeto, onde antes era uma função

//Principios importantes:

/*1. Abstração= pegar um objeto do mundo real e abstrair ele para dentro do seu sistema
é algo muito importante, entender como mapear o mundo que tem seus objetos e suas relações
e como trazer isso para dentro do software*/

/*2. Encapsulamento= é você ter os detalhes de implementações escondidos e você mostrar
pra quem precisa usar aquele sistema ou aquela coisa, mostrar uma interface simples
para que você possa interagir com determinado objeto*/

/*3. Herança= Você recebe atributos e comportamentos de um Objeto PAI, pensando na sua vida
você tem um pai e uma mãe na qual você recebeu caracteristicas atributos do seu pai e atributos da sua mae
Você tem por exemplo: olho azul, cabelo de uma cor parecido com do seu pai, cor da pele
parece com a do pai ou a da mãe ou a mistura dos dois, então você recebe caracteristicas
atributos e comportamentos apartir de uma estrutura PAI*/

/*4. Polimorfismo= significa multiplas formas, é o fato onde por exemplo
você tem um celular, celular é um conceito generico, mas que tipo de celular é esse?
pode ser um iphone, galaxy. samsung, mas apartir do conceito generico você consegue
substituir digamos assim por objetos concretos, você consegue usar um conceiro generico de carro
e uma hora esse carro aponta pra uma ferrari onde você pode acelerar, freiar, ligar e desligar
Uma hora você pode substituir por um carro uno, você pode substituir diferentes conceitos
concretos apartir e trablhar em um nível mais abstrato
Então polimorfisco quer dizer multiplas formas
Você tem uma variavel pai do tipo mais generico (carro) e você pode atribuir nessa variavel
subtipos que seriam ferrari, civic, uno */