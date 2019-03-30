import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    name: '',
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

    const { name, email, password } = this.state;
    const { signUpRequest } = this.props;

    signUpRequest(name, email, password);
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <img src={logo} alt="logo" />
          <span>Nome</span>
          <input name="name" value={name} onChange={this.handleInputChange} placeholder="Digite seu nome" />

          <span>Email</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange} placeholder="Digite seu e-mail" />

          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <Button size="big" type="submit">
            Criar
          </Button>
          <h1>Já tenho conta</h1>
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
