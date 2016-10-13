const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Budget = db.model('budget');
const Category = db.model('category');

router.get('/', (req, res, next) => {
	//startDate, endDate, categoryId
	const filter = {};
	const {categoryId, startDate, endDate} = req.query;
	if (startDate && endDate) filter.endDate = {$between: [startDate, endDate]};
	if(categoryId) filter.categoryId = categoryId;
	Budget.findAll({
		where: filter,
		include: [Category]
	}).then(budgets => {
		res.status(200).json(budgets);
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

router.get('/:budgetId', (req, res, next) => {
	const response = {};
	Budget.findById(req.params.budgetId)
		.then(budget => {
			response.budget = budget;
			return budget.getTransactions()
		})
		.then(transactions => {
			response.transactions = transactions;
			res.status(200).json(response);
		})
		.catch(next);
});

router.post('/', (req, res, next) => {
	Budget.create(req.body)
		.then(budget=> budget.reload())
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
      return budget.reload();
    })	
		.then(budget => {
			res.status(200).json(budget);
		})
		.catch(next);
});

router.delete('/:budgetId', (req, res, next) => {
  const budgetId = req.params.budgetId;
	Budget.destroy({
		where: {
			id: budgetId
		}
	})
		.then(() => {
			res.status(202).json(budgetId)
		})
		.catch(next)
});

module.exports = router;
