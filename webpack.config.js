var webpack = require('webpack');
var path = require('path');

module.exports = {
    name: 'client',
    entry: "./SlideOver.js",
    output: {
        path: __dirname,
        filename: "./dist/slideover.js",
        libraryTarget: "umd"
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
    }
}
