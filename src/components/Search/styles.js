import styled from 'styled-components';

import SearchIcon from '../../assets/search.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const SearchInput = styled.div`
  display: flex;
  align-itens: center;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 6px 7px 6px 26px;
  background: #b9bbbe url(${SearchIcon}) no-repeat 7px center;

  input {
    flex: 1;
    font-family: Helvetica;
    font-size: 15px;
    color: #8e8e93;
    border: 0;
    background: #b9bbbe;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 20px;

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
  flex-wrap: wrap;
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
