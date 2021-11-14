import { render, screen } from '@testing-library/react';
import Index from './Index';

test('renders', () => {
  render(<Index />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
