const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}


//pegue todos os elementos da tag e percorra todos e faça com que o nome da tag apareça sempre em minusculo
document.querySelectorAll('.tag').forEach(elemento => { //elemento no caso seria a tag
    //pegando nome da tag para saber se é uma tag p, div, h etc
    const tagName = elemento.tagName.toLowerCase() //para todo elemento(tag), acrescente um tagname com letras minusculas

    elemento.style.borderColor = colors.get(tagName) // aplicou uma cor em cima da borda desse elemento

    //Se não tiver essa classe css (nolabel) contido no elemento, aplique o label, se estiver não aplique
    //dentro desse elemento existe uma lista de classes(classlist)
     if(!elemento.classList.contains('nolabel')) {
        //
        const label = document.createElement('label')
        //injetar label em todas as classes tag
        label.style.backgrondColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) // adicionar antes do primeiro elemento filho que estaja presente nessa tag
     }

})