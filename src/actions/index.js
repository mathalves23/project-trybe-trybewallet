// Coloque aqui suas actions
import { USER_LOGIN, GET_CURRENCIES, GET_EXPENSES } from './actionTypes';

export const getLogin = (email) => ({
  type: USER_LOGIN,
  email,
});

export const getCurrencies = (currencies) => ({
  type: GET_CURRENCIES,
  currencies,
});

export const getExpenses = (firstExpense) => ({
  type: GET_EXPENSES,
  firstExpense,
});
