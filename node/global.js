// console.log(global) Uma vez criado em global, ficara disponível para fora do código e qlq um tera acesso
globalThis.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares!!'
    },
    nome: 'Sistema Neto'
}
//pra que funcione e fique em um escoplo global, preciso importar ele em globalCliente.js