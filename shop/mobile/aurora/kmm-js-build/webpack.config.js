const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kmm.min.js',
        library: 'kmm',
        libraryTarget: 'umd',
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
        modules: [path.resolve(__dirname, 'src')],
    },
    mode: 'development',
    devtool: 'sourceMap',
};