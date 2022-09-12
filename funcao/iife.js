/*IIFE = Immediately invoked function expression*/
//Qualquer coisa que você criar ai dentro dessa função, estara apenas disponivel dentro dessa função.
(function() {
    console.log('Sera executado na hora!')
    console.log('Foge do escopo mais abrangente!')
}) () // invocando a função imediatamente através do ()