import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux'; // importa o Provider conforme pede o README.
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'; // importa a store criada anteriormente.

ReactDOM.render(
  <BrowserRouter>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// Estrutura desenvolvida com ajuda do Ander na revisão de Redux do dia 10/02.

// O provider engloba toda a aplicação para fazer a estrutura funcionar.
// Ele está localizado no index.js ao invés do App.js porque foi pedido assim no README.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
