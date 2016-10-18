const express = require('express');
const router = express.Router();
const bankHandlers = require('../../../../banking');
const db = require('../../../../db');
const Account = db.model('account');
const Promise = require('bluebird');
const moment = require('moment');
const { daysAgo, now } = require('../../../../utils');

router.get('/', (req, res, next) => {
  Account.findAll()
    .then(accounts => {
      res.status(200).json(accounts);
    })
    .catch(next);
});

//need to check if logged in
router.get('/syncAll', (req, res, next) => {
  if(!req.user) res.json('You must login to sync accounts');
  else {
   Account.findAll()
    .then(accounts => {
      return Promise.map(accounts, (account) => {
        const bankHandler = bankHandlers[account.name]
        if (bankHandler) {
        const decryptedAccount = account.decrypt(req.user.pass);
        const { user, accId, password } = decryptedAccount
          , start = daysAgo(180)
          , end = now();
          return bankHandler(user, accId, password, start, end, decryptedAccount);
        } else return `${account.name} handler not found`;
      })
    })
    .then((handledAccounts) => {
      res.status(200).json(handledAccounts);
    })
    .catch(next);
  }
});

//need to check if logged in
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
  if (!req.user) res.json('Please login before creating an account');
  else {
    let account = Account.build(req.body);
    account.encrypt(req.user.pass)
      .then(account => {
        account = account.decrypt(req.user.pass);
        const { user, accId, password } = account
          , start = daysAgo(180)
          , end = now()
          ,  bankHandler = bankHandlers[account.name];
          if (bankHandler) {
            bankHandler(user, accId, password, start, end, account)
              .then(() => {
                res.status(201).json('Synced Account');
              })
              .catch(next)
          } else res.status(201).json(`Account created but no handler found for ${account.name}`)
      })
      .catch(next);
  }
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
