const webpack = require('webpack');
const path = require('path');
const parentDir = path.join(__dirname, '../');

module.exports = {
	entry: [
		path.join(parentDir, 'src/index.js')
	],
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		},
		{
			test: /\.scss$/,
			loaders: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
		},
		{
			test: /\.(jpe?g|png)$/,
			loader: 'file-loader'
		}]
	},
	output: {
		path: parentDir + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: parentDir + '/src/static',
		historyApiFallback: true
	}
}