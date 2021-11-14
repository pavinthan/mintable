import { createAction } from '@reduxjs/toolkit';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getTickets as getTicketsAPI } from 'services';
import { getTickets } from './slice';

export const getTicketsAsync = createAction('tickets/getTicketsAsync');

function* getTicketsSaga() {
  let tickets = [];
  try {
    tickets = yield call(() => getTicketsAPI());
  } catch (error) {
    //
  }

  yield put(getTickets(tickets));
}

function* ticketsSaga() {
  yield takeLatest(getTicketsAsync, getTicketsSaga);
}

export default ticketsSaga;
