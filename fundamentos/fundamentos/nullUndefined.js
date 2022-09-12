let valor // não inicializada
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);
//console.log(valor.toString()); // Erro! se tentar acessar algo nulo

const produto = {};
console.log(produto.preco); // daria undefined pois preco não possui um valor
console.log(produto);

produto.preco = 3.50; //agora setou o preco
console.log(produto);

produto.preco = undefined // evitar atribuir undefined
console.log(!!produto.preco); // !! atribui falso ou true - converteu para boolean
// delete produto.preco
console.log(produto);

produto.preco = null // sem preço, forma mais adequada
console.log(!!produto.preco);
console.log(produto);
