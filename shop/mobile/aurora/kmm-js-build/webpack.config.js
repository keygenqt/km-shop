const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '../shop/qml/js-webpack'),
        filename: 'kmm.min.js',
        library: 'kmm',
        libraryTarget: 'umd',
        hashFunction: "sha256"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
    },
    mode: 'development',
    devtool: 'sourceMap',
};