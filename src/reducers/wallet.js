// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CHANGE_WALLET, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// O próprio README do projeto deu o INITIAL_STATE

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return state;
  case CHANGE_WALLET:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        {
          ...action.expense,
          exchangeRates: action.exchangeRates,
        },
      ],
    };
  default:
    return state;
  }
};

export default walletReducer;
