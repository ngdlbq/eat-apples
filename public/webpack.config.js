module.exports  ={
	devtool: 'cheap-module-eval-source-map',
	entry: {
		index: './js/index.js'
	},
	output: {
		path: 'dist',
		filename: 'js/[name].js',
		publicPath: '/static/'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//include: '/js/',
				exclude: '/node_modules/'
			}
		]
	}
}