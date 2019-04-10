import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getMeetupsRequest: null,
  getMeetupsSuccess: ['data'],
  searchMeetupsRequest: ['term'],
  addMeetupRequest: ['title', 'description', 'preference', 'locale', 'date_event', 'file_id'],
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

export const searchRequest = (state, { term }) => state.merge({
  data: state.data.filter(item => item.title.toLowerCase().search(term.toLowerCase()) !== -1),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_MEETUPS_SUCCESS]: getSuccess,
  [Types.SEARCH_MEETUPS_REQUEST]: searchRequest,
  [Types.ADD_MEETUP_SUCCESS]: addSuccess,
});
