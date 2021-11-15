import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders', async () => {
  render(<App />);

  await waitFor(() => {
    const linkElement = screen.getByText(/get more tickets/i);
    expect(linkElement).toBeInTheDocument();
  });
});
