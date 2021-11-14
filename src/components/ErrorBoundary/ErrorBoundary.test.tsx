import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

test('renders hello', () => {
  render(<ErrorBoundary children="hello" />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
