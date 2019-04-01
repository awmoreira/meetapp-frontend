import styled from 'styled-components';

export const Container = styled.div`
  background: #e5556e;
  padding: 15px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    margin: 15px 20px;
    font-weight: bold;
    font-size: 16px;

    img {
      width: 25px;
      height: 25px;
    }
  }
`;

export const UserMenu = styled.div`
  button {
    background: transparent;
    border: 0;
    /* font-size: 24px; */
    /* color: #fff; */
    margin: 25px 30px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;
