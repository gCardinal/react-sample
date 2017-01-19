var gulp = require('gulp')
var gutil = require("gulp-util")
var webpack = require("webpack")
var WebpackDevServer = require("webpack-dev-server")
var config = require('../webpack/webpack.config.js')

gulp.task("webpack:server", function() {
    config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('local')
        })
    ]);
    
    var webpackDevServerConfig = {
        stats: { colors: true },
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }
    
    var port = config.devServer.port;
    var ip = config.devServer.ip;
    var server = new WebpackDevServer(webpack(config), webpackDevServerConfig);
    
    server.listen(port, ip, function(error) {
        if(error) throw new gutil.PluginError("webpack:server", error);
        gutil.log("[webpack:server]", "http://" + ip + ":" + port + "/");
    });
});