function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor= isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //se não for um numero, retorne o proprio valor. Se for um valor numerico, ele vai aplicar um mascara colocando real R$ com tofixed 2, tendo então duas casas decimais
        resultado.push(partes[indice], valor)
    })
    return resultado.join('') // junta todos os elementos desse array resultado e gerar a string no final
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)
