import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100%;
  background: #1d2331;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignForm = styled.form`
  background: transparent;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  img {
    width: 40px;
    height: 40px;
    align-self: center;
    margin-bottom: 15px;
  }

  span {
    color: #ffffff;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
    margin-top: 15px;
  }

  input {
    height: 40px;
    padding: 0px;
    border-radius: 3px;
    border: 0;
    background-color: #1d2331;
    color: #f6f6f6;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 20px;

    &:focus {
      border-color: #e5556e;
    }
  }

  button {
    margin: 20px 0 0;
    border-radius: 25px;
    font-size: 16px;
  }

  h1 {
    text-align: center;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 100;
    opacity: 0.6;
    color: #fff;
    margin-top: 18px;
  }
`;
