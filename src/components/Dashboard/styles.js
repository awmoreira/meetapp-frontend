import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
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

  span {
    color: #fff;
    font-family: Helvetica;
  }
`;
