import styled from 'styled-components';

import { Link } from 'react-router-dom';
import SearchIcon from '../../assets/search.svg';

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
  width: 100%;
  max-width: 930px;

  span {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: left;
    padding: 10px 0;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 6px 7px 6px 26px;
  margin-bottom: 20px;
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

export const MeetupsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const Meetup = styled.li`
  background: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 0;
  border-radius: 5px;

  img {
    height: 146px;
    width: 290px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;

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
  }
`;

export const DetailsMeetup = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 44px;
  height: 44px;
  margin-left: 40px;
  background-color: #e5556e;
  border: 0;
  border-radius: 50%;
  color: #fff;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Message = styled.div`
  padding: 10px;
  background-color: #d9edf7;
  box-shadow: 0 25px 10px -15px rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  border-radius: 5px;
  border-color: #bce8f1;

  span {
    color: #31708f;
    font-family: Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;
