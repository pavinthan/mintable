import { render, screen } from '@testing-library/react';
import TicketFooter from './TicketFooter';

test('renders', () => {
  render(<TicketFooter />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
