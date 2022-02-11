import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import coinsApi from '../services';
import { fetchCurrencies } from '../actions';

class Formulario extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: '',
      tag: '',
      exchangeRates: '',
      id: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleState = this.handleState.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);
  }

  async componentDidMount() {
    const coins = await coinsApi();
    this.getCurrencies(coins);
  }

  getCurrencies(coins) {
    this.setState({
      exchangeRates: Object.values(coins),
    });
  }

  handleState() {
    this.setState((state) => ({
      id: state.id + 1,
      value: '',
      description: '',
      method: '',
    }));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { getInfo } = this.props;
    const { id, value, description, tag, currency, method, exchangeRates } = this.state;
    return (
      <form>
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currency"
            id="currency-input"
            value={ currency }
            data-testeid="currency-input"
            onChange={ this.handleChange }
          >
            {exchangeRates
              ? exchangeRates.map((coin, index) => {
                if (coin.code === 'USDT' || coin.code === 'BRLT') {
                  return null;
                }
                return (
                  <option
                    key={ index }
                    value={ coin.code }
                    data-testid={ coin.code }
                  >
                    {coin.code}
                  </option>);
              }) : null}
          </select>
        </label>

        <label htmlFor="method-input">
          Método de pagamento
          <select
            name="method"
            value={ method }
            id="method-input"
            onChange={ this.handleChange }
            data-testid="method-input"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="tag-input">
          Tag
          <select
            name="tag"
            value={ tag }
            id="tag-input"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            <option value="Alimentção">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="description-input">
          Descrição
          <input
            type="text"
            name="description"
            id="description-input"
            value={ description }
            onChange={ this.handleChange }
            data-testid="description-input"
          />
        </label>

        <button
          type="button"
          onClick={ () => {
            getInfo({
              id,
              value,
              description,
              currency,
              method,
              tag,
            });
            this.handleState();
          } }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
Formulario.propTypes = {
  getInfo: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  getInfo: (currience) => dispatch(fetchCurrencies(currience)),
});
export default connect(null, mapDispatchToProps)(Formulario);
