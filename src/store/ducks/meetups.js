import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getSubscriptionsRequest: null,
  getSubscriptionsSuccess: ['data'],
  getNextsRequest: null,
  getNextsSuccess: ['data'],
  getRecommendedRequest: null,
  getRecommendedSuccess: ['data'],
  searchMeetupsRequest: ['term'],
  addMeetupRequest: ['title', 'description', 'preference', 'locale', 'date_event', 'file_id'],
  addMeetupSuccess: ['meetup'],
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  subscriptions: [],
  nexts: [],
  recommended: [],
});

/* Reducers */

export const getSubSuccess = (state, { data }) => state.merge({ subscriptions: data });

export const getNextSuccess = (state, { data }) => state.merge({ nexts: data });

export const getRecommendedSuccess = (state, { data }) => state.merge({ recommended: data });

// export const getSuccess = (state, { data }) => state.merge({ data });

export const addSuccess = (state, { meetup }) => state.merge({ data: [...state.data, meetup] });

export const searchRequest = (state, { term }) => state.merge({
  data: state.data.filter(item => item.title.toLowerCase().search(term.toLowerCase()) !== -1),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_SUBSCRIPTIONS_SUCCESS]: getSubSuccess,
  [Types.GET_NEXTS_SUCCESS]: getNextSuccess,
  [Types.GET_RECOMMENDED_SUCCESS]: getRecommendedSuccess,
  // [Types.GET_MEETUPS_SUCCESS]: getSuccess,
  [Types.SEARCH_MEETUPS_REQUEST]: searchRequest,
  [Types.ADD_MEETUP_SUCCESS]: addSuccess,
});
