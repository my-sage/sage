'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || 'http://localhost:1337';

export const createBudget = (budget) => axios.post(`${BASE_URL}/api/budgets`).then(getData);
export const getAllBudgets = (budget) => axios.get(`${BASE_URL}/api/budgets`).then(getData);
