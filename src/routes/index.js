import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Main from '../pages/Main';
import Preferences from '../pages/Preferences';
import Profile from '../components/Profile';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Main} />
      <Private path="/preferences" component={Preferences} />
      <Private path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
