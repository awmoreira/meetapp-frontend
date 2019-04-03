import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import Header from '../components/Header';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Main from '../pages/Main';
import Search from '../pages/Search';
import NewMeetup from '../pages/NewMeetup';
import Profile from '../pages/Profile';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header />
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Main} />
      <Private path="/search" component={Search} />
      <Private path="/newMeetup" component={NewMeetup} />
      <Private path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
