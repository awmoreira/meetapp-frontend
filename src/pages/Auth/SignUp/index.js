import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logo from '../../../assets/logo.svg';

import AuthActions from '../../../store/ducks/auth';

import { Container, SignForm } from '../styles';
import Button from '../../../styles/components/Button';

class SignUp extends Component {
  static propTypes = {
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      username, email, password, password_confirmation,
    } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(username, email, password, password_confirmation);
  };

  render() {
    const {
      email, password, password_confirmation, username,
    } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <img src={logo} alt="logo" />

          <span>Nome</span>
          <input
            name="username"
            value={username}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />

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

          <span>Confirmação de Senha</span>
          <input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <Button size="big" type="submit">
            Criar
          </Button>
          <Link to="/signin">
            <h1>Já tenho conta</h1>
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
)(SignUp);
