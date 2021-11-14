import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";
import type { Slice } from "@reduxjs/toolkit";
import type { ITicket } from "models";

export interface TicketState {
  tickets: ITicket[];
}

const initialState: TicketState = {
  tickets: [],
};

export const ticketSlice: Slice<TicketState> = createSlice({
  name: actions.name,
  initialState,
  reducers: {},
  extraReducers: {
    [actions.getTickets.pending]: (state) => ({
      ...state,
      loading: true,
    }),
    [actions.getTickets.fulfilled]: (state, { payload }) => ({
      ...state,
      tickets: payload,
      loading: false,
    }),
    [actions.getTickets.rejected]: (state) => ({
      ...state,
      loading: false,
    }),
  },
});

export default ticketSlice.reducer;
