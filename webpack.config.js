'use strict'

const path = require('path')
const BUILD_DIR = path.resolve(__dirname, ".")
const APP_DIR = path.resolve(__dirname, "lib")

const config = {
    entry: APP_DIR + '/i18n.js',
    cache: true,
    devtool: 'source-map',
    output: {
        path: BUILD_DIR,
        filename: 'index.js',
        library: 'i18n',
        libraryTarget: 'commonjs2',

    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: [
                    APP_DIR,
                    path.resolve(__dirname, "node_modules/proxy-polyfill")
                ],
                loader: 'babel-loader'
            }
        ]
    }
}
module.exports = config