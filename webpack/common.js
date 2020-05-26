"use strict";

const path              = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:  'development',
    entry: {
        app:  ['@babel/polyfill', './src/index.js']
    },
    output: {
        filename:   '[name].[hash].js',
        path:       path.resolve(__dirname, '../public'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:    'Cyrano Boilerplate',
            template: './index.html',
            filename: './index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            utils: path.resolve(__dirname, '../src/utils')
        }
    },
    module: {
        rules: [
            {
                test:    /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:     {
                    loader:  'babel-loader'
                },
            },
            {
                test: /\.css$/,
                use:  [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:  [
                    'file-loader'
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:  [
                    'file-loader'
                ],
            },
            {
                test: /\.(csv|tsv)$/,
                use:  [
                    'csv-loader'
                ],
            },
            {
                test: /\.xml$/,
                use:  [
                    'xml-loader'
                ]
            }
        ],
    }
};
