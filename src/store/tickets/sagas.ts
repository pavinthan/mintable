import * as actions from './actions';
import { call } from 'redux-saga/effects';
// @ts-ignore
import { takeEveryAsync } from 'saga-toolkit';
import { getTickets as getTicketsAPI } from 'services';

function* getTickets(): Generator<any> {
  return yield call(() => getTicketsAPI());
}

export default function* ticketsSaga() {
  yield takeEveryAsync(actions.getTickets.type, getTickets);
}
