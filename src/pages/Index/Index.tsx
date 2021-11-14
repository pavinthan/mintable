import TicketPlaceholder from 'assets/images/ticket-placeholder.svg';
import React from 'react';
import { Button, TicketCard, TicketFooter } from 'components';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketsAsync } from 'features/tickets/sagas';
import { getTicketsSelector } from 'features/tickets/selector';
import type { ITicket } from 'models';

function Index() {
  const [selected, setSelected] = React.useState(null);
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
          <div className="flex-1 lg:p-8 p-2 sm:p-4 flex flex-col">
            <div className="text-center">
              <h2 className="font-semibold">Collectors Event</h2>
              <p>Participate and win high quality currated NFTs</p>
            </div>

            <div className="flex-1 border-2 border-dashed mt-3 selection-none flex flex-col items-center justify-center">
              <img src={TicketPlaceholder} alt="" />
              <p className="mt-3 text-gray-500">
                Drag a ticket or use the button below to draw your tickets
              </p>
            </div>
          </div>
          {selected && (
            <div className="border-t hidden lg:flex flex-col">
              <TicketFooter ticker={selected} />
            </div>
          )}
        </div>
      </div>
    </DndProvider>
  );
}

export default Index;
