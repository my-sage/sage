const express = require('express');
const router = express.Router();

const db = require('../../../../db/_db');
const Transaction = db.model('transaction');

router.get('/', (req, res, next) => {
	//startDate, endDate, merchantId, categoryId
	let date = {};
	if (req.query.startDate && req.query.endDate) date = {$between: [req.query.startDate, req.query.endDate]};
	const {merchantId, categoryId} = req.query;
	const filter = {merchantId, categoryId, date};
	Transaction.findAll({
		where: filter
	}).then(transactions => {
		res.status(200).json(transactions);
	})
		.catch(next);
});

router.post('/', (req, res, next) => {
	Transaction.create(req.body)
		.then(transaction => {
			res.status(201).json(transaction);
		})
		.catch(next);
});

router.put('/:transactionId', (req, res, next) => {
	Transaction.findById(req.params.transactionId)
		.then(transaction => {
			return transaction.update(req.body);
		})
		.then(transaction => {
			res.status(200).json(transaction);
		})
		.catch(next);
});

router.delete('/:transactionId', (req, res, next) => {
	Transaction.destroy({
		where: {
			id: req.params.transactionId
		}
	})
		.then(deletedBudget => {
			res.status(202).json(deletedBudget)
		})
		.catch(next)
});

module.exports = router;