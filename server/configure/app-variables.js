'use strict';
const path = require('path');
const chalk = require('chalk');
const util = require('util');

const rootPath = path.join(__dirname, '../../../sage');
const indexPath = path.join(rootPath, './src/index.html');
const faviconPath = path.join(rootPath, './favicon/favicon.ico');

const logMiddleware = function (req, res, next) {
	util.log(('---NEW REQUEST---'));
	console.log(util.format(chalk.red('%s: %s %s'), 'REQUEST ', req.method, req.path));
	console.log(util.format(chalk.yellow('%s: %s'), 'QUERY   ', util.inspect(req.query)));
	console.log(util.format(chalk.cyan('%s: %s'), 'BODY    ', util.inspect(req.body)));
	next();
};

module.exports = function (app) {
	app.setValue('projectRoot', rootPath);
	app.setValue('indexHTMLPath', indexPath);
	app.setValue('log', logMiddleware);
	app.setValue('faviconPath', faviconPath);
};