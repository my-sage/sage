'use strict';

const db = require('../../db');
const Merchant = db.model('merchant');
const stringSimilarity = require('string-similarity');
const {
  prop,
  map,
  compose,
  filter
} = require('ramda');

const categorize = uncategorizedMerchant => {
  const getName = prop('name'),
    getNames = map(getName),
    withCategories = filter(prop('categoryId')),
    getBestMatch = compose(prop('target'), prop('bestMatch')),
    findByName = (merchantName) => filter((merchant) => merchantName === merchant.name));
// notSameName = curry((id, merchant) => merchant.id !== id)),
// otherMerchants = filter(notSameName),
// getNamesOfThoseWithCategories = compose(getNames, withCategories)
  Merchant.findAll()
    .then(merchants => {
      const categorizedMerchants = withCategories(merchants),
        merchantNames = getNames(categorizedMerchants),
        bestMatch = getBestMatch(stringSimilarity.findBestMatch(uncategorizedMerchant.name, merchantNames));
      uncategorizedMerchant.categoryId = findByName(bestMatch)(categorizedMerchants).categoryId;
      return uncategorizedMerchant.save()
    })
    .catch(console.log)
}

module.exports = categorize;
