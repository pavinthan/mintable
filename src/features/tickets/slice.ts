import { createSlice } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';
import type { ITicket } from 'models';

export interface TicketState {
  tickets: ITicket[];
}

const initialState: TicketState = {
  tickets: [],
};

export const ticketSlice: Slice<TicketState> = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    getTickets: (state, action) => {
      return {
        ...state,
        tickets: action.payload,
      };
    },
  },
});

export const { getTickets } = ticketSlice.actions;
export default ticketSlice.reducer;
