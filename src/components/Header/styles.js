import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  background: #e5556e;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    margin: 15px 20px;
  }
`;

export const MenuItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 15px 20px;
  font-weight: bold;
  font-size: 16px;
`;

export const UserMenu = styled(Link)`
  background: transparent;
  border: 0;
  margin: 25px 30px;
  text-decoration: none;

  img {
    width: 24px;
    height: 24px;
  }
`;
