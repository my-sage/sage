const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Budget = db.model('budget');
const Transaction = db.model('transaction');

router.get('/', (req, res, next) => {
	//startDate, endDate, categoryId
	const filter = {};
	const {categoryId, startDate, endDate} = req.query;
	if (startDate && endDate) filter.date = {$between: [startDate, endDate]};
	if(categoryId) filter.categoryId = categoryId;
	Budget.findAll({
		where: filter
	}).then(budgets => {
		res.status(200).json(budgets);
	})
		.catch(next);
});

router.get('/:budgetId', (req, res, next) => {
	Budget.findAll({
		where: {
			id: req.params.budgetId
		},
		include: [
			{model: Transaction}
		]
	})
		.then(budget => {
			res.status(200).json(budget);
		})
		.catch(next);
});

router.get('/current', (req, res, next) => {
	Budget.getCurrentBudgets()
		.then(budgets => {
			res.status(200).json(budgets);
		})
		.catch(next);
});


router.post('/', (req, res, next) => {
	Budget.create(req.body)
		.then(budget => {
			res.status(201).json(budget);
		})
		.catch(next);
});

router.put('/:budgetId', (req, res, next) => {
	Budget.findById(req.params.budgetId)
		.then(budget => {
			return budget.update(req.body);
		})
		.then(budget => {
			res.status(200).json(budget);
		})
		.catch(next);
});

router.delete('/:budgetId', (req, res, next) => {
	Budget.destroy({
		where: {
			id: req.params.budgetId
		}
	})
		.then(deletedBudget => {
			res.status(202).json(deletedBudget)
		})
		.catch(next)
});

module.exports = router;