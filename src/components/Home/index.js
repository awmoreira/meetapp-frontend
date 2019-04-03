import React, { Component } from 'react';

import {
  Container, Box, MeetupsList, Meetup,
} from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Box>
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
