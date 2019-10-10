/**
 * Created by amit on 4/23/18.
 */

const path = require('path');
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextWebpack = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");

const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const commonPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            // warnings: false,
            // screw_ie8: true,
            // conditionals: true,
            // unused: true,
            // drop_console: true,
            // comparisons: true,
            // sequences: true,
            // dead_code: true,
            // evaluate: true,
            // if_return: true,
            // join_vars: true
        },
        output: {
            comments: false
        }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new PreloadWebpackPlugin({
        rel: 'preload',
        as: 'script',
        include: 'all',
        fileBlacklist: [/\.(css|map)$/, /base?.+/]
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
];


const browserConfig = {
    entry: "./src/browser/index.js",
    output: {
        path: __dirname,
        filename: "./public/js/bundle.js"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, "")
                }
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader', 'sass-loader'],
                }),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {importLoaders: 1}
                        },
                        {
                            loader: "postcss-loader",
                            options: {plugins: [autoprefixer()]}
                        }
                    ]
                })
            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {presets: ["react-app"]}
            }
        ]
    },
    plugins: [
        ...commonPlugins,
        new ExtractTextPlugin({
            filename: "public/css/[name].css"
        }),
        new ExtractTextWebpack({
            filename: 'public/css/bundle.css'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'public/js/[name].js',   // vendor.[chunkhash].js for hashed name
            minChunks (module) {
                return module.context &&
                    module.context.indexOf('node_modules') >= 0;
            }
        }),
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        }),
    ]
};

const serverConfig = {
    entry: "./src/server/index.js",
    target: "node",
    output: {
        path: __dirname,
        filename: "server.js",
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                    name: "public/media/[name].[ext]",
                    publicPath: url => url.replace(/public/, ""),
                    emit: false
                }
            },
            {
                test: /\.sass/,
                loader: ['css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "css-loader/locals"
                    }
                ]
            },
            {
                test: /js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {presets: ["react-app"]}
            }
        ]
    },
    plugins: []
};

module.exports = [serverConfig, browserConfig];