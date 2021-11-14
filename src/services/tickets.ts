import axios from "config/axios";
import type { ITicket } from "models";

export interface TicketResponse extends ITicket {
  //
}

export const getTickets = () => axios.get<TicketResponse>("/tickets");
