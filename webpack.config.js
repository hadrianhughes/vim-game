const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index',
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' },
		],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	plugins: [
		new CopyPlugin([{ from: 'static' }]),
	],
};

