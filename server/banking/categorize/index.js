'use strict';

const stringSimilarity = require('string-similarity');
const {
  prop,
  map,
  compose,
  filter
} = require('ramda');
const Category = require('../../db/models/category');
const Promise = require('bluebird');

// kth nearest neighbor to determine likely category from category training data
const categorize = (newMerchant, threshold = 0.70) => {
  const getName = prop('name')
  , getNames = map(getName)
  , getBestMatch = compose(prop('target'), prop('bestMatch'))
  , getRating = compose(prop('rating'), prop('bestMatch'))
  , findByName = (merchantName) => filter((merchant) => merchantName === merchant.name);

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
    const merchantNames = getNames(categorizedMerchants)
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

module.exports = categorize;
