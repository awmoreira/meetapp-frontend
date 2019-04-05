import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import logoWhite from '../../assets/logo-white.svg';
import userIcon from '../../assets/user-24.png';
import {
  Container, MenuList, MenuItem, UserMenu,
} from './styles';

const Header = ({ auth, pathname, history }) => {
  // console.log(auth.signedIn, history.location.pathname, pathname);
  if (!auth.signedIn) return null;
  if (pathname === '/signin') return null;
  if (pathname === '/preferences') return null;
  return (
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
};

Header.propTypes = {
  auth: PropTypes.shape({
    signedIn: PropTypes.bool,
  }).isRequired,
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { pathname } = ownProps.history.location;
  return {
    auth: state.auth,
    pathname,
  };
};

export default connect(mapStateToProps)(Header);
