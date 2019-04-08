import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '../../store/ducks/meetups';

import {
  Container, Box, MeetupsList, Meetup, DetailsMeetup,
} from './styles';

class Dashboard extends Component {
  static propTypes = {
    getMeetupsRequest: PropTypes.func.isRequired,
    meetups: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          file_id: PropTypes.number,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { getMeetupsRequest } = this.props;

    getMeetupsRequest();
  }

  render() {
    const { meetups } = this.props;

    return (
      <Container>
        <Box>
          <span>Inscrições</span>
          <MeetupsList>
            {meetups
              && meetups.data.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>120 membros</span>
                    </div>
                    <DetailsMeetup to={`/meetup/${meetup.id}`}>
                      <span>></span>
                    </DetailsMeetup>
                  </div>
                </Meetup>
              ))}
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
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
                <DetailsMeetup onClick={() => {}}>></DetailsMeetup>
              </div>
            </Meetup>
          </MeetupsList>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    meetups: state.meetups,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
