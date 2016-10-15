'use strict'
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
const { assoc } = require('ramda');

let randomBalance;

describe('Transaction Model', function() {

  beforeEach(function(done) {
    //sync Transcation. Drop and recreate tables
    randomBalance = _.random(10, 100);
    db.sync({
        force: true
      })
      .then(() => {
        //create account
        return Account.create({
          name: 'Chase',
          type: 'Checking',
          balance: randomBalance
        })
      })
      .then(() => {
        return Category.create({
          name: 'Education',
          budgets: [{
            name: 'Education',
            targetAmount: 100,
            currentAmount: 50,
            type: 'spending'
          }]
        }, {
          include: [Budget]
        })
      })
      .then(() => {
        return Merchant.create({
          name: 'Harvard',
          categoryId: 1
        })
      })
      .then(() => {
        done();
      })
      .catch(done)
  });

  let randomTransactionAmount,
    createdTransaction, linkedAccount, newTransaction = {
      date: new Date().valueOf(),
      accountId: 1,
      categoryId: 1,
      fitid: '12345',
      amount: _.random(1, 150)
    };

  beforeEach(function(done) {
    randomTransactionAmount = -_.random(1, 150);
    newTransaction.amount = randomTransactionAmount;
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

  // describe('Hooks', function() {
    // it('should update corresponding account balance accordingly', function() {
      // expect(linkedAccount.balance).to.equal(randomBalance + randomTransactionAmount);
    // })
  // })

  describe('Instance Methods', function() {
    let linkedBudget;
    beforeEach(function() {
      return createdTransaction.getCurrentBudget()
        .then(budget => {
          linkedBudget = budget;
        })
    })

    it('should get the correct budget', function() {
      expect(linkedBudget.name).to.equal('Education');
    })

    it('corrsponding hook should update corresponding budget accurately', function() {
      expect(linkedBudget.currentAmount).to.equal(50 - createdTransaction.amount);
    })
  })

  describe('Class Methods', function() {
    let transactionWithExistingMerchant = {
      transaction: assoc('fitid', '9839382', newTransaction),
      merchant: {
        name: 'Harvard'
      }
    }

    let transactionNewMerchant = {
      transaction: assoc('fitid', '12334435', newTransaction),
      merchant: {
        name: 'Yale'
      }
    }

    let createdTransactionWithExistingMerchant, createdTransactionWithNewMerchant;

    beforeEach(function() {
      let creatingTransactionWithExistingMerchant = Transaction.createOrFindWithMerchant(transactionWithExistingMerchant)
      let creatingTransactionWithNewMerchant = Transaction.createOrFindWithMerchant(transactionNewMerchant);
      return Promise.all([creatingTransactionWithExistingMerchant, creatingTransactionWithNewMerchant])
        .spread((existingMerchant, newMerchant) => {
          createdTransactionWithExistingMerchant = existingMerchant;
          createdTransactionWithNewMerchant = newMerchant;
        })
    })

    it('should create a merchant if it doesn\'t exist', function() {
      expect(createdTransactionWithNewMerchant.merchant.name).to.equal('Yale');
    })

    it('should find the merchant if it already exists', function() {
        expect(createdTransactionWithExistingMerchant.merchant.id).to.equal(1);
      })
      //need to write category update hook
  })

})
