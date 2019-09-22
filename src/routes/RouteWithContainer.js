import React from 'react';
import { Route } from 'react-router-dom';
import Container from '../components/common/Container';

function RouterWithContainer(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <Container>
          <route.component {...props} routes={route.routes} />
        </Container>
      )}
    />
  );
}

export default RouterWithContainer;
