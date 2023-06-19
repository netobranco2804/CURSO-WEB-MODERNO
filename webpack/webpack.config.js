// Esse é um arquivo que vai ser intrepretado pelo Node
//Iremos usar dentro dele o comportamento, sintaxe que o node entende

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    //primeira coisa, adicionar modo desenvolvimento, para que la na frente também conseguir disparar ele no modo produção
    mode: 'development',
    entry: './src/principal.js', // ponto de entrada
    output: { //configurar o arquivo de saida e pasta de saida
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({  //função, pois esta instanciando uma função construtora
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{ //acrescentar os loaders resposaveis para ler arquivos css
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
              //comenta esse plugin, porque o de cima conflita com ele  'style-loader', //adicionar css a Dom injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader'
            ]
        }]
    }
}