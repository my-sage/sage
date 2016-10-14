const express = require('express');
const router = express.Router();

const db = require('../../../../db');
const Transaction = db.model('transaction');
const Merchant = db.model('merchant');
const Category = db.model('category');

router.get('/', (req, res, next) => {
  //startDate, endDate, merchantId, categoryId
  const filter = {};
  const {
    merchantId,
    categoryId,
    startDate,
    endDate
  } = req.query;
  if (startDate && endDate) filter.date = {
    $between: [startDate, endDate]
  };
  if (merchantId) filter.merchantId = merchantId;
  if (categoryId) filter.categoryId = categoryId;
  Transaction.findAll({
      where: filter,
      include: [Category, Merchant]
    }).then(transactions => {
      res.status(200).json(transactions);
    })
    .catch(next);
});

router.get('/:transactionId', (req, res, next) => {
  Transaction.findById(req.params.transactionId)
    .then(transaction => {
      res.status(200).json(transaction);
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

  let {transaction, overWrite} = req.body;
  let result;

  Transaction.findById(req.params.transactionId)
    .then(targetTransaction => {
      return targetTransaction.update(transaction);
    })
    .then(targetTransaction => {
      return targetTransaction.reload()
    })
    .then(targetTransaction => {
      if(overWrite===false) res.status(200).json(targetTransaction);
      else {
        result = targetTransaction;
        return targetTransaction.getMerchant()
          .then(merchant => {
            return merchant.updateWithTransactions({categoryId: transaction.categoryId});
          })
          .then((allUpdatedTranctions) => {
            res.status(200).json(allUpdatedTranctions);
          });
        }
    })
    .catch(next);
});

router.delete('/:transactionId', (req, res, next) => {
  Transaction.destroy({
      where: {
        id: req.params.transactionId
      }
    })
    .then(numberOfDeletedBudgets => {
      res.status(202).json(numberOfDeletedBudgets)
    })
    .catch(next)
});

module.exports = router;
