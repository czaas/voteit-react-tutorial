var webpack = require('webpack');

module.exports ={
	entry: './app/Main.js',
	output: {
		path: './transpiled',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel'
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			mangle: false
		})
	]
};