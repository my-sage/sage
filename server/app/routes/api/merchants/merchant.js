const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Merchant = db.model('merchant');
const Transaction = db.model('transaction');

router.get('/', (req, res, next) => {
	Merchant.findAll()
		.then(merchants => {
			res.status(200).json(merchants);
		})
		.catch(next);
});

router.get('/:merchantId', (req, res, next) => {
	Merchant.findAll({
		where: {
			id: req.params.merchantId
		},
		include: [
			{model: Transaction}
		]
	})
		.then(merchant => {
			res.status(200).json(merchant);
		})
		.catch(next);
});

module.exports = router;
