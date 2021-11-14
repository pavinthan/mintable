import { render, screen } from '@testing-library/react';
import LazyPage from './LazyPage';

test('renders', () => {
  render(<LazyPage page="Index" />);
  const linkElement = screen.getByText(/Index/i);
  expect(linkElement).toBeInTheDocument();
});
