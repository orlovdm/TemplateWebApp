const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "[name]-bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/inline',
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[ext]',
                //             outputPath: 'fonts/'
                //         }
                //     }
                // ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                // use: [
                //     {
                //         loader: 'file-loader',
                //         options: {
                //             name: '[name].[ext]',
                //             outputPath: 'images/'
                //         }
                //     }
                // ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './public'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};
