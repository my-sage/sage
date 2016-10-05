const path = require('path');
const express = require('express');
const app = express();

module.exports = function (db) {
	
	require('../configure')(app, db);
	app.use('/api', require('./routes'));

	app.use(function (req, res, next) {
		let err;
		if (path.extname(req.path).length > 0) {
			err = new Error('Not found.');
			err.status = 404;
			next(err);
		} else {
			next();
		}
	});
	
	app.get('/*', function (req, res) {
		res.sendFile(app.get('indexHTMLPath'));
	});
	
	// Error catching endware.
	app.use(function (err, req, res, next) {
		console.error(err);
		console.error(err.stack);
		res.status(err.status || 500).send(err.message || 'Internal server error.');
	});

	return app;
};
