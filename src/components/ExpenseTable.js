import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';

class ExpenseTable extends React.Component {
  render() {
    const { expenses, buttonDelete } = this.props;
    return (
      // Source: https://www.w3schools.com/html/html_tables.asp
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          {expenses ? expenses.map((expense) => {
            const { value, description, currency, method, tag, exchangeRates } = expense;
            const price = Number(exchangeRates[currency].ask).toFixed(2);
            const expenseValue = Number(value).toFixed(2);
            const priceValue = (expenseValue * exchangeRates[currency].ask).toFixed(2);
            const currencyName = exchangeRates[currency].name.split('/');
            // Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
            return (
              <tr key={ expense.id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{expenseValue}</td>
                <td>{currencyName[0]}</td>
                <td>{price}</td>
                <td>{priceValue}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => buttonDelete(expense) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }) : null}
        </tbody>
      </table>
    );
  }
}

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  buttonDelete: (expense) => dispatch(deleteExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
