'use strict';

const db = require('../../db');
const Transaction = db.model('transaction');
const stringSimilarity = require('string-similarity');
const {
  prop,
  map,
  compose,
  filter
} = require('ramda');

const categorize = uncategorizedTransaction => {
  const getMerchant = prop('merchant')
  , getMerchants = map(getMerchant)
  , withCategories = filter(prop('categoryId'))
  , getBestMatch = compose(prop('target'), prop('bestMatch'))
  , getRating = compose(prop('rating'), prop('bestMatch'))
    findByName = (merchantName) => filter((merchant) => merchantName === merchant.name));

  Transaction.findAll({
    where: {
      attributes: ['merchant', 'categoryId'],
      where: {
        categoryId: {
          $ne: null
        }
      }
    }
  })
  .then(categorizedMerchants => {
    const merchantNames = getMerchants(categorizedMerchants)
    , matches = stringSimilarity.findBestMatch(uncategorizedTransaction.merchant, merchantNames)
    , bestMatch = getBestMatch(matches)
    , rating = getRating(matches)
    , newCategory = rating > 0.5 ? bestMatch : false;
    if(newCategory) {
      uncategorizedTransaction.categoryId = findByName(bestMatch)(categorizedMerchants).categoryId;
      return uncategorizedTransaction.save()
    }
  })
  .catch(console.log)
}

module.exports = categorize;
