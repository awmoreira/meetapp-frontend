import React from 'react';
import { Link } from 'react-router-dom';

import logoWhite from '../../assets/logo-white.svg';
import userIcon from '../../assets/user-24.png';
import { Container, MenuList, UserMenu } from './styles';

const Header = () => (
  <Container>
    <MenuList>
      <img src={logoWhite} alt="logo white" />
      <Link to="/">Início</Link>
      <Link to="/search">Buscar</Link>
      <Link to="/newMeetup">Novo meetup</Link>
    </MenuList>
    <UserMenu>
      <Link to="/profile">
        <img src={userIcon} alt="user Icon" />
      </Link>
    </UserMenu>
  </Container>
);

export default Header;
