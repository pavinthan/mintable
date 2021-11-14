import { render, screen } from '@testing-library/react';
import TicketCard from './TicketCard';

test('renders hello', () => {
  render(<TicketCard name="hello" id="1" />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
