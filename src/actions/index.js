// Coloque aqui suas actions
import coinsApi from '../services'; // Importação da API que está localizada na pasta /services

export const LOGIN_USER = 'LOGIN_USER';
export const CHANGE_WALLET = 'CHANGE_WALLET';
export const REQUEST_API = 'REQUEST_API';
export const FAIL_API = 'FAIL_API';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const getLogin = (email) => ({ // o e-mail faz o papel do payload, sendo aquilo que está sendo enviado no userReducer
  type: LOGIN_USER,
  email,
});

// Estrutura desenvolvida com ajuda do Rod na mentoria de Redux do dia 09/02.
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

export const deleteExpense = (expense) => ({
  type: DELETE_EXPENSE,
  expense,
}); // Lógica realizada com a ajuda da colega Nicole Calderari.
