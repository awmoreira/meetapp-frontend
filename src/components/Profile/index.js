import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import api from '../../services/api';

import { Container, ProfileForm } from './styles';

import Button from '../../styles/components/Button';

class Profile extends Component {
  state = {
    name: '',
    password: '',
    passwordConfirmation: '',
    preference: [],
  };

  async componentDidMount() {
    const response = await api.get('users');

    const { data: user } = response;

    this.setState({
      name: user.username,
      preference: user.preference,
    });
  }

  handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const {
      name, password, passwordConfirmation, preference,
    } = this.state;

    return (
      <Container>
        <ProfileForm>
          <span>Nome</span>
          <input
            type="name"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Digite seu nome"
          />

          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <span>Confirmação de senha</span>
          <input
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <span>Preferências</span>
          <ul>
            <li>
              <input
                type="checkbox"
                name="front"
                checked={preference && preference.front}
                onChange={this.handleInputChange}
              />
              <span>Front-end</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="back"
                checked={preference && preference.back}
                onChange={this.handleInputChange}
              />
              <span>Back-end</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="mobile"
                checked={preference && preference.mobile}
                onChange={this.handleInputChange}
              />
              <span>Mobile</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="devops"
                checked={preference && preference.devops}
                onChange={this.handleInputChange}
              />
              <span>DevOps</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="manager"
                checked={preference && preference.manager}
                onChange={this.handleInputChange}
              />
              <span>Gestão</span>
            </li>
            <li>
              <input
                type="checkbox"
                name="marketing"
                checked={preference && preference.marketing}
                onChange={this.handleInputChange}
              />
              <span>Marketing</span>
            </li>
          </ul>

          <Button size="big" type="submit">
            Salvar
          </Button>
        </ProfileForm>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
