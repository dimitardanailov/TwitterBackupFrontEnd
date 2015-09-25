const NgAnnotatePlugin = require('ng-annotate-webpack-plugin');
const path = require('path');
const plugins = [];

if (process.argv.indexOf('-p') >= 0) {
	console.log('Production mode, ON!');
	plugins.push(new NgAnnotatePlugin({
		'add': true
	}));
}

module.exports = {
	console: true,
	cache: true,
	// FS fix - https://github.com/webpack/jade-loader/issues/8. Author: zalad.
	node: {
		fs: 'empty'
	},
	entry: './client/entry',
	output: {
		path: path.resolve('./client/build'),
		filename: 'bundle.js',
		publicPath: 'build/'
	},
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: 'style!css!sass?sourceMap',
			include: /client/
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.html$/,
			loader: 'html',
			include: /client/
		}, {
			test: /\.js$/,
			loader: 'babel?stage=0!ng-annotate?add=true!eslint',
			include: /client/,
			exclude: /node_modules/
		}, {
			test: /\.png$/,
			loader: 'file',
			include: /client/,
			exclude: /node_modules/
		}]
	},
	plugins: plugins,
	devServer: {
		contentBase: './client',
		colors: true,
		info: true,
		progress: true,
		historyApiFallback: true
	}
};
