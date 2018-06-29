const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	devtool: 'source-map',
	mode: 'development',
	entry: {
		filename: './app.js'
	},
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: path.resolve(__dirname, '/dist/')
	},
	devServer: {
		contentBase: path.resolve(__dirname, './'),
		publicPath: path.resolve(__dirname, '/dist/')
	},
	resolve: {
    extensions: ['.js', '.jsx']
  },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
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
