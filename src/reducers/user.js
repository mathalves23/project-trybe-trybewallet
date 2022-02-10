import { USER_LOGIN } from '../actions/actionTypes';

// Esse reducer será responsável por tratar as informações da pessoa usuária

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

// O próprio README do projeto deu o INITIAL_STATE

const user = (state = INITIAL_STATE, { type, payload }) => { // SOURCE: Mentoria de 09/02/2021 do Rod.
  switch (type) {
  case USER_LOGIN:
    return {
      ...state,
      user: {
        email: payload,
      },
    };

  default:
    return state;
  }
};

export default user;
