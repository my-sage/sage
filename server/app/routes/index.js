'use strict';
var router = require('express').Router(); // eslint-disable-line new-cap
module.exports = router;
// const accountRouter = require('./api/accounts/account.js');
// const accountRouter = require('./api/accounts/account.js');
// const accountRouter = require('./api/accounts/account.js');
// const accountRouter = require('./api/accounts/account.js');


router.use('/accounts', require('./api/accounts/account.js'));
router.use('/budgets', require('./api/budgets/budget.js'));
router.use('/categories', require('./api/categories/category.js'));
router.use('/merchants', require('./api/merchants/merchant.js'));
router.use('/transactions', require('./api/transactions/transaction.js'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res, next) {
    var err = new Error('Not found.');
    err.status = 404;
    next(err);
});
