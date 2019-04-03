import React, { Component } from 'react';

import { Container, ProfileForm } from './styles';

import Button from '../../styles/components/Button';

class Profile extends Component {
  state = {
    name: '',
    password: '',
    preferences: [],
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleInputChangeCheckbox(e) {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [`preferences.${name}`]: value,
    });
  }

  render() {
    const { name, password, preferences } = this.state;

    return (
      <Container>
        <ProfileForm>
          <span>Email</span>
          <input
            type="name"
            name="name"
            value={name}
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

          <span>Preferências</span>
          <ul>
            <li>
              <input
                type="checkbox"
                checked={preferences.front}
                onChange={this.handleInputChangeCheckbox}
              />
              <span>Front-end</span>
            </li>
            <li>
              <input
                type="checkbox"
                checked={preferences.back}
                onChange={this.handleInputChangeCheckbox}
              />
              <span>Back-end</span>
            </li>
            <li>
              <input
                type="checkbox"
                checked={preferences.mobile}
                onChange={this.handleInputChangeCheckbox}
              />
              <span>Mobile</span>
            </li>
            <li>
              <input
                type="checkbox"
                checked={preferences.devops}
                onChange={this.handleInputChangeCheckbox}
              />
              <span>DevOps</span>
            </li>
            <li>
              <input
                type="checkbox"
                checked={preferences.manager}
                onChange={this.handleInputChangeCheckbox}
              />
              <span>Gestão</span>
            </li>
            <li>
              <input
                type="checkbox"
                checked={preferences.marketing}
                onChange={this.handleInputChangeCheckbox}
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

export default Profile;
