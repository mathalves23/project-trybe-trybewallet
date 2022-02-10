// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIES, GET_EXPENSES } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// O próprio README do projeto deu o INITIAL_STATE

const wallet = (state = INITIAL_STATE, { type, payload }) => { // SOURCE: Mentoria de 09/02/2021 do Rod.
  switch (type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, firstExpense],
    };

  default:
    return state;
  }
};

export default wallet;
