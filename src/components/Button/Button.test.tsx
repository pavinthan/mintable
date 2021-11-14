import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders hello', () => {
  render(<Button children="Hello" />);
  const linkElement = screen.getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
