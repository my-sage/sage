'use strict';

import { propOr, identity } from 'ramda';

export function parseJSON(res) {
  return res.text()
    .then(text => text ? JSON.parse(text) : {})
}

export const getData = res => res.data;

export function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = {
      type
    }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

export function createReducer(initialState, handlers) {
  return (state = initialState, action) =>
    propOr(identity, action.type, handlers)(state, action)
}

export function dispatchFail(dispatch, action) {
  return  (err) => dispatch(action(err));
}
