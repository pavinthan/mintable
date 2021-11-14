import React from 'react';
import { Button, TicketCard } from 'components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from 'store/tickets/actions';
import { getTicketsSelector } from 'store/tickets/selector';
import type { ITicket } from 'models';

function Index() {
  const tickets = useSelector(getTicketsSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-50 flex flex-1 lg:p-8 p-2 sm:p-4">
        <div className="bg-white shadow rounded">
          <div className="flex justify-between lg:p-4 p-1 sm:p-2 border-b items-center">
            <h2 className="font-semibold">Get More Tickets</h2>
            <div className="flex-1 ml-3">
              <Button children="Buy" />
            </div>
          </div>
          <div>
            <ul>
              {tickets.map((item: ITicket) => (
                <li key={item.id}>
                  <TicketCard name={item.name} id={item.id} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 ml-3 bg-white shadow rounded lg:p-8 p-2 sm:p-4">
          Space
        </div>
      </div>
    </DndProvider>
  );
}

export default Index;
