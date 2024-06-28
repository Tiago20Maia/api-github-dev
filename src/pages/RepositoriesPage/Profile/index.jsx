import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export default function Profile () {
  return (
    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/24621484?v=4" />
        <Login>tiago20maia</Login>
        <Name>Tiago Maia</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} /> TM Solution
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Fortaleza
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://devsamurai.com.br">devsamurai.com.br</a>
        </Data>
      </Inner>
    </Container>
  );
}
