import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchCoinsAPI from '../services';
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
    const coins = await fetchCoinsAPI();
    this.getCurrencies(coins);
  }

  getCurrencies(exCoin) {
    this.setState({
      exchangeRates: Object.values(exCoin),
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
        <div>
          <label htmlFor="valor">
            Valor
            <input
              name="value"
              id="valor"
              type="number"
              data-testid="value-input"
              value={ value }
              onChange={ this.handleChange }
            />
          </label>
        </div>

        <div>
          <label htmlFor="currency-input">
            Moeda
            <select
              className="form-select"
              name="currency"
              id="currency-input"
              value={ currency }
              onChange={ this.handleChange }
              data-testid="currency-input"
            >
              { exchangeRates ? exchangeRates.map((coin, index) => {
                if (coin.code === 'USDT' || coin.codein === 'BRLT') {
                  return null;
                }
                return (
                  <option
                    key={ index }
                    value={ coin.code }
                    data-testid={ coin.code }
                  >
                    { coin.code }
                  </option>);
              }) : null}
            </select>
          </label>
        </div>

        <div>
          Método de pagamento
          <label htmlFor="method-input">
            <select
              name="method"
              value={ method }
              id="method-input"
              onChange={ this.handleChange }
              data-testid="method-input"
            >
              <option> </option>
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="tag-input">
            Tag
            <select
              name="tag"
              value={ tag }
              id="tag-input"
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option> </option>
              <option value="Alimentção">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="tag-input">
            Descrição
            <input
              name="description"
              id="description"
              type="text"
              value={ description }
              onChange={ this.handleChange }
              data-testid="description-input"
            />
          </label>
        </div>

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
  getInfo: (currency) => dispatch(fetchCurrencies(currency)),
});

export default connect(null, mapDispatchToProps)(Formulario);
