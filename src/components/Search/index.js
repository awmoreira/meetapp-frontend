import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '../../store/ducks/meetups';
import AuthActions from '../../store/ducks/auth';

import {
  Container, SearchInput, Box, MeetupsList, Meetup, DetailsMeetup,
} from './styles';

import ArrowRight from '../../assets/right-arrow.svg';

class Search extends Component {
  static propTypes = {
    getMeetupsRequest: PropTypes.func.isRequired,
    getUserRequest: PropTypes.func.isRequired,
    searchMeetupsRequest: PropTypes.func.isRequired,
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

    this.searchInput.focus();
  }

  handleInputSearch = (e) => {
    const { searchMeetupsRequest, getMeetupsRequest } = this.props;
    if (e.target.value !== '') {
      searchMeetupsRequest(e.target.value);
    } else {
      getMeetupsRequest();
    }
  };

  render() {
    const { meetups } = this.props;

    return (
      <Container>
        <Box>
          <SearchInput>
            <input
              ref={(input) => {
                this.searchInput = input;
              }}
              type="text"
              onChange={this.handleInputSearch}
              placeholder="Buscar meetups"
            />
          </SearchInput>

          <span>Inscrições</span>
          <MeetupsList>
            {meetups
              && meetups.data.map(meetup => (
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
            {meetups
              && meetups.data.map(meetup => (
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
            {meetups
              && meetups.data.map(meetup => (
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
)(Search);
