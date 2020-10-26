import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import routes from '../../constants/routes';
import Home from '../pages/home';
import Miembros from '../pages/miembros';


export default function Routes(): any {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.HOME.route} component={Home} />
        <Route path={`${routes.MIEMBROS.route}/:code`} component={Miembros} />
      </Switch>
    </BrowserRouter>
  );
}
