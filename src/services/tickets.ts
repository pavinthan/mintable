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
      available: 10,
      name: 'Silver',
      image: SilverCard,
    },
    {
      id: 'gold',
      name: 'Gold',
      available: 20,
      image: GoldCard,
    },
    {
      id: 'diamond',
      available: 30,
      name: 'Diamond',
      image: DiamondCard,
    },
  ]);
