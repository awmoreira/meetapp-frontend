import React, { Component } from 'react';

import logoWhite from '../../assets/logo-white.svg';
import userIcon from '../../assets/user-regular.svg';
import { Container, MenuList, UserMenu } from './styles';

export default class Header extends Component {
  render() {
    return (
      <Container>
        <MenuList>
          <a href="#">
            <img src={logoWhite} alt="logo white" />
          </a>
          <a href="#">Início</a>
          <a href="#">Buscar</a>
          <a href="#">Novo meetup</a>
        </MenuList>
        <UserMenu>
          <button>
            <img src={userIcon} alt="user Icon" />
          </button>
        </UserMenu>
      </Container>
    );
  }
}
