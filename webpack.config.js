
    const path = require('path');
    
    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const isDevelopment = process.env.NODE_ENV !== 'production';


    module.exports = {
        mode : isDevelopment ? 'development' : 'production',
        
        devtool : isDevelopment ? 'eval-source-map' : 'source-map',
        entry : path.resolve(__dirname, 'src', 'index.tsx'), //passando caminho do arquivo de entrada
        output : {
            path : path.resolve(__dirname, 'dist'), //passando caminho do aqruivo de saida
            filename : 'bundle.js'
        },
        resolve : {
            extensions : ['.js', '.jsx', '.ts', '.tsx'] //extensoes que vou utilizar
        },
        devServer : {
            static : './', //Configuração do webpack server, para o webpack observar as modificações sem ter que rodar um yarn webpack no terminal toda vez
            hot : true,
        },
        plugins : [
            isDevelopment && new ReactRefreshWebpackPlugin(),
            new HtmlWebpackPlugin({
                template : path.resolve(__dirname, 'public', 'index.html'),
            }),
        ].filter(Boolean),
        
        module : {
            rules : [
                {
                    test : /\.(j|t)sx$/,
                    exclude : /node_modules/,
                    use : {
                        loader : 'babel-loader',
                        options : {
                            plugins : [
                                isDevelopment && require.resolve('react-refresh/babel')
                            ].filter(Boolean)
                        },
                    },
                },
                {
                    test : /\.scss$/,
                    exclude : /node_modules/,
                    use : ['style-loader', 'css-loader', 'sass-loader']
                },
            ],
        },
    };