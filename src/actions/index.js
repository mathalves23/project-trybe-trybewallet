// Coloque aqui suas actions
import coinsApi from '../services';

export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const FAIL_API = 'FAIL_API';

export const getLogin = (email) => ({
  type: LOGIN_USER,
  email,
});

export const getWallet = (expense, coins) => ({
  type: CHANGE_WALLET,
  expense,
  exchangeRates: coins,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const failApi = (error) => ({
  type: FAIL_API,
  error,
});

export const fetchCurrencies = (expense) => (dispatch) => {
  dispatch(requestApi());
  return coinsApi().then(
    (coins) => dispatch(getWallet(expense, coins)),
    (error) => dispatch(failApi(error.message)),
  );
};
