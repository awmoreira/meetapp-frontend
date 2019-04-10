import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '../../store/ducks/meetups';
import AuthActions from '../../store/ducks/auth';

import {
  Container, Box, MeetupsList, Meetup, DetailsMeetup,
} from './styles';
import ArrowRight from '../../assets/right-arrow.svg';

class Dashboard extends Component {
  static propTypes = {
    getMeetupsRequest: PropTypes.func.isRequired,
    getUserRequest: PropTypes.func.isRequired,
    meetups: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          file_id: PropTypes.number,
        }),
      ),
    }).isRequired,
    auth: PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.number,
      }),
    }).isRequired,
  };

  componentDidMount() {
    const { getMeetupsRequest, getUserRequest } = this.props;

    getUserRequest();
    getMeetupsRequest();
  }

  filterMeetupsSub = () => {
    const { meetups, auth } = this.props;
    // This is not  working, the filter not is correct
    const res = meetups.data.filter(
      meetup => meetup.subscriptions.length > 0
        && meetup.subscriptions.filter(sub => sub.user_id === auth.user.id),
    );

    // console.log(res);
    return res;
  };

  filterMeetupsNext = () => {
    const { meetups } = this.props;

    const filteredDates = meetups.data.filter(
      d => new Date(d.date_event) - new Date().setDate(new Date().getDate() + 30) < 0,
    );

    return filteredDates;
  };

  filterMeetupsRec = () => {
    const { meetups, auth } = this.props;

    const res = meetups.data.filter(
      meetup => meetup.preference === (auth.user.preference.front ? 'front' : ''),
    );

    // console.log(res);
    return res;
  };

  render() {
    const subs = this.filterMeetupsSub();
    const nexts = this.filterMeetupsNext();
    const rec = this.filterMeetupsRec();

    return (
      <Container>
        <Box>
          <span>Inscrições</span>
          <MeetupsList>
            {subs
              && subs.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.subscriptions
                          ? `${meetup.subscriptions.length} membros`
                          : 'Nenhum membro'}
                      </span>
                    </div>
                    <DetailsMeetup to={`/meetups/${meetup.id}`}>
                      <img alt="Right Arrow" src={ArrowRight} />
                    </DetailsMeetup>
                  </div>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>

        <Box>
          <span>Próximos meetups (30 dias)</span>
          <MeetupsList>
            {nexts
              && nexts.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.subscriptions
                          ? `${meetup.subscriptions.length} membros`
                          : 'Nenhum membro'}
                      </span>
                    </div>
                    <DetailsMeetup to={`/meetups/${meetup.id}`}>
                      <img alt="Right Arrow" src={ArrowRight} />
                    </DetailsMeetup>
                  </div>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>

        <Box>
          <span>Recomendados</span>
          <MeetupsList>
            {rec
              && rec.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.subscriptions
                          ? `${meetup.subscriptions.length} membros`
                          : 'Nenhum membro'}
                      </span>
                    </div>
                    <DetailsMeetup to={`/meetups/${meetup.id}`}>
                      <img alt="Right Arrow" src={ArrowRight} />
                    </DetailsMeetup>
                  </div>
                </Meetup>
              ))}
          </MeetupsList>
        </Box>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...MeetupsActions, ...AuthActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
