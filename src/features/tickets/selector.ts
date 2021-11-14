import { createDraftSafeSelector } from '@reduxjs/toolkit';
import type { ITicket } from 'models';
import type { State } from 'store';

const ticketState: any = (state: State) => state.tickets;

export const getTicketsSelector = createDraftSafeSelector(
  ticketState,
  (state) => state.tickets
);

export const getActiveTicketSelector = createDraftSafeSelector(
  ticketState,
  (state) => state.tickets.find((i: ITicket) => i.id === state.activeId)
);
