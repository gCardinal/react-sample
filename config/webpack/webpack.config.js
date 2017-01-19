var path = require('path');
var webpack = require('webpack');
var root = __dirname + '/../../';

module.exports = {
    devtool: 'eval',
    entry: {
        main: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://0.0.0.0:50000',
            'webpack/hot/only-dev-server',
            path.join(root, 'src/ts/index.tsx'),
            path.join(root, 'src/sass/global.scss')
        ],
    },
    output: {
        path: path.join(root, 'build/assets'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js',
        publicPath: '/assets/'
    },
    plugins: [
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [
            {
                test: path.join(root, 'src/sass/screen.scss'),
                loaders: [
                    'style?sourceMap',
                    'css?-url&importLoaders=1',
                    'resolve-url',
                    'sass?sourceMap'
                ]
            }, {
                test: /\.scss|\.sass$/,
                loaders: [
                    'style?sourceMap',
                    'css?-url&modules&importLoaders=1&localIdentName=[name].[local].[hash:base64:5]',
                    'resolve-url',
                    'sass?sourceMap'
                ],
                exclude: path.join(root, 'src/sass/screen.scss'),
            }, {
                test: /\.tsx?$/,
                exclude: /node_modules|moment\/locale/,
                loaders: [
                    'react-hot-loader/webpack',
                    'ts-loader'
                ]
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap',
            }, {
                test: /\.json$/,
                loader: 'json',
            }
        ]
    },
    ts: {
        transpileOnly: true,
        compilerOptions: {
            declaration: false,
        }
    },
    sassLoader: {
        includePaths: [
            path.resolve(root, "src/sass"),
            path.resolve(root, "src/ts/components"),
            path.resolve(root, "node_modules/bourbon/app/assets/stylesheets"),
            path.resolve(root, "node_modules/mappy-breakpoints"),
            path.resolve(root, "node_modules/susy/sass"),
        ]
    },
    resolve: {
        extensions: [
            '', '.js', '.ts', '.tsx', '.json', '.css'
        ],
        root: [
            path.join(root, 'src/ts'),
            path.join(root, 'tests')
        ],
        alias: {
            react: path.resolve('./node_modules/react')
        }
    },
    externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
        'jsdom': 'window',
        'text-encoding': 'window',
    },
    devServer: {
        port: 3000,
        ip: "0.0.0.0"
    }
};