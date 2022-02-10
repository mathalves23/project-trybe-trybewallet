import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      buttonIsDisabled: true,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.buttonValidate);
  }

  buttonValidate = () => {
    const MIN_LENGTH = 6;
    const { email, password } = this.state;
    const emailCheck = email.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    // Checking e-mail
    // SOURCE: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const passwordCheck = password.length >= MIN_LENGTH;
    this.setState({ buttonIsDisabled: !(emailCheck && passwordCheck) });
  }

  render() {
    const { email, password, buttonIsDisabled } = this.state;
    const { getEmail, history } = this.props;
    return (
      <div>
        <h1>Trybe</h1>
        <section>
          <label htmlFor="email">
            Email
            <input
              name="email"
              type="email"
              id="email"
              data-testid="email-input"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              name="password"
              type="password"
              id="password"
              data-testid="password-input"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ buttonIsDisabled }
            onClick={ () => {
              getEmail(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </section>
      </div>
    );
  }
}

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(getLogin(email)),
});

export default connect(null, mapDispatchToProps)(Login);
