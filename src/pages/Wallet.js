import React from 'react';
import Despesas from '../components/Despesas';
import Formulario from '../components/Formulario';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Formulario />
        </div>
        <div>
          <Despesas />
        </div>
      </div>
    );
  }
}

export default Wallet;
