/*
 * @Date: 2021-11-03 21:43:51
 * @LastEditors: cunhang_wwei
 * @LastEditTime: 2021-11-03 23:02:53
 * @Description: webpack打包文件 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            skipWaiting: true,
            clientsClaim: true
        }),
        new WebpackPwaManifest({
            name: 'My Progressive Web App',
            short_name: 'MyPWA',
            description: 'My awesome Progressive Web App!',
            theme_color: '#123124',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve('src/assets/logo.png'),
                    sizes: [192, 512] // multiple sizes
                }
            ]
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    }
};
