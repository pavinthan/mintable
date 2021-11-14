// @ts-ignore
import { createSagaAction } from 'saga-toolkit';

export const name = 'tickets';

export const getTickets = createSagaAction(`${name}/getTickets`);
