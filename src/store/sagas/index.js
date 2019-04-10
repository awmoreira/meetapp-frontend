import { all, takeLatest } from 'redux-saga/effects';

import {
  signIn,
  updateUser,
  getUser,
  // signOut,
  // signUp,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { getMeetups, addMeetup } from './meetups';
import { MeetupsTypes } from '../ducks/meetups';
import { getMeetup } from './meetupDetails';
import { MeetupDetailsTypes } from '../ducks/meetupDetails';

import { getSubscriptions, addSubscription, deleteSubscription } from './subscriptions';
import { SubscriptionsTypes } from '../ducks/subscriptions';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.UPDATE_USER_REQUEST, updateUser),
    takeLatest(AuthTypes.GET_USER_REQUEST, getUser),
    // takeLatest(AuthTypes.SIGN_OUT, signOut),
    // takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    takeLatest(MeetupsTypes.GET_MEETUPS_REQUEST, getMeetups),
    takeLatest(MeetupsTypes.ADD_MEETUP_REQUEST, addMeetup),
    takeLatest(MeetupDetailsTypes.GET_MEETUP_REQUEST, getMeetup),

    takeLatest(SubscriptionsTypes.GET_SUBSCRIPTIONS_REQUEST, getSubscriptions),
    takeLatest(SubscriptionsTypes.ADD_SUBSCRIPTION_REQUEST, addSubscription),
    takeLatest(SubscriptionsTypes.DELETE_SUBSCRIPTION_REQUEST, deleteSubscription),
  ]);
}
