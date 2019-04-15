import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsMeetupDetails from '../../store/ducks/meetupDetails';
import ActionsSubscriptions from '../../store/ducks/subscriptions';

import { Container, Info } from './styles';
import Button from '../../styles/components/Button';

class Meetup extends Component {
  static propTypes = {
    getMeetupRequest: PropTypes.func.isRequired,
    addSubscriptionRequest: PropTypes.func.isRequired,
    meetup: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      file_id: PropTypes.number,
      subscriptions: PropTypes.arrayOf(PropTypes.shape()),
      locale: PropTypes.string,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    this.loadMeetup();
  }

  loadMeetup = () => {
    const { match } = this.props;
    const { id } = match.params;
    const { getMeetupRequest } = this.props;

    getMeetupRequest(id);
  };

  handleSubmitSubscription = () => {
    const { match } = this.props;
    const { id: meetup_id } = match.params;
    const { addSubscriptionRequest } = this.props;

    addSubscriptionRequest(meetup_id);
  };

  render() {
    const { meetup } = this.props;

    return (
      <Container>
        <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
        <Info>
          <strong>{meetup.title}</strong>
          <span>
            {meetup.subscriptions ? `${meetup.subscriptions.length} membros` : 'Nenhum membro'}
          </span>

          <p>{meetup.description}</p>

          <span>Realizado em:</span>
          <p>{meetup.locale}</p>

          <Button size="big" type="button" onClick={this.handleSubmitSubscription}>
            Inscreva-se
          </Button>
        </Info>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  meetup: state.meetupDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ActionsMeetupDetails, ...ActionsSubscriptions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
