import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 900px;
    height: 509px;
    padding: 26px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  strong {
    font-family: Helvetica;
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
    padding-bottom: 5px;
  }

  span {
    font-family: Helvetica;
    font-size: 14px;
    color: #999999;
    padding-bottom: 15px;
  }

  p {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
    padding-bottom: 20px;
  }

  button {
    border-radius: 30px;
    font-size: 16px;
  }
`;
