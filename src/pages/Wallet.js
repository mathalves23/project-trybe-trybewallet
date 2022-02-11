import React from 'react';
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
        TrybeWallet
      </div>
    );
  }
}

export default Wallet;
