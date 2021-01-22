const path = require('path');

module.exports = {
    entry: {
        app: './swish/scripts/index.js'
    },
    watch: true,
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'swish/dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        '@babel/react', {
                            'plugins': ['@babel/plugin-proposal-class-properties']
                        }
                    ]
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.js'
        ]
    }
}