import React from 'react';

import logoWhite from '../../assets/logo-white.svg';
import userIcon from '../../assets/user-24.png';
import {
  Container, MenuList, MenuItem, UserMenu,
} from './styles';

const Header = () => (
  <Container>
    <MenuList>
      <img src={logoWhite} alt="logo white" />
      <MenuItem to="/">Início</MenuItem>
      <MenuItem to="/search">Buscar</MenuItem>
      <MenuItem to="/newMeetup">Novo meetup</MenuItem>
    </MenuList>
    <UserMenu to="/profile">
      <img src={userIcon} alt="user Icon" />
    </UserMenu>
  </Container>
);

export default Header;
