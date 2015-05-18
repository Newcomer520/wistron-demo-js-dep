var gulp = require('gulp')
,	util = require('gulp-util')
,	sass = require('gulp-sass')
,	notify = require('gulp-notify')
,	webpack = require('webpack')
,	WebpackDevServer = require('webpack-dev-server')
,	webpackConfig = require('./webpack.config.js');

gulp.task('webpack-dev-server', function() {
	var compiler = webpack(webpackConfig);
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;
	console.log(myConfig.output.publicPath)
	var server = new WebpackDevServer(webpack(myConfig), {
		publicPath: "/assets/",
	    stats: { colors: true }
	}).listen(8181, "localhost", function(err) {
		if(err) throw new util.PluginError("webpack-dev-server", err);
		util.log("[webpack-dev-server]", "http://localhost:8181/webpack-dev-server/index.html");
		notify.onError(function(error) {
			return error.message;
		})
	});
});