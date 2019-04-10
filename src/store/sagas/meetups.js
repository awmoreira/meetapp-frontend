import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import { push } from 'connected-react-router';
import api from '../../services/api';

import MeetupsActions from '../ducks/meetups';

export function* getMeetups() {
  const response = yield call(api.get, 'meetups');

  yield put(MeetupsActions.getMeetupsSuccess(response.data.data));
}

export function* addMeetup({
  title, description, preference, locale, date_event, file_id,
}) {
  try {
    const response = yield call(api.post, 'meetups', {
      title,
      description,
      preference,
      locale,
      date_event,
      file_id,
    });

    yield put(MeetupsActions.addMeetupSuccess(response.data));
    yield put(
      toastrActions.add({
        type: 'success',
        title: 'Meetup',
        message: 'Criado com sucesso.',
      }),
    );
    yield put(push('/'));
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha ao criar meetup',
        message: 'Por favor tente novamente mais tarde.',
      }),
    );
  }
}
