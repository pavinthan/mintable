import TicketPlaceholder from 'assets/images/ticket-placeholder.svg';
import { setActiveId } from 'features/tickets/slice';
import { getActiveTicketSelector } from 'features/tickets/selector';
import Footer from './Footer';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

function TicketCounter() {
  const dispatch = useDispatch();
  const activeTicket = useSelector(getActiveTicketSelector);

  const [collectedProps, drop] = useDrop(() => ({
    accept: 'BOX',
    drop: (item: any) => {
      dispatch(setActiveId(item.id));
    },
  }));

  return (
    <>
      <div
        className="flex-1 lg:p-8 p-2 sm:p-4 flex flex-col"
        ref={drop}
        {...collectedProps}
      >
        <div className="text-center">
          <h2 className="font-semibold">Collectors Event</h2>
          <p>Participate and win high quality currated NFTs</p>
        </div>

        <div className="flex-1 border-2 border-dashed mt-3 selection-none flex flex-col items-center justify-center">
          <img
            src={activeTicket ? activeTicket.image : TicketPlaceholder}
            alt=""
          />
          <p className="mt-3 text-gray-500">
            Drag a ticket or use the button below to draw your tickets
          </p>
        </div>
      </div>
      {activeTicket && (
        <div className="border-t hidden lg:flex flex-col">
          <Footer ticker={activeTicket} />
        </div>
      )}
    </>
  );
}

export default TicketCounter;
