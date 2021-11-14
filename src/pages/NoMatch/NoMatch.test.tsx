import { render, screen } from '@testing-library/react';
import NoMatch from './NoMatch';

test('renders', () => {
  render(<NoMatch />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
