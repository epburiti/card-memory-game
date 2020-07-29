import React from 'react';
import {Link} from 'react-router-dom';

import { Container, Logo,ButtonCustom } from './styles';

const Menu: React.FC = () => {
  return (

    <Container>
      <Logo>?</Logo>
      <h1>Card Game</h1>

      <Link to="/start"><ButtonCustom>Start</ButtonCustom></Link>
      <ButtonCustom>Time Rank</ButtonCustom>
      <ButtonCustom>Repositorio</ButtonCustom>

    </Container>
  );
}

export default Menu;