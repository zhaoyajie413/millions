var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

const config = {
    mode: 'development',
    //devtool: 'source-map',
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
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    minSize: 0,
                    minChunks: 1,
                    chunks: 'initial',
                    priority: 2 // 该配置项是设置处理的优先级，数值越大越优先处理
                },
                commons: {
                    name: "comomns",
                    test: path.resolve(__dirname,"src"), // 可自定义拓展规则
                    minChunks: 2, // 最小共用次数
                    minSize: 0,   //代码最小多大，进行抽离
                    priority: 1, //该配置项是设置处理的优先级，数值越大越优先处理
                }
             }
            },
            minimizer: [
                new ParallelUglifyPlugin({
                    cacheDir: '.cache/', //缓存压缩，默认不缓存，设置存放位置开启
                    test: /.js$/, //匹配需要压缩的文件，默认为/.js$/和Loader配置一样
                    //include: [], 使用正则去选择需要被压缩的文件和Loader配置一样
                    //exclude: [], 使用正则去去除不需要被压缩的文件和Loader配置一样
                    //workerCount: 2, 开启几个子进程并发执行压缩
                    // sourceMap: false, 是否输出source Map，开启会导致压缩变慢
                    // uglifyJS: {}, 用于压缩ES6代码不可和uglifyJS同时使用
                    uglifyJS: {//压缩ES5代码
                        output: {
                            // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
                            beautify: false,
                            //是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                            comments: false
                        },
                        compress: {
                            //是否在UglifyJS删除没有用到的代码时输出警告信息，默认为输出
                            warnings: false,
                            //是否删除代码中所有的console语句，默认为不删除，开启后，会删除所有的console语句
                            drop_console: true,
                            //是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 1, 默认为否
                            collapse_vars: true,
                            // 提取出现多次但是没有定义成变量去引用的静态值
                            reduce_vars: true
                        }
                    },
                }),
            ]
        },
        plugins: [
        new htmlWebpackPlugin({
            //注意传的参数是一个对象
            template: './doc/index.html'   //传一个模板，就是根目录下的index.html
        }),
        new VueLoaderPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
            algorithm: 'gzip',//算法
            test: /\.(js|css)$/,    //压缩 js 与 css
            threshold: 10240,//只处理比这个值大的资源。按字节计算
            minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        })
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
