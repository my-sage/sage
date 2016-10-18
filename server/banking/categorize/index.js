'use strict';

const stringSimilarity = require('string-similarity');
const {
  prop,
  map,
  compose,
  filter,
  lt,
  find,
  propEq
} = require('ramda');
const Category = require('../../db/models/category');
const Transaction = require('../../db/models/transaction');
const Promise = require('bluebird');

const getName = prop('name')
  , getNames = map(getName)
  , getTargets = map(prop('target'))
  , getBestMatch = compose(prop('target'), prop('bestMatch'))
  , getRating = compose(prop('rating'), prop('bestMatch'))
  , findByName = (merchantName) => filter((merchant) => merchantName === merchant.name)
  , gtThreshold = (threshold) => compose(getTargets, filter(e => lt(threshold, e.rating)), prop('ratings'))
  , updateCategories = (categoryId, merchants) => Promise.all(map(merch => merch.updateWithTransactions({categoryId}), merchants))
  , getTransacs = (m) => m.getTransactions();

// kth nearest neighbor to determine likely category from category training data
const categorize = (newMerchant, threshold = 0.70) => {
  return newMerchant.Model.findAll({
    where: {
      id: {
        $ne: newMerchant.id
      },
      categoryId: {
        $ne: null
      }
    }
  })
  .then(categorizedMerchants => {
    const merchantNames = getNames(categorizedMerchants)[0] ? getNames(categorizedMerchants) : ['']
    , matches = stringSimilarity.findBestMatch(newMerchant.name, merchantNames)
    , bestMatch = getBestMatch(matches)
    , rating = getRating(matches)
    , newCategory = rating > threshold ? bestMatch : 'UNCATEGORIZED';
    if(newCategory !== 'UNCATEGORIZED')
      newMerchant.categoryId = findByName(newCategory)(categorizedMerchants)[0].categoryId;
    else 
      return Category.findOrCreate({
        where: {
          name: 'UNCATEGORIZED'
        }
      })
      .spread(category => {
        newMerchant.categoryId = category.id;
        return newMerchant.save();
      })
    return newMerchant.save()
  })
}

const proactiveCategorize = (updatedMerchant, threshold = 0.50) => {
  return Category.findOne({
    where: {
      name: 'UNCATEGORIZED'
    }
  })
  .then(category => {
    if(category) {
      return updatedMerchant.Model.findAll({
        where: {
          categoryId: category.id
        }
      })
    }
  })
  .then(uncategorizedMerchants => {
    if(uncategorizedMerchants) {
      const uncategorizedNames = getNames(uncategorizedMerchants)
      , matches = stringSimilarity.findBestMatch(updatedMerchant.name, uncategorizedNames)
      , namesToCategorize = gtThreshold(threshold)(matches);
      if(namesToCategorize[0]){
        const merchantsToCategorize = map((name) => find(propEq('name', name), uncategorizedMerchants), namesToCategorize);
        return updateCategories(updatedMerchant.categoryId, merchantsToCategorize)
              // .then(_ => Promise.map(merchantsToCategorize, getTransacs))
      }
    }
  })
}

module.exports = {
  categorize,
  proactiveCategorize
};
