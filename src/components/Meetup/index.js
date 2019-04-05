import React from 'react';

import { Container } from './styles';
import Button from '../../styles/components/Button';

const Meetup = () => (
  <Container>
    <img
      alt="Meetup"
      src="https://secure.meetupstatic.com/s/img/7223371979728590/app_download/social/fb/meetup.en.png"
    />

    <strong>Meetup React Native</strong>
    <span>120 membros</span>

    <p>
      O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
      desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces móveis
      multiplataforma com Javascript.
    </p>

    <span>Realizado em:</span>
    <p>Rua Guilherme Gembalam, 260, Rio do Sul -SC</p>

    <Button size="big" type="button" onClick={() => {}}>
      Inscreva-se
    </Button>
  </Container>
);

export default Meetup;
