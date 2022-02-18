import React from 'react';
import ExpenseTable from '../components/ExpenseTable';
import Expenses from '../components/Expenses';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Expenses />
        </div>
        <div>
          <ExpenseTable />
        </div>
      </div>
    );
  }
}

export default Wallet;
