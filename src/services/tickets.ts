// import axios from 'config/axios';
import type { ITicket } from 'models';
import SilverCard from 'assets/images/mintable-silver-card-nft.svg';
import GoldCard from 'assets/images/mintable-gold-card-nft.svg';
import DiamondCard from 'assets/images/mintable-diamond-card-nft.svg';

export interface TicketResponse extends ITicket {
  //
}

// export const getTickets = () => axios.get<TicketResponse>('/tickets');

export const getTickets = () =>
  Promise.resolve([
    {
      id: 'silver',
      name: 'Silver',
      image: SilverCard,
    },
    {
      id: 'gold',
      name: 'Gold',
      image: GoldCard,
    },
    {
      id: 'diamond',
      name: 'Diamond',
      image: DiamondCard,
    },
  ]);
