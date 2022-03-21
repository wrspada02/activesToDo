
    module.exports = {
        "presets": [
            '@babel/preset-env',
            ['@babel/preset-react', {
                runtime: 'automatic' //So preciso importar o react no arquivo raiz "index.jsx"
            }]
            ]
        }