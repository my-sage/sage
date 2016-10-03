const Promise = require('bluebird');
const chai = require('chai');
const _ = require('lodash');
chai.use(require('chai-things'));
const expect = chai.expect;
const db = require('../../../server/db');
const Transaction = db.model('transaction');
const Budget = db.model('budget');
const Category = db.model('category');
const Merchant = db.model('merchant');
const Account = db.model('account');

let randomBalance = _.random(10, 100)

describe('Transaction Model', function() {
  beforeEach(function(done) {
    //sync Transcation. Drop and recreate tables
    db.sync({
        force: true
      })
      .then(function() {
        //create account
        return Account.create({
          name: 'Chase',
          type: 'Checking',
          balance: randomBalance
        })
      })
      .then(function() {
        return Category.create({
          name: 'Education',
          budgets: [{
            name: 'Education',
            targetAmount: 100,
            type: 'spending'
          }]
        })
      })
      .then(function() {
        return Merchant.create({
          name: 'Fullstack Academy'
        })
      })
      .then(function() {
        done();
      })
      .catch(done)
  });

  let randomTransactionAmount = -_.random(1, 150);
  let newTransaction = {
    amount: randomTransactionAmount,
    date: new Date().valueOf(),
    accountId: 1,
    categoryId: 1,
    merchantId: 1
  };

  let createdTransaction, linkedAccount;

  beforeEach(function(done) {
    Transaction.create(newTransaction)
      .then((transaction) => {
        createdTransaction = transaction;
        return createdTransaction.getAccount();
      })
      .then((account) => {
        linkedAccount = account;
        done();
      })
      .catch(done);
  })

  describe('Hooks', function() {

    it('should update corresponding account balance accordingly', function() {
      expect(linkedAccount.balance).to.equal(randomBalance + randomTransactionAmount);
    })

  })

  describe('Instance Methods', function() {
    it('should get the correct budget', function(done) {
      createdTransaction.getCurrentBudget()
        .then(budget => {
          console.log(budget);
          expect(budget.name).to.equal('Education');
          done();
        })
        .catch(done);
    })
  })

})
