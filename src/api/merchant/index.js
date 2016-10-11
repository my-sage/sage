'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || 'http://localhost:1337';

export const getAllMerchants = 
  () => axios.get(`${BASE_URL}/api/merchants/`).then(getData);

export const createMerchant = 
  (merchant) => axios.post(`${BASE_URL}/api/merchants`, merchant).then(getData);

export const getTransactionsByMerchantId = 
  (id) => axios.get(`${BASE_URL}/api/merchants/${id}`).then(getData);

export const deleteMerchant = 
  (id) => axios.delete(`${BASE_URL}/api/merchants/${id}`).then(getData);

export const updateMerchant = 
  (id, updatedMerchant) => axios.put(`${BASE_URL}/api/merchants/${id}`, updatedMerchant).then(getData);
