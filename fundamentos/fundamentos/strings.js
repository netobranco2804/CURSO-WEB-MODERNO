const escola = "Cod3r";
console.log(escola.charAt(4));
console.log(escola.charCodeAt(3)); //Mostra Código relacionado a ele
console.log(escola.indexOf("r")); // começa contando por 0/1/2
console.log(escola.substring(1)); // Pula o primeiro e mostra o restante
console.log(escola.substring(0, 3)); // mostra o primeiro e vai até o indicado(3)
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e")); // pegar item presente na palavra e substituir por outro item
console.log("Ana,Maria,Pedro".split(",")); // Gera um array, organiza os espaços indicando a letra