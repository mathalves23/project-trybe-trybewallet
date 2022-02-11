import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const totalExpenses = expenses
      ? expenses.reduce((acc, expense) => {
        const exchange = expense.exchangeRates[expense.currency].ask;
        const exchangedValue = (Number(expense.value) * exchange).toFixed(2);
        return acc + Number(exchangedValue);
      }, 0)
      : '';
    return (
      <div>
        <header>
          <p>Wallet</p>
          <p data-testid="email-field">
            { email }
          </p>
          <p data-testid="total-field">
            Despesa total:
            { totalExpenses }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
