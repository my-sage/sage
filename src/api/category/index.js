'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || 'http://localhost:1337';

export const getAllCategories = 
  () => axios.get(`${BASE_URL}/api/categories/`).then(getData);

export const createCategory = 
  (category) => axios.post(`${BASE_URL}/api/categories`, category).then(getData);

export const getTransactionsByCategoryId = 
  (id) => axios.get(`${BASE_URL}/api/categories/${id}`).then(getData);

export const deleteCategory = 
  (id) => axios.delete(`${BASE_URL}/api/categories/${id}`).then(getData);

export const updateCategory = 
  (id, updatedCategory) => axios.put(`${BASE_URL}/api/categories/${id}`, updatedCategory).then(getData);
