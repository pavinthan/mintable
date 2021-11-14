import Ticket from 'assets/images/ticket.svg';
import { Button } from 'components';
import type { ITicket } from 'models';

interface Props {
  ticker: ITicket;
}

function TicketFooter({ ticker }: Props) {
  return (
    <div className="flex justify-between items-center p-6">
      <div className="flex items-center">
        <img src={Ticket} alt="Ticket" />
        <div className="ml-3">
          <h3 className="font-semibold">Draw Tickets</h3>
          <div>{ticker.available} Tickets found</div>
          <div>
            Open your tickets and get a chance to win $1000 worth of high
            quality NFTs! Learn More
          </div>
        </div>
      </div>
      <div>
        <div className="border px-3 py-2 text-center">{ticker.name}</div>
        <div className="mt-1">
          <Button children="Draw Ticket" />
        </div>
      </div>
    </div>
  );
}

export default TicketFooter;
