'use strict';

import axios from 'axios';
import { parseJSON, getData } from '../../utils';

const BASE_URL = process.env.URL || '';

export const createBudget = 
  (budget) => {
  	NProgress.set(0.5);
  	return axios.post(`${BASE_URL}/api/budgets`, budget).then(getData);
  }

export const getTransactionsByBudgetId = 
  (id) => {
  	NProgress.set(0.5);
  	return axios.get(`${BASE_URL}/api/budgets/${id}`).then(getData);
  }

export const deleteBudget = 
  (id) => {
  	NProgress.set(0.5);
  	return axios.delete(`${BASE_URL}/api/budgets/${id}`).then(getData);
  }

export const updateBudget = 
  (id, updatedBudget) => {
  	NProgress.set(0.5);
  	return axios.put(`${BASE_URL}/api/budgets/${id}`, updatedBudget).then(getData);
	}

export const getCurrentBudgets = 
  () => {
  	NProgress.set(0.5);
  	return axios.get(`${BASE_URL}/api/budgets/current`).then(getData);
  }

export const getAllBudgets = 
	(filterUrl) => {
	NProgress.set(0.5);
	if(filterUrl) return axios.get(`${BASE_URL}/api/budgets${filterUrl}`).then(getData);
	else return axios.get(`${BASE_URL}/api/budgets`).then(getData);
}
