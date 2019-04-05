import React, { Component } from 'react';

import {
  Container, Box, MeetupsList, Meetup,
} from './styles';

export default class Search extends Component {
  state = {
    term: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { term } = this.state;

    return (
      <Container>
        <Box>
          <input
            type="text"
            name="term"
            value={term}
            onChange={this.handleInputChange}
            placeholder="Buscar meetups"
          />

          <span>Inscrições</span>
          <MeetupsList>
            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>
          </MeetupsList>
        </Box>

        <Box>
          <span>Próximos meetups</span>
          <MeetupsList>
            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>
          </MeetupsList>
        </Box>

        <Box>
          <span>Recomendados</span>
          <MeetupsList>
            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>

            <Meetup>
              <img
                alt="Meetup"
                src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
              />
              <div>
                <div>
                  <strong>Meetup React Native</strong>
                  <span>120 membros</span>
                </div>
                <button onClick={() => {}}>></button>
              </div>
            </Meetup>
          </MeetupsList>
        </Box>
      </Container>
    );
  }
}
