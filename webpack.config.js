
    const path = require('path');
    
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const isDevelopment = process.env.NODE_ENV !== 'production';

    

    module.exports = {
        mode : isDevelopment ? 'development' : 'production',
        devtool : isDevelopment ? 'eval-source-map' : 'source-map',
        entry : path.resolve(__dirname, 'src', 'index.jsx'), //passando caminho do arquivo de entrada
        output : {
            path : path.resolve(__dirname, 'dist'), //passando caminho do aqruivo de saida
            filename : 'bundle.js'
        },
        resolve : {
            extensions : ['.js', '.jsx'] //extensoes que vou utilizar
        },
        devServer : {
            static : './', //Configuração do webpack server, para o webpack observar as modificações sem ter que rodar um yarn webpack no terminal toda vez
            hot : true,
        },
        plugins : [
            new HtmlWebpackPlugin({
                template : path.resolve(__dirname, 'public', 'index.html'),
            }),
        ],
        module : {
            rules : [
                {
                    test : /\.jsx$/,
                    exclude : /node_modules/,
                    use : "babel-loader"
                },
                {
                    test : /\.scss$/,
                    exclude : /node_modules/,
                    use : ['style-loader', 'css-loader', 'sass-loader']
                },
            ],
        },
    };