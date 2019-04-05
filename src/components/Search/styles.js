import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 20px;

  input {
    font-family: Helvetica;
    height: 40px;
    width: 100%;
    padding-left: 35px;
    border-radius: 5px;
    border: 0;
    background-color: rgba(255, 255, 255, 0.1);
    color: #8e8e93;
    transition: border 0.15s ease;
    font-size: 15px;
    margin-bottom: 15px;
    letter-spacing: 0;

    &:focus {
      border-color: #e5556e;
    }
  }

  span {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: left;
    padding: 10px 0;
  }
`;

export const MeetupsList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Meetup = styled.li`
  background: #fff;
  margin-right: 20px;
  border: 0;
  border-radius: 5px;

  img {
    height: 146px;
    width: 290px;
  }

  div {
    display: flex;
    align-items: center;
    padding: 10px;

    div {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      strong {
        color: #222222;
        font-size: 16px;
      }

      span {
        padding-top: 10px;
        font-size: 14px;
        color: #999999;
        opacity: 0.6;
      }
    }
    button {
      width: 44px;
      height: 44px;
      margin-left: 40px;
      background-color: #e5556e;
      border: 0;
      border-radius: 50%;
      color: #fff;
    }
  }
`;
