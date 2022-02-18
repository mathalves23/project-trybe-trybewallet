// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_USER } from '../actions';

const INITIAL_STATE = {
  email: '', // O estado inicial de login é o campo de e-mail vazio
};
// O próprio README do projeto deu o INITIAL_STATE

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN_USER:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
    // quando não tem nenhuma modificação, retorna o próprio estado
  }
};
// Estrutura desenvolvida com ajuda do Ander na revisão de Redux do dia 10/02.

export default userReducer;
