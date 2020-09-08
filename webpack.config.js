var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

const config = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'index.js',
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    entry: './doc/index.js',
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
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.less$/,
                sideEffects: true,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            paths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            //注意传的参数是一个对象
            template: './doc/index.html'   //传一个模板，就是根目录下的index.html
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            // 别名
            vue$: "vue/dist/vue.esm.js", //加上这一句
            "@pages":path.resolve(__dirname, "doc/pages")
        }
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3001,
        hot: true
    }
};

module.exports = config;
