const path = require('path')
module.exports = {
	entry: './src/client/index.js',
	target: 'node',
	output: {
		path: path.join(__dirname, 'src/public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};