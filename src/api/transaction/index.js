'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || 'http://localhost:1337';

export const createTransaction = 
  (transaction) => axios.post(`${BASE_URL}/api/transactions`).then(getData);

export const getAllTransactions = 
  (transaction) => axios.get(`${BASE_URL}/api/transactions`).then(getData);

export const updateTransaction = 
  (id, update) => axios.put(`${BASE_URL}/api/transactions/${id}`, update).then(getData);
