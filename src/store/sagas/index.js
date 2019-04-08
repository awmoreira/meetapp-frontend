import { all, takeLatest } from 'redux-saga/effects';

import {
  signIn,
  updateUser,
  // signOut,
  // signUp,
} from './auth';
import { AuthTypes } from '../ducks/auth';

import { getMeetups, addMeetup } from './meetups';
import { MeetupsTypes } from '../ducks/meetups';

// import { getTeams, addTeam } from './teams';
// import { TeamsTypes } from '../ducks/teams';

// import { getMembers, updateMember, inviteMember } from './members';
// import { MembersTypes } from '../ducks/members';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.UPDATE_USER_REQUEST, updateUser),
    // takeLatest(AuthTypes.SIGN_OUT, signOut),
    // takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    // takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    // takeLatest(TeamsTypes.ADD_TEAM_REQUEST, addTeam),
    // takeLatest(TeamsTypes.SELECT_TEAM, getProjects),
    // takeLatest(TeamsTypes.SELECT_TEAM, getPermissions),

    takeLatest(MeetupsTypes.GET_MEETUPS_REQUEST, getMeetups),
    takeLatest(MeetupsTypes.ADD_MEETUP_REQUEST, addMeetup),

    // takeLatest(MembersTypes.GET_MEMBERS_REQUEST, getMembers),
    // takeLatest(MembersTypes.UPDATE_MEMBER_REQUEST, updateMember),
    // takeLatest(MembersTypes.INVITE_MEMBER_REQUEST, inviteMember),
  ]);
}
