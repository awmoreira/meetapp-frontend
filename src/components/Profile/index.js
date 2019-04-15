import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '../../store/ducks/auth';

import api from '../../services/api';

import { Container, ProfileForm } from './styles';

import Button from '../../styles/components/Button';
import Checkbox from '../Checkbox';

class Profile extends Component {
  static propTypes = {
    updateUserRequest: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
    password_confirmation: '',
    front: false,
    back: false,
    mobile: false,
    devops: false,
    manager: false,
    marketing: false,
  };

  async componentDidMount() {
    const response = await api.get('users');

    const { data: user } = response;

    this.setState({
      username: user.username,
    });

    if (user.preference) {
      this.setState({
        front: !!user.preference.front,
        back: !!user.preference.back,
        mobile: !!user.preference.mobile,
        devops: !!user.preference.devops,
        manager: !!user.preference.manager,
        marketing: !!user.preference.marketing,
      });
    }
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleUpdateUser = (e) => {
    e.preventDefault();

    const { updateUserRequest } = this.props;

    const {
      username,
      password,
      password_confirmation,
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    const preference = {
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    };

    updateUserRequest(username, password, password_confirmation, preference);
  };

  render() {
    const {
      username,
      password,
      password_confirmation,
      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    return (
      <Container>
        <ProfileForm onSubmit={this.handleUpdateUser}>
          <span>Nome</span>
          <input
            type="text"
            name="username"
            value={username}
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
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleInputChange}
            placeholder="Sua senha secreta"
          />

          <span>Preferências</span>
          <ul>
            <li>
              <label>
                <Checkbox name="front" checked={front} onChange={this.handleCheckboxChange} />
                <span>Front-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="back" checked={back} onChange={this.handleCheckboxChange} />
                <span>Back-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="mobile" checked={mobile} onChange={this.handleCheckboxChange} />
                <span>Mobile</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="devops" checked={devops} onChange={this.handleCheckboxChange} />
                <span>Devops</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="manager" checked={manager} onChange={this.handleCheckboxChange} />
                <span>Gestão</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  name="marketing"
                  checked={marketing}
                  onChange={this.handleCheckboxChange}
                />
                <span>Marketing</span>
              </label>
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

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Profile);
