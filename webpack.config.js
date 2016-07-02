var webpack = require('webpack');
var path = require('path');

var env = 'developments';

module.exports = {
    name: 'client',
    entry: "./src/SlideOver.js",
    output: {
        path: __dirname,
        filename: "./dist/SlideOver.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env)
            }
        })
    ]
}
