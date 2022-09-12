 class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
 }
 /*extends forma no anbito de sintasse de classe de definir que uma determinada classe
 tem outra classe como prototipo, ou que uma determinada função gerada apartir daquela classe
 tera como prototipo uma outra função que sera gerada apartir da classe avo*/
 class Pai extends Avo {
    constructor(sobrenome,profissao = 'Professor') {
        super(sobrenome) //forma de chamar função construtora da super classe, super classe de pai é avo
        this.profissao = profissao
    }
 }

 class Filho extends Pai {
    constructor(){
        super('Silva')
    }
 }
 
 const filho = new Filho
 console.log(filho)