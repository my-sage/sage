const express = require('express');
const router = express.Router();
const bankHandlers = require('../../../../banking');
const db = require('../../../../db');
const Account = db.model('account');

router.get('/', (req, res, next) => {
  Account.findAll()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(next);
});

router.get('/:accountId', (req, res, next) => {
  Account.findById(req.params.accountId)
    .then(account => {
      const bankHandler = bankHandlers[account.name],
        {
          user,
          accId,
          password,
          start,
          end
        } = req.body;
      if (bankHandler) {
        bankHandler(user, accId, password, start, end, account)
          .then(() => {
            res.status(200).json('Synced Account');
          })
          .catch(next)
      } else res.json('Account Handler not found')
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  Account.create(req.body)
    .then(account => {
      const bankHandler = bankHandlers[account.name],
        {
          user,
          accId,
          password,
          start,
          end
        } = req.body;
      if (bankHandler) {
        bankHandler(user, accId, password, start, end, account)
          .then(() => {
            res.status(201).json('Synced Account');
          })
          .catch(next)
      } else res.status(201).json(account)
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
    .then(numberOfRowsDeleted => {
      res.status(202).json(numberOfRowsDeleted)
    })
    .catch(next)
});

module.exports = router;
