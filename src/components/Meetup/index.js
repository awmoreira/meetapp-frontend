import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionsMeetupDetails from '../../store/ducks/meetupDetails';

import { Container, Info } from './styles';
import Button from '../../styles/components/Button';

class Meetup extends Component {
  componentDidMount() {
    this.loadMeetup();
  }

  loadMeetup = () => {
    const { id } = this.props.match.params;
    const { getMeetupRequest } = this.props;

    getMeetupRequest(id);
  };

  render() {
    const { meetup } = this.props;

    return (
      <Container>
        <img alt={meetup.title} src={`http://127.0.0.1:3333/files/${meetup.file_id}`} />
        <Info>
          <strong>{meetup.title}</strong>
          <span>120 membros</span>

          <p>{meetup.description}</p>

          <span>Realizado em:</span>
          <p>{meetup.locale}</p>

          <Button size="big" type="button" onClick={() => {}}>
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

const mapDispatchToProps = dispatch => bindActionCreators(ActionsMeetupDetails, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
