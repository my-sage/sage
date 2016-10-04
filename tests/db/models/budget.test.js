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

describe('Budget Model', function() {

  let randomTransacsAmount1,
    randomTransacsAmount2,
    randomBalance,
    createdBudget,
    createTransactions = function() {
      let currentTime = new Date(),
        currentUnixTime = currentTime.valueOf(),
        oldUnixTime = new Date(currentTime.getFullYear(), currentTime.getMonth() - 3, 5).valueOf(),
        transac1 = {
          amount: randomTransacsAmount1,
          date: currentUnixTime,
          accountId: 1,
          categoryId: 1
        },
        transac2 = {
          amount: randomTransacsAmount2,
          date: oldUnixTime,
          accountId: 1,
          categoryId: 1
        };

      return Promise.map([transac1, transac2], (transac) => Transaction.create(transac));
    }

  beforeEach(function(done) {
    //sync Transcation. Drop and recreate tables
    randomTransacsAmount1 = _.random(1, 150);
    console.log('the desire transaction amount ',randomTransacsAmount1)
    randomTransacsAmount2 = _.random(1, 150);
    randomBalance = _.random(1, 200);
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
        })
      })
      .then(() => {
        return Merchant.create({
          name: 'Harvard',
          categoryId: 1
        })
      })
      .then(() => {
        return createTransactions();
      })
      .then(() => {
        return Budget.create({
          name: 'Education',
          targetAmount: 100,
          type: 'Spending',
          categoryId: 1
        })
      })
      .then((cb) => {
        createdBudget = cb;
        done();
      })
      .catch(done)

  })

  describe('Hooks', function() {
    it('should update new budget with all of the matching transactions', function() {
      expect(createdBudget.currentAmount).to.equal(randomTransacsAmount1);
    })
  })

  describe('Class Methods', function() {

    beforeEach(function() {
      let oldBudget = {
        name: 'Food',
        targetAmount: 200,
        type: 'Spending',
        endDate: new Date(new Date().getFullYear(), new Date().getMonth() - 3, 4).valueOf()
      };
      return Budget.create(oldBudget)
    })

    it('getCurrentBudgets gets all current budgets', function(done) {
      Budget.getCurrentBudgets()
        .then(currBudgets => {
          expect(currBudgets[0].name).to.equal('Education');
          expect(currBudgets).to.have.lengthOf(1);
          done();
        })
        .catch(done)
    })
  })
})
