const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: './build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						['es2015', { modules: false }]
					]
				}
			}
		]
	},
	plugins: [
		new UglifyJsPlugin({
			uglifyOptions: {
				compress: { inline: false },
				output: { comments: false, beautify: false},
				sourceMap: true
			}
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
		})
	]
}
