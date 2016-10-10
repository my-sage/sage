'use strict';

import { propOr, identity, map, curry, fromPairs, merge, T, F } from 'ramda';

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

//handlers = { truthy: [trueHandlerConstants], falsey: [falseHandlerConstants] }
const createBinaryHandlers = curry((truthyFn, falseyFn, handlers) => {
  const makeTrueHandler = (type) => [type, (state, action) => truthyFn(action)],
    makeFalseHandler = (type) => [type, (state, action) => falseyFn()],
    trueHandlers = fromPairs(map(makeTrueHandler, handlers.truthy)),
    falseHandlers = fromPairs(map(makeFalseHandler, handlers.falsey));
  return merge(trueHandlers, falseHandlers);
});

export const createFetchingHandlers = createBinaryHandlers(T, F)
export const createErrorHandlers = createBinaryHandlers((action) => action.message, () => null)

export function dispatchFail(dispatch, action) {
  return  (err) => dispatch(action(err));
}

export function makeThunkCreator(asyncCall, fetchAction, successAction, failureAction) {
  return (asyncArg1, asyncArg2) => {
    let asyncArgs = [].slice.call(arguments);
    return (dispatch) => {
      if(fetchAction) dispatch(fetchAction())
      return asyncCall(asyncArg1, asyncArg2)
      .then(data => {
        dispatch(successAction(data))
      })
      .catch(dispatchFail(dispatch, failureAction))
    }
}}
