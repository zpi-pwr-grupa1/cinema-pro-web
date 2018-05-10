import webpack from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.config.base.babel";

export default merge(baseConfig, {
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	]
});
