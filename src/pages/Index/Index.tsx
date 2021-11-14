import React from 'react';
import { Button, TicketCard } from 'components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketsAsync } from 'features/tickets/sagas';
import { getTicketsSelector } from 'features/tickets/selector';
import Ticket from 'assets/images/ticket.svg';
import type { ITicket } from 'models';

function Index() {
  const tickets = useSelector(getTicketsSelector);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getTicketsAsync());
  }, [dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-gray-50 flex flex-1 flex-col lg:flex-row lg:p-8 p-2 sm:p-4">
        <div className="bg-white shadow rounded w-full lg:w-1/6">
          <div className="flex justify-between lg:p-4 p-1 sm:p-2 border-b items-center">
            <h2 className="font-semibold">Get More Tickets</h2>
            <div className="ml-3">
              <Button children="Buy" />
            </div>
          </div>
          <div className="p-3 lg:p-10 flex flex-row lg:flex-col">
            {tickets.map((item: ITicket) => (
              <TicketCard
                id={item.id}
                key={item.id}
                name={item.name}
                image={item.image}
                className="lg:mt-3 px-1 lg:px-0"
              />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col lg:ml-3 bg-white shadow rounded order-first md:order-last">
          <div className="flex-1 lg:p-8 p-2 sm:p-4 ">Header</div>
          <div className="border-t hidden lg:flex flex-col">
            <div className="flex justify-between items-center p-6">
              <div className="flex items-center">
                <img src={Ticket} alt="Ticket" />
                <div className="ml-3">
                  <h3 className="font-semibold">Draw Tickets</h3>
                  <div>10 Tickets found</div>
                  <div>
                    Open your tickets and get a chance to win $1000 worth of
                    high quality NFTs! Learn More
                  </div>
                </div>
              </div>
              <div>
                <h3>Silver Ticket (1)</h3>
                <div>
                  <Button children="Draw Ticket" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default Index;
