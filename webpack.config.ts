const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	target: 'web',
	devtool: 'inline-source-map',
	devServer: {
		port: '3000',
		static: {
			directory: path.join(__dirname, 'public'),
		},
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc',
		},
	},
	module: {
		rules: [
			{
				test: /\.png/,
				type: 'asset/resource',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				exclude: /\.module\.css$/,
			},
		],
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
		}),
	],
};
