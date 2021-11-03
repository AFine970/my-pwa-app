/*
 * @Date: 2021-11-03 21:43:51
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-03 22:03:37
 * @Description: webpack打包文件 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
};