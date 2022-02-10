import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleClick = (event) => {
    event.preventDefault();
    const { email } = this.state;
    const { history, dispatchEmail } = this.props;
    dispatchEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password } = this.state;
    const MIN_LENGTH = 6;
    let disabledButton = true;

    if (email.includes('@' && '.com') && password.length >= MIN_LENGTH) {
      disabledButton = false;
    } else {
      disabledButton = true;
    }

    return (
      <div>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              data-testid="email-input"
              id="email-input"
              type="email"
              name="email"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            Senha
            <input
              data-testid="password-input"
              id="password-input"
              type="password"
              name="password"
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ disabledButton }
            type="submit"
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatchEmail: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (value) => dispatch(getUser(value)),
}); // SOURCE: Mentoria de 09/02/2021 do Rod.

export default connect(null, mapDispatchToProps)(Login);
