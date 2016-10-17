'use strict';

import { propOr, identity, map, curry, fromPairs, merge, T, F } from 'ramda';

export function parseJSON(res) {
  return res.text()
    .then(text => text ? JSON.parse(text) : {})
}

let counter = 0;
let animationId;

export const getData = res => {
  console.log('making animation for good data come back')
  animationProgress();
  return res.data;
}


function animationProgress () {
  counter++;
  if(counter<=5) {
    NProgress.set(0.5+counter/10);
    animationId = setTimeout(animationProgress,100);
  }else{
    clearTimeout(animationId);
    counter=0;
    animationId=0;
  }
}
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
  let res = merge(trueHandlers, falseHandlers);
  return res;
});

export const createFetchingHandlers = createBinaryHandlers(T, F)
export const createErrorHandlers = createBinaryHandlers((action) => action.message, () => null)

export function dispatchFail(dispatch, action) {
  return  (err) => dispatch(action(err));
}

export function makeThunkCreator(asyncCall, fetchAction, successAction, failureAction, optionalAction) {
  return (...args) => {
    let asyncArgs = [].slice.call(arguments);
    return (dispatch) => {
      if(optionalAction) dispatch(optionalAction(...args))
      if(fetchAction) dispatch(fetchAction())
      return asyncCall(...args)
      .then(data => {
        dispatch(successAction(data))
      })
      .catch(dispatchFail(dispatch, failureAction))
    }
}}
