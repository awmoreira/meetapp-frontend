import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
// import { ConnectedRouter } from 'connected-react-router';

// import history from './history';

// import Private from './private';
// import Guest from './guest';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Main from '../pages/Main';

const Routes = () => (
  // <ConnectedRouter history={history}>
  <BrowserRouter>
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
