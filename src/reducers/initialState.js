'use strict';

export default {
  budgets: {
    data: [],
    isFetching: false,
    errorMessage: null
  },
  transactions: {
    data: [],
    isFetching: false,
    errorMessage: null,
    query: null,
    shouldFetchAll: true
  },
  categories: {
    data: [],
    isFetching: false,
    errorMessage: null
  },
  merchants: {
    data: [],
    isFetching: false,
    errorMessage: null
  }
}
