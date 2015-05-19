var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: ['./src/main.js'],
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded'},
			{test: /\.jsx$/, loader: 'jsx-loader'},
			{test: /\.html$/, loader: "ng-cache"},
			
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      		{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
		]
	},
	output: {
		path: path.join(__dirname, "build"),
		publicPath: "build/",
		filename: "[name].js",
		chunkFilename: "[chunkhash].js"
	},
	plugins: [
		new webpack.ProvidePlugin({
		    $: "jquery",
		    jQuery: "jquery",
		    "window.jQuery": "jquery"
		})
	],
	externals: {
		//jquery: "jQuery"
	}
}