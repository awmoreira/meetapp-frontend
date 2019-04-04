import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileForm = styled.form`
  background: transparent;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: stretch;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 14px;
  }

  p {
    opacity: 0.8;
    font-family: Helvetica;
    font-size: 16px;
    color: #ffffff;
    line-height: 28px;
    text-align: left;
  }

  span {
    margin-top: 30px;
    font-family: Helvetica;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    text-align: left;
  }

  button {
    margin: 20px 0 0;
    border-radius: 25px;
    font-size: 16px;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      /* align-items: center; */
      margin-bottom: 14px;

      &:first-child {
        margin-top: 20px;
      }

      label {
        span {
          font-family: Helvetica;
          font-weight: normal;
          font-size: 18px;
          color: #ffffff;
          text-align: left;
          margin-left: 10px;
        }
      }
    }
  }
`;
