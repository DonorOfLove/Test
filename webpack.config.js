const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globals = require('./globals.js')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[name][hash][ext]'

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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
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
            new CopyPlugin({
                patterns: [
                    { from: "src/assets/img", to: "assets/img" },
                ],
            }),
     ],
}

