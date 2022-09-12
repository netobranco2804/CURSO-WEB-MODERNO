const a = 1
const b = 2
const c = 3

//as duas maneiras obj1 e obj2 dão o mesmo valor
const obj1 = {a: a, b: b, c: c}
const obj2 = {a,b,c} // reduzido
console.log(obj1, obj2)

//outra forma
const nomeAtributo = 'nota'
const valorAtributo = 8.02

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

//reduzido
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

//forma de criar funções em objeto
const obj5 = {
    funcao1: function(){
        //..
    },
    funcao2() {
        //...
    }
}
console.log(obj5)