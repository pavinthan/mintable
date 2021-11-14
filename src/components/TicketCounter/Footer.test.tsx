import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders', () => {
  render(<Footer ticker={{} as any} />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
