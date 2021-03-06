'use strict'

const path = require('path')
const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

const config = {
    entry: APP_DIR + '/index.js',
    cache: true,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    }
}
module.exports = config