
    const path = require('path');

    module.exports = {
        entry : path.resolve(__dirname, 'src', 'index.jsx'), //passando caminho do arquivo de entrada
        output : {
            path : path.resolve(__dirname, 'dist'), //passando caminho do aqruivo de saida
            filename : 'bundle.js'
        },
        resolve : {
            extensions : ['.js', '.jsx'] //extensoes que vou utilizar
        },
        module : {
            rules : [
                {
                    test : /\.jsx$/,
                    exclude : /node_modules/,
                    use : "babel-loader"
                }
            ],
        }
    };