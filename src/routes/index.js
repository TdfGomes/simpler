import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routes } from './config';
import RouteWithContainer from './RouteWithContainer';

function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithContainer {...route} key={i} />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
