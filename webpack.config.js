const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globals = require('./globals.js')

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: "/testProj/",
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
        plugins: [
        new HtmlWebpackPlugin({
            title: globals.page_meta.title,
            metaKeywords:globals.page_meta.meta_keywords,
            metaDescription:globals.page_meta.meta_description,
            template: path.resolve(__dirname, './src/template.html'),
            templateParameters: globals,
            filename: 'index.html',
        }),
                new MiniCssExtractPlugin(),
     ],
}

