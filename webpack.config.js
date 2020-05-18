const path = require('path');

module.exports = {
    entry:  './src/index.js',
    output: {
        filename: 'bundle.js',
        path:     path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { // css style loader
                test: /\.css$/,
                use:  [
                    'style-loader',
                    'css-loader'
                ],
            },
            { //image loader
                test: /\.(png|svg|jpg|gif)$/,
                use:  [
                    'file-loader'
                ],
            },
            { //font loader
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use : [
                    'file-loader'
                ],
            },
            { //data loader
                test: /\.(csv|tsv)$/,
                use : [
                    'csv-loader'
                ],
            },
            { //data loader
                test: /\.xml$/,
                use : [
                    'xml-loader'
                ]
            }
        ],
    },
};
