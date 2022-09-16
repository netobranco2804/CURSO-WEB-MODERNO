// middleware pattern (chain or responsability)
//ctx de contexto
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

//sem chamar o next do middle
const passo3 = ctx => ctx.valor3 = 'mid3'

//criando a função para chamar todos os middle, passo1/passo2/passo3
const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
//primeiro passo verificar se esse array esta setado middlewares
//Se middlewares for true && = 'e' o indice for menor do que o comprimento do array ='middlewares.lenght'
        middlewares && indice < middlewares.lenght &&
            middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)