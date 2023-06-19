const a = 7;
let b = 3;

b += a // fazendo atribuicao aditiva/adição, nao esta substituindo o valor de um por outro, está apenas acrescentando o valor de a para variavel b somando os dois
// b = b + a
console.log(b); // valor = 10

b -= 4 // Agora b é 10 do resultado a cima, porém b - 4 (10-4)=6
console.log(b)

b *= 2 
console.log(b) // O valor de b passou a ser 6, agora b * 2 = 12

b /= 2 // o valor de b passou a ser 12, agora b / 2 = 6
console.log(b)

b %= 2 // Se o valor atribuido na variavel b for par, resltado é 0, se impar resultado é 1
console.log(b);