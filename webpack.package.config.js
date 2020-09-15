const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const config = {
    output: {
        filename: "index.js",
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        libraryExport: 'default',
        library: 'Millions',
        libraryTarget: 'umd'
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                    }
                ]
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use:[{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.scss$/,
                loaders: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new VueLoaderPlugin(),
    ]
}
module.exports = config;
