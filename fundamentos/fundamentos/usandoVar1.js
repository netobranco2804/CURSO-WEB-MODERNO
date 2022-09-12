//Variavel var dentro de um bloco de codigo que nao seja uma função, ficara visivel para todos, mesmo estando fora do bloco.

{
    {
        {
            {
                var sera = "Sera??"
            }
        }
    }
}

console.log(sera);

// outro exemplo
// Essa opção só mostrara o resultado se estiver dentro do bloco

function teste() {
    var local = 123
    console.log(local);
}
teste();
