import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NewMeetupForm = styled.form`
  background: transparent;
  padding: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: stretch;

  img {
    width: 40px;
    height: 40px;
    align-self: center;
    margin-bottom: 15px;
  }

  span {
    color: #ffffff;
    font-family: Helvetica;
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
    color: #ffffff;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 20px;
    opacity: 0.5;

    &:focus {
      border-color: #e5556e;
    }
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
