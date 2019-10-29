const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInline = require('html-webpack-inline-source-plugin');

const Webpack = require('webpack');
const Path = require('path');

module.exports = (env) => ({
    context: __dirname,
    entry: ['./src/index.ts'],
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    devtool: env === 'production' ? false : 'source-map',
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js', '.ts', '.vue'],
        modules: ['.', 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.vue$/, loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader',
                        tsx: 'ts-loader',
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]'
                            }
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                includePaths: ['src']
                            }
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new Webpack.DefinePlugin({
            __PRODUCTION__: JSON.stringify(env === 'production')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inlineSource: env === 'production' ? '.(js|css)$' : false
        }),
        new HtmlWebpackInline(HtmlWebpackPlugin)
    ],
    mode: 'development',
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        port: 9000,
        historyApiFallback: true,
        watchOptions: {
            ignored: /node_modules/
        }
    },
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                terserOptions: {
                    output: {
                        comments: false
                    }
                }
            })
        ]
    }
});