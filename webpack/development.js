"use strict";

const path                   = require("path");
const webpack                = require("webpack");
const merge                  = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common                 = require("./common.js");

module.exports = merge(common, {
    mode:   "development",
    output: {
        filename: "static/scripts/[name].js",
        pathinfo: false,
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks:      false,
        splitChunks:            false,
    },
    devtool: "inline-source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new webpack.EnvironmentPlugin({
            BASE_URL:     'http://0.0.0.0:3000',
            API_BASE_URL: 'http://ec2-15-165-5.ap-northeast-2.compute.amazonaws.com:8080',
        })
    ],
    devServer: {
        historyApiFallback: true,
        contentBase:        path.resolve(__dirname, "../public"),
        watchContentBase:   true,
        open:               true,
        inline:             true,
        hot:                true,
        port:               3000,
        host:               '0.0.0.0',
        disableHostCheck:   true
    },
    watchOptions: {
        ignored: /node_modules/,
    }
});
