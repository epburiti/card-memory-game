import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Menu from './Components/Menu/index';
import Game from './Components/Game/index';



const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Menu} path="/" exact />
      <Route component={Game} path="/start" />
    </BrowserRouter>
  );  
}

export default Routes;