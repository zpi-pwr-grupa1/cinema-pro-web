import webpack from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.config.base.babel";

export default merge(baseConfig, {
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
			},
			minimize: true,
			comments: false,
		}),
	]
});
