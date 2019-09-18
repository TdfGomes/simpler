import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './config';

function Routes() {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
