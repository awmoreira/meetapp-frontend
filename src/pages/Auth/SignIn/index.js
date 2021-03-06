import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../../assets/logo.svg';

import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '../../../styles/components/Button';

class SignIn extends Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);

    this.setState({ password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <img src={logo} alt="logo" />

          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder="Digite seu e-mail"
          />

          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <Button size="big" type="submit">
            Entrar
          </Button>

          <Link to="/signup">
            <h1>Criar conta grátis</h1>
          </Link>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
