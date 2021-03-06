import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as meetups } from './meetups';
import { reducer as meetupDetails } from './meetupDetails';
import { reducer as subscriptions } from './subscriptions';

export default history => combineReducers({
  router: connectRouter(history),
  auth,
  toastr,
  meetups,
  meetupDetails,
  subscriptions,
});
