import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Main from '../pages/Main';
import Profile from '../components/Profile';
import Preferences from '../components/Preferences';

import Header from '../components/Header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header pathname={history.location.pathname} />
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Main} />
      <Private path="/profile" component={Profile} />
      <Private path="/preferences" component={Preferences} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
