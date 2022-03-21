
    module.exports = {
        presets : [
            '@babel/preset-env',
            ['@babel/preset-react', {
                runtime : 'automatic' //Para não precisarmos importar o React em todos nossos arquivos jsx
            }]
        ]
    };