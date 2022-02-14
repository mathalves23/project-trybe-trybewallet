import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Despesas extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      // Source: https://www.w3schools.com/html/html_tables.asp
      <table>
        <tr>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {expenses ? expenses.map((expense) => { // Lógica realizada com a ajuda da colega Nicole Calderari.
          const { value, description, currency, method, tag, exchangeRates } = expense;
          const price = Number(exchangeRates[currency].ask).toFixed(2);
          const expenseValue = Number(value).toFixed(2);
          const priceValue = (expenseValue * exchangeRates[currency].ask).toFixed(2);
          const currencyName = exchangeRates[currency].name.split('/');
          // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
          return (
            <tr key={ expense.id }>
              <th>{description}</th>
              <th>{tag}</th>
              <th>{method}</th>
              <th>{value}</th>
              <th>{currencyName[0]}</th>
              <th>{price}</th>
              <th>{priceValue}</th>
              <th>Real</th>
            </tr>
          );
        }) : null}
      </table>
    );
  }
}

Despesas.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Despesas);
