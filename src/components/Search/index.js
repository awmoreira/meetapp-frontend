import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MeetupsActions from '../../store/ducks/meetups';

import {
  Container, SearchInput, Box, MeetupsList, Meetup, DetailsMeetup, Message,
} from './styles';

import ArrowRight from '../../assets/right-arrow.svg';

class Search extends Component {
  static propTypes = {
    getSubscriptionsRequest: PropTypes.func.isRequired,
    getNextsRequest: PropTypes.func.isRequired,
    getRecommendedRequest: PropTypes.func.isRequired,
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
  };

  componentDidMount() {
    const { getSubscriptionsRequest, getNextsRequest, getRecommendedRequest } = this.props;

    getSubscriptionsRequest();
    getNextsRequest();
    getRecommendedRequest();

    this.searchInput.focus();
  }

  handleInputSearch = (e) => {
    const {
      searchMeetupsRequest,
      getSubscriptionsRequest,
      getNextsRequest,
      getRecommendedRequest,
    } = this.props;
    if (e.target.value !== '') {
      searchMeetupsRequest(e.target.value);
    } else {
      getSubscriptionsRequest();
      getNextsRequest();
      getRecommendedRequest();
    }
  };

  render() {
    const { subscriptions, nexts, recommended } = this.props;

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
          {subscriptions.length === 0 && (
            <Message>
              <span>Nenhuma inscrição realizada.</span>
            </Message>
          )}
          <MeetupsList>
            {subscriptions
              && subscriptions.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
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
          <span>Próximos meetups</span>
          {nexts.length === 0 && (
            <Message>
              <span>Não existe próximos meetups.</span>
            </Message>
          )}
          <MeetupsList>
            {nexts
              && nexts.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
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
          {recommended.length === 0 && (
            <Message>
              <span>Escolha suas preferências de meetups.</span>
            </Message>
          )}
          <MeetupsList>
            {recommended
              && recommended.map(meetup => (
                <Meetup key={meetup.id}>
                  <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
                  <div>
                    <div>
                      <strong>{meetup.title}</strong>
                      <span>
                        {meetup.__meta__.subscriptions_count > 0
                          ? `${meetup.__meta__.subscriptions_count} membros`
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
  subscriptions: state.meetups.subscriptions,
  nexts: state.meetups.nexts,
  recommended: state.meetups.recommended,
});

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
