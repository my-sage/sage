'use strict';

import axios from 'axios';
import {
  parseJSON,
  getData
} from '../../utils';

const BASE_URL = process.env.URL || '';

export const createAccount =
  (account) => {
    NProgress.set(0.5);
    return axios.post(`${BASE_URL}/api/accounts`, account).then(getData);
  };

export const getAllAccounts =
  () => {
    NProgress.set(0.5);
    return axios.get(`${BASE_URL}/api/accounts/`).then(getData)
  };

export const syncAllAccounts =
  () => {
    NProgress.set(0.5);
    return axios.get(`${BASE_URL}/api/accounts/syncAll`).then(getData)
  };

export const updateAccount =
  (id, update) => {
    NProgress.set(0.5);
    return axios.put(`${BASE_URL}/api/accounts/${id}`, update).then(getData);
  }

export const deleteAccount = (id) => {
  NProgress.set(0.5);
  return axios.delete(`${BASE_URL}/api/accounts/${id}`).then(getData);
}
