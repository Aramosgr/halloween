import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from '../../constants/routes';
import Home from '../pages/home';
import Level1 from '../pages/level1';


export default function Routes(): any {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.HOME.route} component={Home} />
        <Route exact path={routes.LEVEL1.route} component={Level1} />
      </Switch>
    </BrowserRouter>
  );
}
