//Math é um objeto dentro de java, só pra Lembrar
console.log(Math.ceil(6.1)); //ceil operar um arredondamento, ele leva pro teto/cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome);

//usando this. deixa visivel para fora, deixando de modo púbico, onde pode ser puxado logo a baixo
function Obj (nome) {
    this.nome = nome;
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2);
console.log(obj3);