'use strict';

import {createReducer} from '../utils';
import {evolve, map, filter} from 'ramda';

const handlers = {};

export default createReducer([], handlers);