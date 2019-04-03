import React from 'react';
import { Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import Meetup from '../pages/Meetup';
import Search from '../components/Search';
import NewMeetup from '../components/NewMeetup';
import Profile from '../components/Profile';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Meetup} />
      <Private path="/search" component={Search} />
      <Private path="/newMeetup" component={NewMeetup} />
      <Private path="/profile" component={Profile} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
