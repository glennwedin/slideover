var webpack = require('webpack');
var path = require('path');

var env = 'development';

module.exports = {
    name: 'client',
    entry: "./SlideOver.js",
    output: {
        path: __dirname,
        filename: "./dist/slideover.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ["style", "scss", "sass"]
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
