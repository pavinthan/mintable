import { createSlice } from '@reduxjs/toolkit';
import type { Slice } from '@reduxjs/toolkit';
import type { ITicket } from 'models';

export interface TicketState {
  activeId: string | null;
  tickets: ITicket[];
}

const initialState: TicketState = {
  activeId: null,
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
    setActiveId: (state, action) => {
      return {
        ...state,
        activeId: action.payload,
      };
    },
  },
});

export const { getTickets, setActiveId } = ticketSlice.actions;
export default ticketSlice.reducer;
