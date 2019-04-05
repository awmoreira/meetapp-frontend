import React, { Component } from 'react';

import { Container, NewMeetupForm } from './styles';

import Button from '../../styles/components/Button';
import Checkbox from '../Checkbox';

class NewMeetup extends Component {
  state = {
    title: '',
    description: '',
    file_id: '',
    locale: '',

    front: false,
    back: false,
    mobile: false,
    devops: false,
    manager: false,
    marketing: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // call duck action addMeetupRequest
  };

  render() {
    const {
      title,
      description,
      locale,
      file_id,

      front,
      back,
      mobile,
      devops,
      manager,
      marketing,
    } = this.state;

    return (
      <Container>
        <NewMeetupForm onSubmit={this.handleSubmit}>
          <span>Título</span>
          <input
            name="title"
            value={title}
            onChange={this.handleInputChange}
            placeholder="Digite o título do meetup"
          />

          <span>Descrição</span>
          <input
            name="description"
            value={description}
            onChange={this.handleInputChange}
            placeholder="Descreva seu meetup"
          />

          <span>Imagem</span>
          {/* insert component for upload image */}

          <span>Localização</span>
          <input
            name="locale"
            value={locale}
            onChange={this.handleInputChange}
            placeholder="Onde seu meetup irá acontecer?"
          />

          <span>Preferências</span>
          <ul>
            <li>
              <label>
                <Checkbox name="front" checked={front} onChange={this.handleCheckboxChange} />
                <span>Front-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="back" checked={back} onChange={this.handleCheckboxChange} />
                <span>Back-end</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="mobile" checked={mobile} onChange={this.handleCheckboxChange} />
                <span>Mobile</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="devops" checked={devops} onChange={this.handleCheckboxChange} />
                <span>Devops</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox name="manager" checked={manager} onChange={this.handleCheckboxChange} />
                <span>Gestão</span>
              </label>
            </li>
            <li>
              <label>
                <Checkbox
                  name="marketing"
                  checked={marketing}
                  onChange={this.handleCheckboxChange}
                />
                <span>Marketing</span>
              </label>
            </li>
          </ul>

          <Button size="big" type="submit">
            Salvar
          </Button>
        </NewMeetupForm>
      </Container>
    );
  }
}

export default NewMeetup;
