import React from 'react';
import { Switch } from 'react-router-dom';
import { routes } from './config';
import RouteWithContainer from './RouteWithContainer';

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWithContainer {...route} key={i} />
      ))}
    </Switch>
  );
}

export default Routes;
