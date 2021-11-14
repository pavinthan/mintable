import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { State } from 'store';

const ticketState: any = (state: State) => state.tickets;

export const getTicketsSelector = createDraftSafeSelector(
  ticketState,
  (state) => state.tickets
);
