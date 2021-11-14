import { render, screen } from '@testing-library/react';
import TicketCounter from './TicketCounter';

test('renders', () => {
  render(<TicketCounter />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
