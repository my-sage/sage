const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Category = db.model('category');
const Transaction = db.model('transaction');

router.get('/', (req, res, next) => {
	Category.findAll()
		.then(categories => {
			res.status(200).json(categories);
		})
		.catch(next);
});

router.get('/:categoryId', (req, res, next) => {
	Category.findAll({
		where: {
			id: req.params.categoryId
		},
		include: [
			{model: Transaction}
		]
	})
		.then(category => {
			res.status(200).json(category);
		})
		.catch(next);
});

module.exports = router;