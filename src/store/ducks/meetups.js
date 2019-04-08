import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getMeetupsRequest: null,
  getMeetupsSuccess: ['data'],
  addMeetupRequest: ['title'],
  addMeetupSuccess: ['meetup'],
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */

export const getSuccess = (state, { data }) => state.merge({ data });

export const addSuccess = (state, { meetup }) => state.merge({ data: [...state.data, meetup] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MEETUPS_SUCCESS]: getSuccess,
  [Types.ADD_MEETUP_SUCCESS]: addSuccess,
});
