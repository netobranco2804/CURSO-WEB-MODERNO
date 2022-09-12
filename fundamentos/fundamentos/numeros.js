const peso1 = 1.0;
const peso2 = Number('2.0'); //Number atribui string em forma de numero
console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // Verificar se o  numero é inteiro

const avaliacao1 = 9.850;
const avaliacao2 = 8.244;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media); // imprimiria normal o resultado mais com todas as classes decimais
console.log(media.toFixed(2)); // tofixed Deixar para mostrar somente duas classes decimais