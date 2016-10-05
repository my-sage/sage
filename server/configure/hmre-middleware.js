import webpack from 'webpack';
import config from '../../webpack.config.dev';
const DashboardPlugin = require('webpack-dashboard/plugin');
const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

module.exports = app => {
	app.use(require('webpack-dev-middleware')(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
};
