'use strict';

import axios from 'axios';
import {parseJSON, getData} from '../../utils';

const BASE_URL = process.env.URL || '';

export const createTransaction =
	(transaction) => axios.post(`${BASE_URL}/api/transactions`).then(getData);

export const getAllTransactions =
	(filterUrl) => {
		if (filterUrl) return axios.get(`${BASE_URL}/api/transactions${filterUrl}`).then(getData)
		else return axios.get(`${BASE_URL}/api/transactions`).then(getData)
	};

export const updateTransaction =
	(id, update) => axios.put(`${BASE_URL}/api/transactions/${id}`, update).then(getData);

export const getAllMerchants =
	() => axios.get(`${BASE_URL}/api/merchants/`).then(getData);

export const getAllCategories =
	() => axios.get(`${BASE_URL}/api/categories/`).then(getData);

export const getByMerchantId =
	(merchantId) => axios.get(`${BASE_URL}/api/merchants/${id}`).then(getData);
