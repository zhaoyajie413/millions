//html模板
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//压缩js
const TerserPlugin = require('terser-webpack-plugin');
//gzip
const CompressionPlugin = require("compression-webpack-plugin");
//css-loader 提取css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");
const path = require('path');

const config = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: "[name].bundle.js",
        // 将输出的文件都放在dist目录下
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        chunkFilename:'static/js/[name].chunk.js',
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
    optimization: { //与entry同级
        splitChunks: {
            chunks: 'all',
            name: false,
            cacheGroups: {
                anted: {
                    test: /ant-design-vue/,
                    name: 'anted',
                    minChunks: 1,
                    priority: 4
                },
                vue: {
                    test: /vue/,
                    name: 'vue',
                    minChunks: 1,
                    priority: 4
                },
                codemirror: {
                    test: /codemirror/,
                    name: 'codemirror',
                    minChunks: 1,
                    priority: 4
                },
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                   // maxSize:1.5*1024*1024,
                    minChunks: 1,
                    priority: 2
                },
                common:{
                    name:'testCommon', // 打包后的文件名
                    minSize: 0,
                    minChunks: 2 // 重复2次才能打包到此模块
                },
            }
        },
        // Keep the runtime chunk separated to enable long term caching
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
        minimizer: [
           new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    parse: {
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2,
                    },
                    mangle: {
                        safari10: true,
                    },
                    keep_classnames:true,
                    keep_fnames:true,
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { minifyFontValues: { removeQuotes: false } }],
                },
            }),
        ]
    },
        plugins: [
            new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            inject: true,
            template: './doc/index.html' ,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new VueLoaderPlugin(),
        new CompressionPlugin({
            filename: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
            algorithm: 'gzip',//算法
            test: /\.(js|css)$/,    //压缩 js 与 css
            threshold: 10240,//只处理比这个值大的资源。按字节计算
            minRatio: 0.8//只有压缩率比这个值小的资源才会被处理
        }),
         //new BundleAnalyzerPlugin()
    ],
    resolve: {
        alias: {
            // 别名
            vue$: "vue/dist/vue.esm.js", //加上这一句
            "@":path.resolve(__dirname, "doc/"),
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
