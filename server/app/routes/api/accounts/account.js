const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Account = db.model('account');

router.get('/', (req, res, next) => {
	Account.findAll()
		.then(accounts => {
			res.status(200).json(accounts);
		})
		.catch(next);
});

router.post('/', (req, res, next) => {
	Account.create(req.body)
		.then(account => {
			res.status(201).json(account);
		})
		.catch(next);
});

router.put('/:accountId', (req, res, next) => {
	Account.findById(req.params.accountId)
		.then(account => {
			return account.update(req.body);
		})
		.then(account => {
			res.status(200).json(account);
		})
		.catch(next);
});

router.delete('/:accountId', (req, res, next) => {
	Account.destroy({
			where: {
				id: req.params.accountId
			}
		})
		.then(deletedAccount => {
			res.status(202).json(deletedAccount)
		})
		.catch(next)
});

module.exports = router;