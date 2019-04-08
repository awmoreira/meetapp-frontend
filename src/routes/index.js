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
import Search from '../components/Search';
import NewMeetup from '../components/NewMeetup';
import Meetup from '../components/Meetup';

import Header from '../components/Header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header history={history} />
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private exact path="/" component={Main} />
      <Private path="/profile" component={Profile} />
      <Private path="/preferences" component={Preferences} />
      <Private path="/search" component={Search} />
      <Private path="/newMeetup" component={NewMeetup} />
      <Private path="/meetups/:id" component={Meetup} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
